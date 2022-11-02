import { useEffect, useRef } from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { quizSlice } from '../../../store/reducers/quizReducer';
import { getPadTime } from '../../../utils/getPadTime';
import styles from './QuizTimer.module.scss';

const QuizTimer: React.FC = () => {
    const { timer } = useAppSelector(state => state.quizReducer);
    const dispatch = useAppDispatch();
    const { setTimeLeft, setIsCounting } = quizSlice.actions;

    const progressbar = {
        textColor: '#ED771C',
        pathColor: '#ED771C',
        textSize: '18px',
    };

    const totalTime = useRef(timer.timeLeft);
    const percentage = Math.round((timer.timeLeft / totalTime.current) * 100);
    const minutes = getPadTime(Math.floor(timer.timeLeft / 60));

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
                text={`${minutes} минут`}
                styles={buildStyles(progressbar)}
                strokeWidth={5}
            />
        </div>
    );
};

export default QuizTimer;
