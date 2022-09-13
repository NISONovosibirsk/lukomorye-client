import { Student } from './profileTypes';

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
    studentsList: Array<Student>;
}

export interface UserAccount {
    email: string;
    password: string;
    confirmPassword: string;
}

export interface StatusState {
    dropDown: boolean;
}
