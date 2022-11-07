import ReactConfetti from 'react-confetti';
import {
    CatFireworkIcon,
    RightIcon,
    StarIcon,
    WrongIcon,
} from '../../../assets';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { statusSlice } from '../../../store/reducers/statusReducer';
import { getDeclination } from '../../../utils/getDeclination';
import { Button, Modal, QuizProgress, QuizStatistics } from '../../';
import styles from './QuizFinal.module.scss';

const QuizFinal: React.FC = () => {
    const { results } = useAppSelector(state => state.quizReducer);
    const { modal } = useAppSelector(state => state.statusReducer);
    const { updateModal } = statusSlice.actions;
    const dispatch = useAppDispatch();
    const text = getDeclination(results.score, ['БАЛЛ', 'БАЛЛА', 'БАЛЛОВ']);

    const handleClose = () => {
        dispatch(updateModal(false));
    };

    const handleModal = () => {
        dispatch(updateModal(true));
    };

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
            <Button
                title={'Посмотреть неправильные ответы'}
                width={'25%'}
                onClick={handleModal}
            />
            <Modal onClose={handleClose}>
                <QuizStatistics />
            </Modal>
        </section>
    );
};

export default QuizFinal;
