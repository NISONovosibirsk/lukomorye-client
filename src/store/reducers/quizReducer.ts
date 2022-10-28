import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Answer, Question, Quiz } from '../../types/quizTypes';
import { QuizState } from '../../types/reduxTypes';

const initialState: QuizState = {
    quiz: {
        name: '',
        id: '',
        terms: '',
        theme: '',
        questions: [],
    },
    results: {
        answers: [],
    },
    isFinished: false,
    activeCard: 0,
    timer: {
        timeLeft: 30,
        isCounting: true,
    },
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
        setTimeLeft(state, action: PayloadAction<number>) {
            state.timer.timeLeft = action.payload;
        },
        setIsCounting(state, action: PayloadAction<boolean>) {
            state.timer.isCounting = action.payload;
        }
    },
});

export default quizSlice.reducer;
