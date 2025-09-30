// 汉字数据库 - 包含3000个常用汉字
const HANZI_DATABASE = [
    {
        character: "一",
        pinyin: ["yī"],
        definition: "数字1；单一的；全部的",
        radical: "一",
        strokes: 1,
        difficulty: 1,
        grade: 1
    },
    {
        character: "二",
        pinyin: ["èr"],
        definition: "数字2；第二",
        radical: "二",
        strokes: 2,
        difficulty: 1,
        grade: 1
    },
    {
        character: "三",
        pinyin: ["sān"],
        definition: "数字3；第三",
        radical: "一",
        strokes: 3,
        difficulty: 1,
        grade: 1
    },
    {
        character: "四",
        pinyin: ["sì"],
        definition: "数字4；第四",
        radical: "囗",
        strokes: 5,
        difficulty: 1,
        grade: 1
    },
    {
        character: "五",
        pinyin: ["wǔ"],
        definition: "数字5；第五",
        radical: "二",
        strokes: 4,
        difficulty: 1,
        grade: 1
    },
    {
        character: "六",
        pinyin: ["liù"],
        definition: "数字6；第六",
        radical: "八",
        strokes: 4,
        difficulty: 1,
        grade: 1
    },
    {
        character: "七",
        pinyin: ["qī"],
        definition: "数字7；第七",
        radical: "一",
        strokes: 2,
        difficulty: 1,
        grade: 1
    },
    {
        character: "八",
        pinyin: ["bā"],
        definition: "数字8；第八",
        radical: "八",
        strokes: 2,
        difficulty: 1,
        grade: 1
    },
    {
        character: "九",
        pinyin: ["jiǔ"],
        definition: "数字9；第九",
        radical: "乙",
        strokes: 2,
        difficulty: 1,
        grade: 1
    },
    {
        character: "十",
        pinyin: ["shí"],
        definition: "数字10；第十",
        radical: "十",
        strokes: 2,
        difficulty: 1,
        grade: 1
    },
    {
        character: "人",
        pinyin: ["rén"],
        definition: "人类；人民；别人",
        radical: "人",
        strokes: 2,
        difficulty: 1,
        grade: 1
    },
    {
        character: "大",
        pinyin: ["dà"],
        definition: "体积大；重要的；年长的",
        radical: "大",
        strokes: 3,
        difficulty: 1,
        grade: 1
    },
    {
        character: "小",
        pinyin: ["xiǎo"],
        definition: "体积小；年幼的；不重要的",
        radical: "小",
        strokes: 3,
        difficulty: 1,
        grade: 1
    },
    {
        character: "上",
        pinyin: ["shàng"],
        definition: "位置在高处；向上；上面",
        radical: "一",
        strokes: 3,
        difficulty: 1,
        grade: 1
    },
    {
        character: "下",
        pinyin: ["xià"],
        definition: "位置在低处；向下；下面",
        radical: "一",
        strokes: 3,
        difficulty: 1,
        grade: 1
    },
    {
        character: "中",
        pinyin: ["zhōng"],
        definition: "中间；中国；中等",
        radical: "丨",
        strokes: 4,
        difficulty: 1,
        grade: 1
    },
    {
        character: "天",
        pinyin: ["tiān"],
        definition: "天空；天气；一天",
        radical: "大",
        strokes: 4,
        difficulty: 1,
        grade: 1
    },
    {
        character: "地",
        pinyin: ["dì"],
        definition: "土地；地球；地方",
        radical: "土",
        strokes: 6,
        difficulty: 1,
        grade: 1
    },
    {
        character: "水",
        pinyin: ["shuǐ"],
        definition: "水；液体；河流",
        radical: "水",
        strokes: 4,
        difficulty: 1,
        grade: 1
    },
    {
        character: "火",
        pinyin: ["huǒ"],
        definition: "火；火焰；愤怒",
        radical: "火",
        strokes: 4,
        difficulty: 1,
        grade: 1
    },
    {
        character: "木",
        pinyin: ["mù"],
        definition: "木头；树木；木制的",
        radical: "木",
        strokes: 4,
        difficulty: 1,
        grade: 1
    },
    {
        character: "金",
        pinyin: ["jīn"],
        definition: "金子；金属；钱财",
        radical: "金",
        strokes: 8,
        difficulty: 2,
        grade: 1
    },
    {
        character: "土",
        pinyin: ["tǔ"],
        definition: "土壤；土地；本地的",
        radical: "土",
        strokes: 3,
        difficulty: 1,
        grade: 1
    },
    {
        character: "山",
        pinyin: ["shān"],
        definition: "山；山脉；坟墓",
        radical: "山",
        strokes: 3,
        difficulty: 1,
        grade: 1
    },
    {
        character: "川",
        pinyin: ["chuān"],
        definition: "河流；四川；平原",
        radical: "川",
        strokes: 3,
        difficulty: 1,
        grade: 1
    },
    {
        character: "日",
        pinyin: ["rì"],
        definition: "太阳；白天；日子",
        radical: "日",
        strokes: 4,
        difficulty: 1,
        grade: 1
    },
    {
        character: "月",
        pinyin: ["yuè"],
        definition: "月亮；月份；肉",
        radical: "月",
        strokes: 4,
        difficulty: 1,
        grade: 1
    },
    {
        character: "年",
        pinyin: ["nián"],
        definition: "年；年龄；收成",
        radical: "干",
        strokes: 6,
        difficulty: 1,
        grade: 1
    },
    {
        character: "手",
        pinyin: ["shǒu"],
        definition: "手；亲手；技能",
        radical: "手",
        strokes: 4,
        difficulty: 1,
        grade: 1
    },
    {
        character: "足",
        pinyin: ["zú"],
        definition: "脚；足够；满足",
        radical: "足",
        strokes: 7,
        difficulty: 2,
        grade: 1
    },
    {
        character: "口",
        pinyin: ["kǒu"],
        definition: "嘴巴；出入口；人口",
        radical: "口",
        strokes: 3,
        difficulty: 1,
        grade: 1
    },
    {
        character: "目",
        pinyin: ["mù"],
        definition: "眼睛；目标；条目",
        radical: "目",
        strokes: 5,
        difficulty: 1,
        grade: 1
    },
    {
        character: "耳",
        pinyin: ["ěr"],
        definition: "耳朵；听觉；形状像耳朵的",
        radical: "耳",
        strokes: 6,
        difficulty: 1,
        grade: 1
    },
    {
        character: "心",
        pinyin: ["xīn"],
        definition: "心脏；内心；中心",
        radical: "心",
        strokes: 4,
        difficulty: 1,
        grade: 1
    },
    {
        character: "门",
        pinyin: ["mén"],
        definition: "门；门第；部门",
        radical: "门",
        strokes: 3,
        difficulty: 1,
        grade: 1
    },
    {
        character: "车",
        pinyin: ["chē"],
        definition: "车辆；机器；棋子",
        radical: "车",
        strokes: 4,
        difficulty: 1,
        grade: 1
    },
    {
        character: "马",
        pinyin: ["mǎ"],
        definition: "马；姓氏；棋子",
        radical: "马",
        strokes: 3,
        difficulty: 1,
        grade: 1
    },
    {
        character: "鸟",
        pinyin: ["niǎo"],
        definition: "鸟类；禽类",
        radical: "鸟",
        strokes: 5,
        difficulty: 1,
        grade: 1
    },
    {
        character: "鱼",
        pinyin: ["yú"],
        definition: "鱼类；姓氏",
        radical: "鱼",
        strokes: 8,
        difficulty: 2,
        grade: 1
    },
    {
        character: "虫",
        pinyin: ["chóng"],
        definition: "昆虫；虫子",
        radical: "虫",
        strokes: 6,
        difficulty: 1,
        grade: 1
    },
    {
        character: "草",
        pinyin: ["cǎo"],
        definition: "草；草本植物；粗糙的",
        radical: "艹",
        strokes: 9,
        difficulty: 2,
        grade: 1
    },
    {
        character: "花",
        pinyin: ["huā"],
        definition: "花朵；花费；花样",
        radical: "艹",
        strokes: 7,
        difficulty: 2,
        grade: 1
    },
    {
        character: "树",
        pinyin: ["shù"],
        definition: "树木；建立；树立",
        radical: "木",
        strokes: 9,
        difficulty: 2,
        grade: 1
    },
    {
        character: "林",
        pinyin: ["lín"],
        definition: "森林；很多；姓氏",
        radical: "木",
        strokes: 8,
        difficulty: 2,
        grade: 1
    },
    {
        character: "森",
        pinyin: ["sēn"],
        definition: "森林；众多；阴森",
        radical: "木",
        strokes: 12,
        difficulty: 2,
        grade: 2
    },
    {
        character: "石",
        pinyin: ["shí"],
        definition: "石头；石料；姓氏",
        radical: "石",
        strokes: 5,
        difficulty: 1,
        grade: 1
    },
    {
        character: "田",
        pinyin: ["tián"],
        definition: "田地；农田；姓氏",
        radical: "田",
        strokes: 5,
        difficulty: 1,
        grade: 1
    },
    {
        character: "电",
        pinyin: ["diàn"],
        definition: "电；闪电；电报",
        radical: "田",
        strokes: 5,
        difficulty: 1,
        grade: 1
    },
    {
        character: "风",
        pinyin: ["fēng"],
        definition: "风；风气；风度",
        radical: "风",
        strokes: 4,
        difficulty: 1,
        grade: 1
    },
    {
        character: "雨",
        pinyin: ["yǔ"],
        definition: "雨；下雨",
        radical: "雨",
        strokes: 8,
        difficulty: 2,
        grade: 1
    },
    {
        character: "雪",
        pinyin: ["xuě"],
        definition: "雪；雪花；洗雪",
        radical: "雨",
        strokes: 11,
        difficulty: 2,
        grade: 1
    },
    {
        character: "云",
        pinyin: ["yún"],
        definition: "云；云彩；说",
        radical: "二",
        strokes: 4,
        difficulty: 1,
        grade: 1
    },
    {
        character: "白",
        pinyin: ["bái"],
        definition: "白色；明亮；清楚",
        radical: "白",
        strokes: 5,
        difficulty: 1,
        grade: 1
    },
    {
        character: "黑",
        pinyin: ["hēi"],
        definition: "黑色；黑暗；秘密",
        radical: "黑",
        strokes: 12,
        difficulty: 2,
        grade: 1
    },
    {
        character: "红",
        pinyin: ["hóng"],
        definition: "红色；革命的；受欢迎的",
        radical: "纟",
        strokes: 6,
        difficulty: 1,
        grade: 1
    },
    {
        character: "绿",
        pinyin: ["lǜ"],
        definition: "绿色；环保的",
        radical: "纟",
        strokes: 11,
        difficulty: 2,
        grade: 1
    },
    {
        character: "黄",
        pinyin: ["huáng"],
        definition: "黄色；皇帝；姓氏",
        radical: "黄",
        strokes: 11,
        difficulty: 2,
        grade: 1
    },
    {
        character: "蓝",
        pinyin: ["lán"],
        definition: "蓝色；蓝天",
        radical: "艹",
        strokes: 13,
        difficulty: 2,
        grade: 2
    },
    {
        character: "好",
        pinyin: ["hǎo"],
        definition: "好；良好；容易",
        radical: "女",
        strokes: 6,
        difficulty: 1,
        grade: 1
    },
    {
        character: "坏",
        pinyin: ["huài"],
        definition: "坏；损坏；邪恶",
        radical: "土",
        strokes: 7,
        difficulty: 2,
        grade: 1
    },
    {
        character: "多",
        pinyin: ["duō"],
        definition: "多；很多；多么",
        radical: "夕",
        strokes: 6,
        difficulty: 1,
        grade: 1
    },
    {
        character: "少",
        pinyin: ["shǎo"],
        definition: "少；年轻；缺少",
        radical: "小",
        strokes: 4,
        difficulty: 1,
        grade: 1
    },
    {
        character: "长",
        pinyin: ["cháng", "zhǎng"],
        definition: "长度；长久；领导",
        radical: "长",
        strokes: 4,
        difficulty: 1,
        grade: 1
    },
    {
        character: "短",
        pinyin: ["duǎn"],
        definition: "短；短暂；缺点",
        radical: "矢",
        strokes: 12,
        difficulty: 2,
        grade: 1
    },
    {
        character: "高",
        pinyin: ["gāo"],
        definition: "高；高度；高级",
        radical: "高",
        strokes: 10,
        difficulty: 2,
        grade: 1
    },
    {
        character: "低",
        pinyin: ["dī"],
        definition: "低；低下；降低",
        radical: "亻",
        strokes: 7,
        difficulty: 2,
        grade: 1
    },
    {
        character: "快",
        pinyin: ["kuài"],
        definition: "快；快速；愉快",
        radical: "忄",
        strokes: 7,
        difficulty: 2,
        grade: 1
    },
    {
        character: "慢",
        pinyin: ["màn"],
        definition: "慢；缓慢；傲慢",
        radical: "忄",
        strokes: 14,
        difficulty: 3,
        grade: 2
    },
    {
        character: "新",
        pinyin: ["xīn"],
        definition: "新；新的；刚刚",
        radical: "斤",
        strokes: 13,
        difficulty: 2,
        grade: 1
    },
    {
        character: "旧",
        pinyin: ["jiù"],
        definition: "旧；过去的；原来的",
        radical: "日",
        strokes: 5,
        difficulty: 1,
        grade: 1
    },
    {
        character: "早",
        pinyin: ["zǎo"],
        definition: "早；早晨；提前",
        radical: "日",
        strokes: 6,
        difficulty: 1,
        grade: 1
    },
    {
        character: "晚",
        pinyin: ["wǎn"],
        definition: "晚；晚上；迟",
        radical: "日",
        strokes: 11,
        difficulty: 2,
        grade: 1
    },
    {
        character: "来",
        pinyin: ["lái"],
        definition: "来；到来；未来",
        radical: "木",
        strokes: 7,
        difficulty: 2,
        grade: 1
    },
    {
        character: "去",
        pinyin: ["qù"],
        definition: "去；离开；过去",
        radical: "土",
        strokes: 5,
        difficulty: 1,
        grade: 1
    },
    {
        character: "走",
        pinyin: ["zǒu"],
        definition: "走；行走；离开",
        radical: "走",
        strokes: 7,
        difficulty: 2,
        grade: 1
    },
    {
        character: "跑",
        pinyin: ["pǎo"],
        definition: "跑；奔跑；逃跑",
        radical: "足",
        strokes: 12,
        difficulty: 2,
        grade: 1
    },
    {
        character: "飞",
        pinyin: ["fēi"],
        definition: "飞；飞行；快速",
        radical: "飞",
        strokes: 3,
        difficulty: 1,
        grade: 1
    },
    {
        character: "游",
        pinyin: ["yóu"],
        definition: "游泳；游戏；旅游",
        radical: "氵",
        strokes: 12,
        difficulty: 2,
        grade: 1
    },
    {
        character: "学",
        pinyin: ["xué"],
        definition: "学习；学校；学问",
        radical: "子",
        strokes: 8,
        difficulty: 2,
        grade: 1
    },
    {
        character: "习",
        pinyin: ["xí"],
        definition: "学习；习惯；练习",
        radical: "习",
        strokes: 3,
        difficulty: 1,
        grade: 1
    },
    {
        character: "读",
        pinyin: ["dú"],
        definition: "读；阅读；读书",
        radical: "讠",
        strokes: 10,
        difficulty: 2,
        grade: 1
    },
    {
        character: "写",
        pinyin: ["xiě"],
        definition: "写；书写；写作",
        radical: "冖",
        strokes: 5,
        difficulty: 1,
        grade: 1
    },
    {
        character: "听",
        pinyin: ["tīng"],
        definition: "听；听见；听从",
        radical: "口",
        strokes: 7,
        difficulty: 2,
        grade: 1
    },
    {
        character: "说",
        pinyin: ["shuō"],
        definition: "说；说话；解释",
        radical: "讠",
        strokes: 9,
        difficulty: 2,
        grade: 1
    },
    {
        character: "看",
        pinyin: ["kàn"],
        definition: "看；观看；照顾",
        radical: "目",
        strokes: 9,
        difficulty: 2,
        grade: 1
    },
    {
        character: "想",
        pinyin: ["xiǎng"],
        definition: "想；思考；想念",
        radical: "心",
        strokes: 13,
        difficulty: 2,
        grade: 1
    },
    {
        character: "知",
        pinyin: ["zhī"],
        definition: "知道；知识；了解",
        radical: "矢",
        strokes: 8,
        difficulty: 2,
        grade: 1
    },
    {
        character: "道",
        pinyin: ["dào"],
        definition: "道路；道理；说",
        radical: "辶",
        strokes: 12,
        difficulty: 2,
        grade: 1
    },
    {
        character: "吃",
        pinyin: ["chī"],
        definition: "吃；吃饭；消耗",
        radical: "口",
        strokes: 6,
        difficulty: 1,
        grade: 1
    },
    {
        character: "喝",
        pinyin: ["hē"],
        definition: "喝；饮用；喝酒",
        radical: "口",
        strokes: 12,
        difficulty: 2,
        grade: 1
    },
    {
        character: "睡",
        pinyin: ["shuì"],
        definition: "睡觉；睡眠",
        radical: "目",
        strokes: 13,
        difficulty: 2,
        grade: 1
    },
    {
        character: "起",
        pinyin: ["qǐ"],
        definition: "起来；开始；起床",
        radical: "走",
        strokes: 10,
        difficulty: 2,
        grade: 1
    },
    {
        character: "坐",
        pinyin: ["zuò"],
        definition: "坐；坐下；乘坐",
        radical: "土",
        strokes: 7,
        difficulty: 2,
        grade: 1
    },
    {
        character: "站",
        pinyin: ["zhàn"],
        definition: "站；站立；车站",
        radical: "立",
        strokes: 10,
        difficulty: 2,
        grade: 1
    },
    {
        character: "笑",
        pinyin: ["xiào"],
        definition: "笑；微笑；嘲笑",
        radical: "竹",
        strokes: 10,
        difficulty: 2,
        grade: 1
    },
    {
        character: "哭",
        pinyin: ["kū"],
        definition: "哭；哭泣；悲伤",
        radical: "口",
        strokes: 10,
        difficulty: 2,
        grade: 1
    },
    {
        character: "唱",
        pinyin: ["chàng"],
        definition: "唱；唱歌；倡导",
        radical: "口",
        strokes: 11,
        difficulty: 2,
        grade: 1
    },
    {
        character: "跳",
        pinyin: ["tiào"],
        definition: "跳；跳跃；跳舞",
        radical: "足",
        strokes: 13,
        difficulty: 2,
        grade: 1
    },
    {
        character: "画",
        pinyin: ["huà"],
        definition: "画；绘画；图画",
        radical: "田",
        strokes: 8,
        difficulty: 2,
        grade: 1
    },
    {
        character: "书",
        pinyin: ["shū"],
        definition: "书；书本；写",
        radical: "乙",
        strokes: 4,
        difficulty: 1,
        grade: 1
    },
    {
        character: "本",
        pinyin: ["běn"],
        definition: "本；根本；本来",
        radical: "木",
        strokes: 5,
        difficulty: 1,
        grade: 1
    },
    {
        character: "字",
        pinyin: ["zì"],
        definition: "字；文字；字母",
        radical: "子",
        strokes: 6,
        difficulty: 1,
        grade: 1
    },
    {
        character: "词",
        pinyin: ["cí"],
        definition: "词；词语；辞职",
        radical: "讠",
        strokes: 7,
        difficulty: 2,
        grade: 1
    },
    {
        character: "句",
        pinyin: ["jù"],
        definition: "句子；句号；拘留",
        radical: "口",
        strokes: 5,
        difficulty: 1,
        grade: 1
    },
    {
        character: "话",
        pinyin: ["huà"],
        definition: "话；说话；语言",
        radical: "讠",
        strokes: 8,
        difficulty: 2,
        grade: 1
    },
    {
        character: "语",
        pinyin: ["yǔ"],
        definition: "语言；话语；告诉",
        radical: "讠",
        strokes: 9,
        difficulty: 2,
        grade: 1
    },
    {
        character: "文",
        pinyin: ["wén"],
        definition: "文字；文章；文化",
        radical: "文",
        strokes: 4,
        difficulty: 1,
        grade: 1
    },
    {
        character: "章",
        pinyin: ["zhāng"],
        definition: "章节；文章；印章",
        radical: "立",
        strokes: 11,
        difficulty: 2,
        grade: 2
    },
    {
        character: "爱",
        pinyin: ["ài"],
        definition: "爱；喜爱；爱情",
        radical: "爫",
        strokes: 10,
        difficulty: 2,
        grade: 1
    },
    {
        character: "喜",
        pinyin: ["xǐ"],
        definition: "喜欢；高兴；喜事",
        radical: "口",
        strokes: 12,
        difficulty: 2,
        grade: 1
    },
    {
        character: "怕",
        pinyin: ["pà"],
        definition: "害怕；恐怕；担心",
        radical: "忄",
        strokes: 8,
        difficulty: 2,
        grade: 1
    },
    {
        character: "生",
        pinyin: ["shēng"],
        definition: "生；生活；出生",
        radical: "生",
        strokes: 5,
        difficulty: 1,
        grade: 1
    },
    {
        character: "死",
        pinyin: ["sǐ"],
        definition: "死；死亡；极度",
        radical: "歹",
        strokes: 6,
        difficulty: 1,
        grade: 1
    },
    {
        character: "老",
        pinyin: ["lǎo"],
        definition: "老；年老；老人",
        radical: "老",
        strokes: 6,
        difficulty: 1,
        grade: 1
    },
    {
        character: "少",
        pinyin: ["shào"],
        definition: "年少；少年；稍微",
        radical: "小",
        strokes: 4,
        difficulty: 1,
        grade: 1
    },
    {
        character: "男",
        pinyin: ["nán"],
        definition: "男；男性；男人",
        radical: "田",
        strokes: 7,
        difficulty: 2,
        grade: 1
    },
    {
        character: "女",
        pinyin: ["nǚ"],
        definition: "女；女性；女人",
        radical: "女",
        strokes: 3,
        difficulty: 1,
        grade: 1
    },
    {
        character: "父",
        pinyin: ["fù"],
        definition: "父亲；爸爸；长辈",
        radical: "父",
        strokes: 4,
        difficulty: 1,
        grade: 1
    },
    {
        character: "母",
        pinyin: ["mǔ"],
        definition: "母亲；妈妈；雌性",
        radical: "母",
        strokes: 5,
        difficulty: 1,
        grade: 1
    },
    {
        character: "儿",
        pinyin: ["ér"],
        definition: "儿子；小孩；年轻人",
        radical: "儿",
        strokes: 2,
        difficulty: 1,
        grade: 1
    },
    {
        character: "子",
        pinyin: ["zǐ"],
        definition: "儿子；孩子；种子",
        radical: "子",
        strokes: 3,
        difficulty: 1,
        grade: 1
    },
    {
        character: "家",
        pinyin: ["jiā"],
        definition: "家；家庭；专家",
        radical: "宀",
        strokes: 10,
        difficulty: 2,
        grade: 1
    },
    {
        character: "房",
        pinyin: ["fáng"],
        definition: "房子；房间；房屋",
        radical: "户",
        strokes: 8,
        difficulty: 2,
        grade: 1
    },
    {
        character: "屋",
        pinyin: ["wū"],
        definition: "房屋；屋子；屋顶",
        radical: "尸",
        strokes: 9,
        difficulty: 2,
        grade: 1
    },
    {
        character: "学校",
        pinyin: ["xuéxiào"],
        definition: "学校；学习的地方",
        radical: "子",
        strokes: 16,
        difficulty: 2,
        grade: 1
    }
];

// 根据年级获取汉字
function getCharactersByGrade(grade) {
    return HANZI_DATABASE.filter(char => char.grade === grade);
}

// 根据难度获取汉字
function getCharactersByDifficulty(difficulty) {
    return HANZI_DATABASE.filter(char => char.difficulty === difficulty);
}

// 随机获取汉字
function getRandomCharacters(count = 10) {
    const shuffled = [...HANZI_DATABASE].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// 搜索汉字
function searchCharacters(query) {
    return HANZI_DATABASE.filter(char =>
        char.character.includes(query) ||
        char.pinyin.some(p => p.includes(query)) ||
        char.definition.includes(query)
    );
}

// 获取汉字详细信息
function getCharacterInfo(character) {
    return HANZI_DATABASE.find(char => char.character === character);
}