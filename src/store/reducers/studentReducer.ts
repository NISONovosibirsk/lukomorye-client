import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Student } from '../../types/profileTypes';
import { StudentState } from '../../types/reduxTypes';

const initialState: StudentState = {
    studentList: [
        { name: 'Кирилл Иванов', grade: '1А класс', score: 55 },
        { name: 'Юлия Петрова', grade: '3В класс', score: 78 },
    ],
};

export const studentSlice = createSlice({
    name: 'student',
    initialState,
    reducers: {
        addStudent(state, action: PayloadAction<Student>) {
            state.studentList.push(action.payload);
        },
        updateStudentList(state, action: PayloadAction<[Student]>) {
            state.studentList = action.payload;
        },
    },
});

export default studentSlice.reducer;
