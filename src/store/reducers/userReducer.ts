import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserState } from '../../types/reduxTypes';

const initialState: UserState = {
    name: 'Роман Карлович',
    rating: 70,
    type: 'teacher',
    photo: {},
    password: 'roman1234',
    passedTests: [
        { name: 'Животные Сибири. Повадки белок', points: 50 },
        { name: 'Животные Сибири. Повадки белок', points: 60 },
        { name: 'Животные Сибири. Повадки белок', points: 100 },
    ],
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateUserAvatar(state, action: PayloadAction<any>){
            state.photo = action.payload;
        },
        updateUserPassword(state, action:PayloadAction<string>){
            state.password = action.payload;
        }
    },
});

export default userSlice.reducer;
