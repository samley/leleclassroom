#!/usr/bin/env python3
"""
处理汉字数据，生成完整的汉字学习数据库
"""

import json
import re
import os

def clean_pinyin(pinyin_list):
    """清理拼音数据"""
    if not pinyin_list:
        return []
    
    cleaned = []
    for p in pinyin_list:
        if p and isinstance(p, str):
            # 移除特殊字符，保留声调
            p = re.sub(r'[^\w\u00C0-\u017F]', '', p)
            if p:
                cleaned.append(p)
    
    return cleaned[:3]  # 最多保留3个读音

def clean_definition(definition):
    """清理释义"""
    if not definition:
        return "暂无释义"
    
    # 移除HTML标签和特殊字符
    definition = re.sub(r'<[^>]+>', '', definition)
    definition = re.sub(r'[^\w\s\u4e00-\u9fff；，。、！？：""''（）【】]', '', definition)
    
    # 限制长度
    if len(definition) > 50:
        definition = definition[:47] + "..."
    
    return definition or "暂无释义"

def estimate_difficulty(character_data):
    """估算汉字难度"""
    char = character_data.get('character', '')
    strokes = len(character_data.get('decomposition', ''))
    
    # 基于笔画数估算难度
    if strokes <= 5:
        return 1
    elif strokes <= 10:
        return 2
    elif strokes <= 15:
        return 3
    else:
        return 4

def estimate_grade(character_data, difficulty):
    """估算适合年级"""
    char = character_data.get('character', '')
    
    # 常用字优先分配到低年级
    common_chars_grade1 = set('一二三四五六七八九十人大小上下中天地水火木金土山川日月年手足口目耳心门车马鸟鱼虫草花树林石田电风雨雪云白黑红绿黄蓝好坏多少长短高低快慢新旧早晚来去走跑飞游学习读写听说看想知道吃喝睡起坐站笑哭唱跳画书本字词句话语文爱喜怕生死老少男女父母儿子家房屋')
    common_chars_grade2 = set('森章爱喜怕生死老少男女父母儿子家房屋学校班级同学老师朋友春夏秋冬东南西北左右前后里外远近高兴快乐美丽漂亮聪明勇敢善良诚实礼貌谦虚骄傲懒惰勤奋努力认真仔细马虎粗心细心耐心信心决心恒心毅力坚持放弃成功失败胜利失败希望失望满意不满')
    
    if char in common_chars_grade1:
        return 1
    elif char in common_chars_grade2:
        return 2
    elif difficulty <= 2:
        return min(3, difficulty + 1)
    else:
        return min(6, difficulty + 1)

