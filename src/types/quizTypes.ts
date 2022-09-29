export interface Quiz {
    name: string;
    id: number;
    terms: string;
    theme: string;
    questions: Array<{
        title: string;
        isActive: boolean;
        type: string;
        options?: Array<{ title: string; isCorrect: boolean }>;
        correctAnswer?: string | number;
    }>;
}
