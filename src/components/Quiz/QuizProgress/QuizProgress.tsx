import { RightIcon, UndoneIcon, WrongIcon } from '../../../assets';
import { useAppSelector } from '../../../hooks/redux';
import styles from './QuizProgress.module.scss';

const QuizProgress: React.FC = () => {
    const { results } = useAppSelector(state => state.quizReducer);

    return (
        <div className={styles.progress}>
            {results.answers.map((mark, index) => (
                <div key={index} className={styles.mark}>
                    <p>{index + 1}</p>
                    {mark.status === 'undone' && <UndoneIcon />}
                    {mark.status === 'right' && <RightIcon />}
                    {mark.status === 'wrong' && <WrongIcon />}
                </div>
            ))}
        </div>
    );
};

export default QuizProgress;