def process_hanzi_data():
    """处理汉字数据"""
    input_file = 'data/complete_hanzi.json'
    output_file = 'js/hanzi-data-complete.js'
    
    if not os.path.exists(input_file):
        print(f"错误：找不到文件 {input_file}")
        return
    
    processed_characters = []
    valid_count = 0
    
    print("开始处理汉字数据...")
    
    with open(input_file, 'r', encoding='utf-8') as f:
        for line_num, line in enumerate(f, 1):
            try:
                data = json.loads(line.strip())
                char = data.get('character', '')
                
                # 过滤掉部首和特殊字符，只保留常用汉字
                if not char or len(char) != 1:
                    continue
                
                # 检查是否为汉字（Unicode范围）
                if not ('\u4e00' <= char <= '\u9fff'):
                    continue
                
                # 清理数据
                pinyin = clean_pinyin(data.get('pinyin', []))
                definition = clean_definition(data.get('definition', ''))
                radical = data.get('radical', char)
                
                # 如果没有拼音，跳过
                if not pinyin:
                    continue
                
                # 估算难度和年级
                difficulty = estimate_difficulty(data)
                grade = estimate_grade(data, difficulty)
                
                # 估算笔画数（简化方法）
                strokes = len(data.get('decomposition', '')) or len(char) * 3
                strokes = max(1, min(30, strokes))  # 限制在1-30之间
                
                character_info = {
                    'character': char,
                    'pinyin': pinyin,
                    'definition': definition,
                    'radical': radical,
                    'strokes': strokes,
                    'difficulty': difficulty,
                    'grade': grade
                }
                
                processed_characters.append(character_info)
                valid_count += 1
                
                # 限制数量，避免数据过大
                if valid_count >= 5000:
                    break
                    
            except json.JSONDecodeError:
                continue
            except Exception as e:
                print(f"处理第{line_num}行时出错: {e}")
                continue
    
    print(f"成功处理了 {valid_count} 个汉字")
    
    # 按年级和难度排序
    processed_characters.sort(key=lambda x: (x['grade'], x['difficulty'], x['strokes']))
    
    # 生成JavaScript文件
    js_content = f"""// 完整汉字数据库 - 包含{valid_count}个汉字
const HANZI_DATABASE = {json.dumps(processed_characters, ensure_ascii=False, indent=4)};

// 根据年级获取汉字
function getCharactersByGrade(grade) {{
    return HANZI_DATABASE.filter(char => char.grade === grade);
}}

// 根据难度获取汉字
function getCharactersByDifficulty(difficulty) {{
    return HANZI_DATABASE.filter(char => char.difficulty === difficulty);
}}

// 随机获取汉字
function getRandomCharacters(count = 10) {{
    const shuffled = [...HANZI_DATABASE].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}}

// 搜索汉字
function searchCharacters(query) {{
    return HANZI_DATABASE.filter(char =>
        char.character.includes(query) ||
        char.pinyin.some(p => p.includes(query)) ||
        char.definition.includes(query)
    );
}}

// 获取汉字详细信息
function getCharacterInfo(character) {{
    return HANZI_DATABASE.find(char => char.character === character);
}}

// 按年级分组获取汉字
function getCharactersByGradeRange(minGrade, maxGrade) {{
    return HANZI_DATABASE.filter(char => 
        char.grade >= minGrade && char.grade <= maxGrade
    );
}}

// 获取指定笔画数范围的汉字
function getCharactersByStrokeRange(minStrokes, maxStrokes) {{
    return HANZI_DATABASE.filter(char => 
        char.strokes >= minStrokes && char.strokes <= maxStrokes
    );
}}

// 获取包含指定部首的汉字
function getCharactersByRadical(radical) {{
    return HANZI_DATABASE.filter(char => char.radical === radical);
}}

// 统计信息
const HANZI_STATS = {{
    total: {valid_count},
    byGrade: {{
        grade1: HANZI_DATABASE.filter(c => c.grade === 1).length,
        grade2: HANZI_DATABASE.filter(c => c.grade === 2).length,
        grade3: HANZI_DATABASE.filter(c => c.grade === 3).length,
        grade4: HANZI_DATABASE.filter(c => c.grade === 4).length,
        grade5: HANZI_DATABASE.filter(c => c.grade === 5).length,
        grade6: HANZI_DATABASE.filter(c => c.grade === 6).length
    }},
    byDifficulty: {{
        easy: HANZI_DATABASE.filter(c => c.difficulty === 1).length,
        medium: HANZI_DATABASE.filter(c => c.difficulty === 2).length,
        hard: HANZI_DATABASE.filter(c => c.difficulty === 3).length,
        veryHard: HANZI_DATABASE.filter(c => c.difficulty === 4).length
    }}
}};

console.log('汉字数据库加载完成:', HANZI_STATS);
"""
    
    # 写入文件
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(js_content)
    
    print(f"汉字数据已保存到: {output_file}")
    
    # 打印统计信息
    grade_stats = {}
    difficulty_stats = {}
    
    for char in processed_characters:
        grade = char['grade']
        difficulty = char['difficulty']
        
        grade_stats[grade] = grade_stats.get(grade, 0) + 1
        difficulty_stats[difficulty] = difficulty_stats.get(difficulty, 0) + 1
    
    print("\n📊 统计信息:")
    print("按年级分布:")
    for grade in sorted(grade_stats.keys()):
        print(f"  {grade}年级: {grade_stats[grade]}个")
    
    print("按难度分布:")
    difficulty_names = {1: "简单", 2: "中等", 3: "困难", 4: "很难"}
    for difficulty in sorted(difficulty_stats.keys()):
        name = difficulty_names.get(difficulty, f"难度{difficulty}")
        print(f"  {name}: {difficulty_stats[difficulty]}个")

if __name__ == "__main__":
    process_hanzi_data()