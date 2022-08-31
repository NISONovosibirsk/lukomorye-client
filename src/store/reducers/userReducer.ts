import { createSlice } from '@reduxjs/toolkit';

interface UserState {
    name: string;
    rating: number;
    passedTests: Array<{ name: string; points: number }>;
}

const initialState: UserState = {
    name: 'Роман Карлович',
    rating: 70,
    passedTests: [
        { name: 'Животные Сибири. Повадки белок', points: 50 },
        { name: 'Животные Сибири. Повадки белок', points: 60 },
        { name: 'Животные Сибири. Повадки белок', points: 100 },
    ],
};

export const userReducer = createSlice({
    name: 'user',
    initialState,
    reducers: {},
});

export default userReducer.reducer;
