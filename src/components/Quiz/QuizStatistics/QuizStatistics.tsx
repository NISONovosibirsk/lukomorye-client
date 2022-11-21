import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { StatisticsItem } from '../../';
import styles from './QuizStatistics.module.scss';
import { RightIcon, UndoneIcon, WrongIcon } from '../../../assets';
import { Button } from '../../';
import { statusSlice } from '../../../store/reducers/statusReducer';

const QuizStatistics: React.FC = () => {
    const { quiz, results } = useAppSelector(state => state.quizReducer);
    const { updateModal } = statusSlice.actions;
    const dispatch = useAppDispatch();

    const handleClose = () => {
        dispatch(updateModal(false));
    };

    return (
        <div className={styles.container}>
            <h4>Результаты викторины</h4>
            <div className={styles.header}>
                <h4>Вопрос викторины</h4>
                <h4>Ваш ответ</h4>
                <h4>Правильный ответ</h4>
            </div>
            <div className={styles.statistics}>
                <ul className={styles.questions}>
                    {quiz.questions.map((question, index) => (
                        <StatisticsItem key={index}>
                            <p>{question.title}</p>
                        </StatisticsItem>
                    ))}
                </ul>
                <ul>
                    {results.answers.map((answer, index) => (
                        <StatisticsItem key={index}>
                            <div className={styles.studentAnswer}>
                                {answer.status === 'right' && <RightIcon />}
                                {answer.status === 'wrong' && <WrongIcon />}
                                {answer.status === 'undone' && <UndoneIcon />}
                                <p>{answer.answer}</p>
                            </div>
                        </StatisticsItem>
                    ))}
                </ul>
                <ul className={styles.correct}>
                    {quiz.questions.map((question, index) => (
                        <StatisticsItem key={index}>
                            <p className={styles.correctAnswer}>
                                {question.correctAnswer}
                            </p>
                        </StatisticsItem>
                    ))}
                </ul>
            </div>
            <Button title={'Изучил'} onClick={handleClose} />
        </div>
    );
};

export default QuizStatistics;
