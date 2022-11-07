import { useEffect, useRef } from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { quizSlice } from '../../../store/reducers/quizReducer';
import { getDeclination } from '../../../utils/getDeclination';
import { getPadTime } from '../../../utils/getPadTime';
import styles from './QuizTimer.module.scss';

const QuizTimer: React.FC = () => {
    const { timer } = useAppSelector(state => state.quizReducer);
    const dispatch = useAppDispatch();
    const { setTimeLeft, setIsCounting, setFinished } = quizSlice.actions;

    const progressbar = {
        textColor: '#ED771C',
        pathColor: '#ED771C',
        textSize: '32px',
    };

    const totalTime = useRef(timer.timeLeft);
    const percentage = Math.round((timer.timeLeft / totalTime.current) * 100);
    const minutes = getPadTime(Math.floor(timer.timeLeft / 60));
    const seconds = getPadTime(Math.floor(timer.timeLeft % 60));

    const timerTick = () => {
        timer.timeLeft > 0 && dispatch(setTimeLeft(1));
        if (timer.timeLeft === 0) {
            dispatch(setIsCounting(false));
            dispatch(setFinished(true));
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            timer.isCounting && timerTick();
        }, 1000);
        return () => clearInterval(interval);
    }, [timer.isCounting]);

    return (
        <div className={styles.timer}>
            <CircularProgressbar
                value={percentage}
                text={`${minutes}:${seconds}`}
                styles={buildStyles(progressbar)}
                strokeWidth={4}
            />
        </div>
    );
};

export default QuizTimer;
