export interface UserState {
    name: string;
    rating: number;
    passedTests: Array<{ name: string; points: number }>;
}