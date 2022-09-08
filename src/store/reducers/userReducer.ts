import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Student } from '../../types/profileTypes';
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
    studentsList: [
        { name: 'Кирилл Иванов', class: '1А класс', score: 55 },
        { name: 'Юлия Петрова', class: '3В класс', score: 78 },
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
        addStudent(state, action: PayloadAction<Student>) {
            state.studentsList.push(action.payload);
        },
    },
});

export default userSlice.reducer;
