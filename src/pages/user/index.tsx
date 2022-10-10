import { ReactElement, useEffect } from 'react';
import type { NextPageWithLayout } from '../_app';
import { QuizCard, UserLayout, Modal, QuizInfo } from '../../components';
import styles from './index.module.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { statusSlice } from '../../store/reducers/statusReducer';
import axios from 'axios';
import { quizSlice } from '../../store/reducers/quizReducer';
import { studentSlice } from '../../store/reducers/studentReducer';

const User: NextPageWithLayout = () => {
    const { updateModal } = statusSlice.actions;
    const { updateQuizList } = quizSlice.actions;
    const { quizList } = useAppSelector(state => state.quizReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const getData = async () => {
            try {
                await axios.get('quizMock.json').then(response => {
                    dispatch(updateQuizList(response.data.quizes));
                });
            } catch (error) {
                console.log(error);
            }
        };
        getData();
    }, []);

    const handleClose = () => {
        dispatch(updateModal(false));
    };

    return (
        <div className={styles.home}>
            <h2 className={styles.header}>Рекомендуемые викторины</h2>
            <ul>
                {quizList.map((quiz, index) => (
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
