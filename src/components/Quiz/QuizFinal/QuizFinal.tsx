import {
    CatFireworkIcon,
    RightIcon,
    StarIcon,
    WrongIcon,
} from '../../../assets';
import Button from '../../common/Button/Button';
import QuizProgress from '../QuizProgress/QuizProgress';
import styles from './QuizFinal.module.scss';

const QuizFinal: React.FC = () => {
    return (
        <section className={styles.container}>
            <div className={styles.catWrapper}>
                <CatFireworkIcon />
                <div className={styles.resultsWrapper}>
                    <p className={styles.congratulate}>ПОЗДРАВЛЯЮ</p>
                    <p className={styles.result}>ТВОЙ РЕЗУЛЬТАТ</p>
                    <div className={styles.score}>
                        <StarIcon />
                        <p>75 БАЛЛОВ</p>
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
            <Button title={'Посмотреть неправильные ответы'} width={'25%'}/>
        </section>
    );
};

export default QuizFinal;
