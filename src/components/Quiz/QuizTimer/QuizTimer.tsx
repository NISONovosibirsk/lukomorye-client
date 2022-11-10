import { useEffect, useRef, useCallback, useState } from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { quizSlice } from '../../../store/reducers/quizReducer';
import { getDeclination } from '../../../utils/getDeclination';
import { getPadTime } from '../../../utils/getPadTime';
import styles from './QuizTimer.module.scss';

interface Props {
    seconds: number;
}

const QuizTimer: React.FC<Props> = ({ seconds }) => {
    const dispatch = useAppDispatch();
    const { setFinished } = quizSlice.actions;

    const progressbar = {
        textColor: '#ED771C',
        pathColor: '#ED771C',
        textSize: '32px',
    };

    const [timeLeft, setTimeLeft] = useState(seconds);
    const [isCounting, setIsCounting] = useState(true);

    const totalTime = useRef(timeLeft);
    const percentage = Math.round((timeLeft / totalTime.current) * 100);
    const padMinutes = getPadTime(Math.floor(timeLeft / 60));
    const padSeconds = getPadTime(Math.floor(timeLeft % 60));

    useEffect(() => {
        const interval = setInterval(() => {
            isCounting &&
                setTimeLeft(timeLeft => (timeLeft === 0 ? 0 : timeLeft - 1));
        }, 1000);
        if (timeLeft === 0) {
            setIsCounting(false);
            dispatch(setFinished(true));
        }
        return () => clearInterval(interval);
    }, [isCounting, timeLeft]);

    return (
        <div className={styles.timer}>
            <CircularProgressbar
                value={percentage}
                text={`${padMinutes}:${padSeconds}`}
                styles={buildStyles(progressbar)}
                strokeWidth={4}
            />
        </div>
    );
};

export default QuizTimer;
