import { useEffect, useRef } from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { quizSlice } from '../../../store/reducers/quizReducer';
import styles from './QuizTimer.module.scss';

const QuizTimer: React.FC = () => {
    const { timer } = useAppSelector(state => state.quizReducer);
    const dispatch = useAppDispatch();
    const { setTimeLeft } = quizSlice.actions;

    // const getPadTime = (time: number) => time.toString().padStart(2, '0');

    // const minutes = getPadTime(Math.floor(timer.timeLeft / 60));
    // const seconds = getPadTime(timer.timeLeft - Math.floor(timer.timeLeft));

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         timer.isCounting && dispatch(setTimeLeft(timer.timeLeft - 1));
    //         console.log(timer.timeLeft);
    //     }, 1000);
    //     return () => {
    //         clearInterval(interval);
    //     };
    // }, []);

    // return (
    //     <div className={styles.timer}>
    //         <span>{minutes}</span>
    //         <span>:</span>
    //         <span>{seconds}</span>
    //     </div>
    // );

    const progressbar = {
        textColor: '#ED771C',
        pathColor: '#ED771C',
    };

    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(setTimeLeft(timer.timeLeft - 1));
        }, 1000);
        console.log(totalTime)
        return () => clearInterval(interval);
    }, [timer.timeLeft]);

    const totalTime = useRef(timer.timeLeft);
    const percentage = Math.round(timer.timeLeft / totalTime.current * 100);

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
