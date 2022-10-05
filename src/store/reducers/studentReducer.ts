import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Student } from '../../types/profileTypes';
import { StudentState } from '../../types/reduxTypes';

const initialState: StudentState = {
    studentList: [],
    isDirty: false,
    isValid: false,
    error: '',
};

export const studentSlice = createSlice({
    name: 'student',
    initialState,
    reducers: {
        addStudent(state, action: PayloadAction<Student>) {
            state.studentList.push(action.payload);
        },
        editStudent(
            state,
            action: PayloadAction<{ index: number; student: Student }>
        ) {
            const { index, student } = action.payload;
            state.studentList[index] = student;
        },
        removeStudent(state, action: PayloadAction<number>) {
            state.studentList.splice(action.payload, 1);
        },
        updateStudentList(state, action: PayloadAction<[Student]>) {
            state.studentList = action.payload;
        },
        setIsDirty(state, action: PayloadAction<boolean>) {
            state.isDirty = action.payload;
        },
        setError(state, action: PayloadAction<string>) {
            state.error = action.payload;
        },
        setIsValid(state, action: PayloadAction<boolean>) {
            state.isValid = action.payload;
        },
    },
});

export default studentSlice.reducer;
