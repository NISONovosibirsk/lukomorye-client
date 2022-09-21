import { ReactElement, useEffect } from 'react';
import type { NextPageWithLayout } from '../_app';
import { QuizCard, UserLayout, Modal, QuizInfo } from '../../components';
import { QUIZ_LIST } from '../../assets/mock';
import styles from './index.module.scss';
import { useAppDispatch } from '../../hooks/redux';
import { statusSlice } from '../../store/reducers/statusReducer';
import axios from 'axios';

const User: NextPageWithLayout = () => {
    const { updateModal } = statusSlice.actions;
    const dispatch = useAppDispatch();

    useEffect(() => {
        axios.get('quizMock.json').then(response => {
            console.log(response);
        });
    }, []);

    const handleClose = () => {
        dispatch(updateModal(false));
    };

    return (
        <div className={styles.home}>
            <h2>Рекомендуемые викторины</h2>
            <ul>
                {QUIZ_LIST.map((quiz, index) => (
                    <QuizCard key={index} quiz={quiz} />
                ))}
            </ul>
            <Modal onClose={handleClose}>
                <QuizInfo />
            </Modal>
        </div>
    );
};

User.getLayout = function getLayout(page: ReactElement) {
    return <UserLayout>{page}</UserLayout>;
};

export default User;
