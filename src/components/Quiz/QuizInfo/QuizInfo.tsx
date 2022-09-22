import { useAppSelector } from '../../../hooks/redux';
import Button from '../../common/Button/Button';
import styles from './QuizInfo.module.scss';

const QuizInfo: React.FC = () => {
    const { quizTheme } = useAppSelector(state => state.quizReducer);

    return (
        <div className={styles.quiz}>
            <h2 className={styles.header}>Инструкция по выполнению заданий</h2>
            <p>{quizTheme}</p>
            <Button title={'Перейти к викторине'} width={'40%'} />
        </div>
    );
};

export default QuizInfo;
