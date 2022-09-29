import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { quizSlice } from '../../../store/reducers/quizReducer';
import Button from '../../common/Button/Button';
import styles from './QuizInfo.module.scss';

const QuizInfo: React.FC = () => {
    const { quizTheme } = useAppSelector(state => state.quizReducer);
    const { updateQuiz } = quizSlice.actions;
    const dispatch = useAppDispatch();

    const handleStart = () => {
        // dispatch(updateQuiz())
    };

    return (
        <div className={styles.quiz}>
            <h2 className={styles.header}>Инструкция по выполнению заданий</h2>
            <p>{quizTheme}</p>
            {/* <Button
                title={'Перейти к викторине'}
                width={'40%'}
                onClick={handleStart}
            /> */}
                <Link href={`/quiz`}>
                    <a>Перейти к викторине</a>
                </Link>
        </div>
    );
};

export default QuizInfo;
