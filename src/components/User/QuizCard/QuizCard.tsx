import Link from 'next/link';
import { ColorsIcon } from '../../../assets';
import { useAppDispatch } from '../../../hooks/redux';
import { quizSlice } from '../../../store/reducers/quizReducer';
import { statusSlice } from '../../../store/reducers/statusReducer';
import Button from '../../common/Button/Button';
import styles from './QuizCard.module.scss';

interface Props {
    quiz: { name: string; theme: string, id: number };
}

const QuizCard: React.FC<Props> = ({ quiz }) => {
    const dispatch = useAppDispatch();
    const { updateModal } = statusSlice.actions;
    const { updateQuizTheme } = quizSlice.actions;

    const colors: Array<string> = [
        '#43B05C',
        '#0D85C9',
        '#ED771C',
        '#E2B803',
        '#5943B0',
        '#D92020',
        '#25316D',
        '#E94560',
        '#874C62',
        '#B9005B',
        '#A66CFF',
    ];

    const handleColors: () => string = () => {
        let randomValue = Math.floor(Math.random() * colors.length);
        return colors[randomValue];
    };

    const handleStart = () => {
        dispatch(updateQuizTheme(quiz.theme));
        dispatch(updateModal(true));
    };

    return (
        <li className={styles.card}>
            <div className={styles.header}>
                <p style={{ color: `${handleColors()}` }}>{quiz.name}</p>
                <ColorsIcon />
            </div>
            <p className={styles.theme}>{quiz.theme}</p>
            <Button title='Старт' width={'250px'} onClick={handleStart} />
            {/* <Link href={`/quiz/${quiz.id}`}>
                <a>Start</a>
            </Link> */}
        </li>
    );
};

export default QuizCard;
