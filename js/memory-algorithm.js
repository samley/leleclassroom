// 艾宾浩斯记忆曲线算法
class EbbinghausMemorySystem {
    constructor() {
        this.intervals = [1, 3, 7, 15, 30, 60]; // 复习间隔（天）
        this.difficultyMultipliers = {
            'easy': 0.8,    // 简单的字复习间隔缩短
            'medium': 1.0,  // 正常间隔
            'hard': 1.3     // 困难的字复习间隔延长
        };
    }

    // 计算下次复习时间
    calculateNextReview(character, difficulty, currentStage = 0) {
        const baseInterval = this.intervals[currentStage] || this.intervals[this.intervals.length - 1];
        const multiplier = this.difficultyMultipliers[difficulty] || 1.0;
        const adjustedInterval = Math.round(baseInterval * multiplier);

        const nextReviewDate = new Date();
        nextReviewDate.setDate(nextReviewDate.getDate() + adjustedInterval);

        return {
            nextReviewDate: nextReviewDate,
            stage: Math.min(currentStage + 1, this.intervals.length - 1),
            interval: adjustedInterval
        };
    }

    // 获取今日需要复习的汉字
    getTodayReviewCharacters() {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const reviewData = this.getReviewData();
        const todayReviews = [];

        for (const [character, data] of Object.entries(reviewData)) {
            const reviewDate = new Date(data.nextReviewDate);
            reviewDate.setHours(0, 0, 0, 0);

            if (reviewDate <= today) {
                todayReviews.push({
                    character: character,
                    ...data
                });
            }
        }

        return todayReviews.sort((a, b) => new Date(a.nextReviewDate) - new Date(b.nextReviewDate));
    }

    // 标记汉字学习完成
    markCharacterLearned(character, difficulty) {
        const reviewData = this.getReviewData();
        const nextReview = this.calculateNextReview(character, difficulty, 0);

        reviewData[character] = {
            firstLearnDate: new Date().toISOString(),
            lastReviewDate: new Date().toISOString(),
            nextReviewDate: nextReview.nextReviewDate.toISOString(),
            stage: nextReview.stage,
            difficulty: difficulty,
            reviewCount: 1,
            correctCount: 1,
            accuracy: 100
        };

        this.saveReviewData(reviewData);
        return nextReview;
    }

    // 标记复习完成
    markReviewCompleted(character, isCorrect, difficulty) {
        const reviewData = this.getReviewData();
        const charData = reviewData[character];

        if (!charData) {
            return this.markCharacterLearned(character, difficulty);
        }

        // 更新统计数据
        charData.lastReviewDate = new Date().toISOString();
        charData.reviewCount = (charData.reviewCount || 0) + 1;
        charData.correctCount = (charData.correctCount || 0) + (isCorrect ? 1 : 0);
        charData.accuracy = Math.round((charData.correctCount / charData.reviewCount) * 100);

        // 根据答题正确性调整难度
        let adjustedDifficulty = difficulty;
        if (!isCorrect) {
            // 答错了，重置到第一阶段，增加难度
            adjustedDifficulty = 'hard';
            charData.stage = 0;
        } else if (charData.accuracy >= 90 && charData.reviewCount >= 3) {
            // 准确率高，可以降低难度
            adjustedDifficulty = 'easy';
        }

        // 计算下次复习时间
        const nextReview = this.calculateNextReview(character, adjustedDifficulty, charData.stage);
        charData.nextReviewDate = nextReview.nextReviewDate.toISOString();
        charData.stage = nextReview.stage;
        charData.difficulty = adjustedDifficulty;

        this.saveReviewData(reviewData);
        return nextReview;
    }

    // 获取学习统计
    getStudyStatistics() {
        const reviewData = this.getReviewData();
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        let totalLearned = 0;
        let todayLearned = 0;
        let todayReviews = 0;
        let totalAccuracy = 0;
        let accuracyCount = 0;

        for (const [character, data] of Object.entries(reviewData)) {
            totalLearned++;

            // 今日学习的汉字
            const learnDate = new Date(data.firstLearnDate);
            learnDate.setHours(0, 0, 0, 0);
            if (learnDate.getTime() === today.getTime()) {
                todayLearned++;
            }

            // 今日需要复习的汉字
            const reviewDate = new Date(data.nextReviewDate);
            reviewDate.setHours(0, 0, 0, 0);
            if (reviewDate <= today) {
                todayReviews++;
            }

            // 计算平均准确率
            if (data.accuracy !== undefined) {
                totalAccuracy += data.accuracy;
                accuracyCount++;
            }
        }

        return {
            totalLearned: totalLearned,
            todayLearned: todayLearned,
            todayReviews: todayReviews,
            averageAccuracy: accuracyCount > 0 ? Math.round(totalAccuracy / accuracyCount) : 0,
            totalTarget: HANZI_STATS ? HANZI_STATS.total : 2960
        };
    }

    // 获取学习进度
    getStudyProgress() {
        const stats = this.getStudyStatistics();
        return {
            percentage: Math.round((stats.totalLearned / stats.totalTarget) * 100),
            learned: stats.totalLearned,
            remaining: stats.totalTarget - stats.totalLearned
        };
    }

    // 获取需要学习的新汉字
    getNewCharactersToLearn(count = 10) {
        const reviewData = this.getReviewData();
        const learnedCharacters = new Set(Object.keys(reviewData));

        const newCharacters = HANZI_DATABASE.filter(char =>
            !learnedCharacters.has(char.character)
        );

        // 按难度和年级排序，优先学习简单的
        newCharacters.sort((a, b) => {
            if (a.grade !== b.grade) return a.grade - b.grade;
            if (a.difficulty !== b.difficulty) return a.difficulty - b.difficulty;
            return a.strokes - b.strokes;
        });

        return newCharacters.slice(0, count);
    }

    // 获取复习数据
    getReviewData() {
        const data = localStorage.getItem('hanzi_review_data');
        return data ? JSON.parse(data) : {};
    }

    // 保存复习数据
    saveReviewData(data) {
        localStorage.setItem('hanzi_review_data', JSON.stringify(data));
    }

    // 重置学习数据
    resetAllData() {
        localStorage.removeItem('hanzi_review_data');
    }

    // 导出学习数据
    exportData() {
        const reviewData = this.getReviewData();
        const stats = this.getStudyStatistics();

        return {
            exportDate: new Date().toISOString(),
            statistics: stats,
            reviewData: reviewData
        };
    }

    // 导入学习数据
    importData(data) {
        if (data.reviewData) {
            this.saveReviewData(data.reviewData);
            return true;
        }
        return false;
    }
}

// 创建全局实例
const memorySystem = new EbbinghausMemorySystem();