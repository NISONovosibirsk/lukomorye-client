import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Student } from '../../types/profileTypes';
import { UserAccount, UserState } from '../../types/reduxTypes';

const initialState: UserState = {
    name: 'Роман Карлович',
    post: 'Учитель',
    grade: '1Б',
    email: 'roman@yandex.ru',
    rating: 70,
    school: 'Гимназия № 1',
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
        updateUserAvatar(state, action: PayloadAction<any>) {
            state.photo = action.payload;
        },
        updateUserPassword(state, action: PayloadAction<string>) {
            state.password = action.payload;
        },
        updateProfile(state, action: PayloadAction<UserState>) {
            state.name = action.payload.name;
            state.post = action.payload.post;
            state.school = action.payload.school;
            state.grade = action.payload.grade;
        },
        updateAccountData(state, action: PayloadAction<UserAccount>) {
            state.email = action.payload.email;
            state.password = action.payload.confirmPassword;
        },
    },
});

export default userSlice.reducer;
