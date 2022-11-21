import { ReactElement, useEffect } from 'react';
import {
    QuizLayout,
    QuizForm,
    QuizProgress,
    QuizFinal,
    QuizTimer,
} from '../../../components';
import styles from './draft.module.scss';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { quizSlice } from '../../../store/reducers/quizReducer';
import axios from 'axios';

const Draft = () => {
    const dispatch = useAppDispatch();
    const { updateQuiz, setResults } = quizSlice.actions;
    const { activeCard, quiz, isFinished } = useAppSelector(
        state => state.quizReducer
    );

    useEffect(() => {
        const getQuiz = async () => {
            try {
                await axios.get('../quizMock.json').then(response => {
                    dispatch(updateQuiz(response.data.quizes[0]));
                    dispatch(setResults(response.data.quizes[0].questions));
                });
            } catch (error) {
                console.log(error);
            }
        };
        getQuiz();
    }, []);

    return isFinished ? (
        <QuizFinal />
    ) : (
        <section className={styles.container}>
            <div className={styles.header}>
                <div className={styles.info}>
                    <h3 className={styles.name}>{quiz.name}</h3>
                    <p className={styles.theme}>{quiz.theme}</p>
                    <h4>{quiz.terms}</h4>
                </div>
                <QuizTimer seconds={2400} />
            </div>
            {quiz.questions.map(
                (question, index) =>
                    index === activeCard && (
                        <QuizForm key={index} question={question} />
                    )
            )}
            <QuizProgress />
        </section>
    );
};

Draft.getLayout = function getLayout(page: ReactElement) {
    return <QuizLayout>{page}</QuizLayout>;
};

export default Draft;
