import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userReducer';
import statusReducer from './reducers/statusReducer';
import quizReducer from './reducers/quizReducer';
import studentReducer from './reducers/studentReducer';

const rootReducer = combineReducers({
    userReducer,
    statusReducer,
    quizReducer,
    studentReducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
