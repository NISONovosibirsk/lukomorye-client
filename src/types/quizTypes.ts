export interface Quiz {
    name: string;
    id: string | number;
    terms: string;
    theme: string;
    questions: Array<Question>;
}

export interface Question {
    title: string;
    type: string;
    options?: Array<string>;
    correctAnswer: string | number;
    image?: string;
}

export interface Answer {
    answer: string | number;
    status: string;
}