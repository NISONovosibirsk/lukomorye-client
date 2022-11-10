import { Student } from './profileTypes';
import { Answer, Quiz } from './quizTypes';

export interface UserState {
    name: string;
    rating: number;
    post: string;
    grade: string;
    email: string;
    school: string;
    type: string;
    photo: any;
    password: string;
    passedTests: Array<{ name: string; points: number }>;
}

export interface StudentState {
    studentList: Array<Student>;
    isDirty: boolean;
    isValid: boolean;
    error: string;
}

export interface UserAccount {
    email: string;
    password: string;
    confirmPassword: string;
}

export interface StatusState {
    dropDown: boolean;
    modal: boolean;
    menu: boolean;
}

export interface QuizState {
    quiz: Quiz;
    activeCard: number;
    results: {
        answers: Array<Answer>;
        score: number;
    };
    isFinished: boolean;
}
