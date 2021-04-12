export interface TestScoreData {
    _id: string;
    userId: string;
    total: number;
    obtained: number;
    topicScore: TopicWiseScoreData[];
}

export interface TopicWiseScoreData {
    name: string;
    obtained: number;
    total: number;
    percentage: number;
}
