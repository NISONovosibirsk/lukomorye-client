import ReactConfetti from 'react-confetti';
import {
    CatFireworkIcon,
    RightIcon,
    StarIcon,
    WrongIcon,
} from '../../../assets';
import { useAppSelector } from '../../../hooks/redux';
import { getDeclination } from '../../../utils/getDeclination';
import Button from '../../common/Button/Button';
import QuizProgress from '../QuizProgress/QuizProgress';
import styles from './QuizFinal.module.scss';

const QuizFinal: React.FC = () => {
    const { results } = useAppSelector(state => state.quizReducer);
    const text = getDeclination(results.score, ['БАЛЛ', 'БАЛЛА', 'БАЛЛОВ']);

    return (
        <section className={styles.container}>
            <ReactConfetti recycle={false} numberOfPieces={800} />
            <div className={styles.catWrapper}>
                <CatFireworkIcon className={styles.cat} />
                <div className={styles.resultsWrapper}>
                    <p className={styles.congratulate}>ПОЗДРАВЛЯЮ</p>
                    <p className={styles.result}>ТВОЙ РЕЗУЛЬТАТ</p>
                    <div className={styles.score}>
                        <StarIcon />
                        <p>{`${results.score} ${text}`}</p>
                        <StarIcon />
                    </div>
                </div>
            </div>
            <div className={styles.caption}>
                <div>
                    <RightIcon />
                    <p>Правильный ответ</p>
                </div>
                <div>
                    <WrongIcon />
                    <p>Не правильный ответ</p>
                </div>
            </div>
            <QuizProgress />
            <Button title={'Посмотреть неправильные ответы'} width={'25%'} />
        </section>
    );
};

export default QuizFinal;
