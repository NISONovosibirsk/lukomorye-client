export interface UserState {
    name: string;
    rating: number;
    type: string;
    photo: any;
    password: string;
    passedTests: Array<{ name: string; points: number }>;
}

export interface StatusState {
    dropDown: boolean;
}
