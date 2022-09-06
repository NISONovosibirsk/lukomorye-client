export interface UserState {
    name: string;
    rating: number;
    type: string;
    photo: any;
    passedTests: Array<{ name: string; points: number }>;
}

export interface StatusState {
    dropDown: boolean;
}
