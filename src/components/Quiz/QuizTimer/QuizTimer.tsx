import { useEffect, useRef } from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { quizSlice } from '../../../store/reducers/quizReducer';
import styles from './QuizTimer.module.scss';

const QuizTimer: React.FC = () => {
    const { timer } = useAppSelector(state => state.quizReducer);
    const dispatch = useAppDispatch();
    const { setTimeLeft, setIsCounting } = quizSlice.actions;

    const progressbar = {
        textColor: '#ED771C',
        pathColor: '#ED771C',
    };

    const totalTime = useRef(timer.timeLeft);
    const percentage = Math.round((timer.timeLeft / totalTime.current) * 100);

    const timerTick = () => {
        timer.timeLeft > 0 && dispatch(setTimeLeft(1));
        timer.timeLeft === 0 && dispatch(setIsCounting(false));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            timer.isCounting && timerTick();
        }, 1000);
        return () => clearInterval(interval);
    }, [timer.timeLeft, timer.isCounting]);

    return (
        <div className={styles.timer}>
            <CircularProgressbar
                value={percentage}
                text={'40 минут'}
                styles={buildStyles(progressbar)}
            />
        </div>
    );
};

export default QuizTimer;
