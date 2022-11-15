import { FormProvider, useForm } from 'react-hook-form';
import { RadioButton, FormInput, Button } from '../../';
import styles from './QuizForm.module.scss';
import {
    CatImage01,
    CatImage02,
    CatImage03,
    CatImage04,
    CatImage05,
} from '../../../assets';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { quizSlice } from '../../../store/reducers/quizReducer';
import { Question } from '../../../types/quizTypes';
import { getRandomObject } from '../../../utils/getRandomObject';
import { useMemo } from 'react';
import { statusSlice } from '../../../store/reducers/statusReducer';

interface Props {
    question: Question;
}

const QuizForm: React.FC<Props> = ({ question }) => {
    const methods = useForm({
        mode: 'onChange',
    });

    const dispatch = useAppDispatch();
    const { updateActive, setAnswer, setFinished, setScore } =
        quizSlice.actions;
    const { updateHeader } = statusSlice.actions;
    const { activeCard, quiz } = useAppSelector(state => state.quizReducer);

    const format = (text: string | number) => {
        return text.toString().toLowerCase().trim();
    };

    const catImages = [
        <CatImage01 />,
        <CatImage02 />,
        <CatImage03 />,
        <CatImage04 />,
        <CatImage05 />,
    ];

    const onSubmit = (data: any) => {
        const newState = {
            answer: data.answer,
            status:
                format(data.answer) === format(question.correctAnswer)
                    ? 'right'
                    : 'wrong',
        };
        dispatch(setAnswer({ index: activeCard, answer: newState }));
        if (newState.status === 'right') {
            dispatch(updateHeader('right'));
            question.score
                ? dispatch(setScore(question.score))
                : dispatch(setScore(quiz.defaultScore));
        }
        // if (newState.status === 'wrong') {
        //     dispatch(updateHeader('wrong'));
        // }
        newState.status === 'wrong' && dispatch(updateHeader('wrong'));
        activeCard + 1 >= quiz.questions.length
            ? dispatch(setFinished(true))
            : dispatch(updateActive(activeCard + 1));
    };

    const validations = {
        required: 'Заполните это поле',
    };

    const memoizedCat = useMemo(() => {
        return getRandomObject(catImages);
    }, [activeCard]);

    return (
        <div className={styles.quiz}>
            <div className={styles.image}>
                {question.image ? <img src={question.image} /> : memoizedCat}
            </div>
            <FormProvider {...methods}>
                <form
                    className={styles.quizForm}
                    onSubmit={methods.handleSubmit(onSubmit)}
                >
                    <h4>{`№${activeCard + 1}`}</h4>
                    <p className={styles.question}>{question.title}</p>
                    {question.type === 'options' && (
                        <div className={styles.radio}>
                            {question.options?.map(
                                (option: any, index: any) => (
                                    <RadioButton
                                        key={index}
                                        title={option}
                                        name={'answer'}
                                        value={option}
                                        validations={validations}
                                        fontSize={'18px'}
                                    />
                                )
                            )}
                        </div>
                    )}
                    {question.type === 'input' && (
                        <div className={styles.input}>
                            <FormInput
                                defaultValue={''}
                                name={'answer'}
                                validations={validations}
                                height={'100%'}
                                fontSize={'18px'}
                            />
                        </div>
                    )}
                    <Button
                        title={'Ответить'}
                        width={'50%'}
                        isDisabled={!methods.formState.isValid}
                    />
                </form>
            </FormProvider>
        </div>
    );
};

export default QuizForm;
