import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserState } from '../../types/reduxTypes';

const initialState: UserState = {
    name: 'Роман Карлович',
    rating: 70,
    type: 'teacher',
    photo: {},
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
        }
    },
});

export default userSlice.reducer;
