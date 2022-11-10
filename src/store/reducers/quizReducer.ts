import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Answer, Question, Quiz } from '../../types/quizTypes';
import { QuizState } from '../../types/reduxTypes';

const initialState: QuizState = {
    quiz: {
        name: '',
        id: '',
        terms: '',
        theme: '',
        defaultScore: 0,
        questions: [],
    },
    results: {
        answers: [],
        score: 0,
    },
    isFinished: false,
    activeCard: 0,
};

export const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
        updateQuiz(state, action: PayloadAction<Quiz>) {
            state.quiz = action.payload;
        },
        updateActive(state, action: PayloadAction<number>) {
            state.activeCard = action.payload;
        },
        setResults(state, action: PayloadAction<Array<Question>>) {
            action.payload.map((item: Question) =>
                state.results.answers.push({ answer: '', status: 'undone' })
            );
        },
        setAnswer(
            state,
            action: PayloadAction<{ index: number; answer: Answer }>
        ) {
            const { index, answer } = action.payload;
            state.results.answers[index] = answer;
        },
        setFinished(state, action: PayloadAction<boolean>) {
            state.isFinished = action.payload;
        },
        setScore(state, action: PayloadAction<number>) {
            state.results.score = state.results.score + action.payload;
        },
    },
});

export default quizSlice.reducer;
