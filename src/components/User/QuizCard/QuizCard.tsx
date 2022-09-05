import { ColorsIcon } from '../../../assets';
import Button from '../../common/Button/Button';
import styles from './QuizCard.module.scss';

interface Props {
    quiz: { name: string; description: string };
}

const QuizCard: React.FC<Props> = ({ quiz }) => {
    return (
        <li className={styles.card}>
            <div className={styles.header}>
                <p>{quiz.name}</p>
                <ColorsIcon />
            </div>
            <p>{quiz.description}</p>
            <Button title='Старт' width={'250px'}/>
        </li>
    );
};

export default QuizCard;
