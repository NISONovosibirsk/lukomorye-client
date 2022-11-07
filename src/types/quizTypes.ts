export interface Quiz {
    name: string;
    id: string | number;
    terms: string;
    theme: string;
    defaultScore: number,
    questions: Array<Question>;
}

export interface Question {
    title: string;
    type: string;
    options?: Array<string>;
    correctAnswer: string | number;
    image?: string;
    score?: number;
}

export interface Answer {
    answer: string | number;
    status: string;
}