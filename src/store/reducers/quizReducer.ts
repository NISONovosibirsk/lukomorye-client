import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Quiz } from '../../types/quizTypes';
import { QuizState } from '../../types/reduxTypes';

const initialState: QuizState = {
    quizList: [],
    quizTheme: '',
    quiz: {
        name: '',
        terms: '',
        theme: '',
        questions: [],
    },
};

export const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
        updateQuizList(state, action: PayloadAction<[Quiz]>) {
            state.quizList = action.payload;
        },
        updateQuizTheme(state, action: PayloadAction<string>) {
            state.quizTheme = action.payload;
        },
        updateQuiz(state, action: PayloadAction<Quiz>) {
            state.quiz = action.payload;
        },
    },
});

export default quizSlice.reducer;
