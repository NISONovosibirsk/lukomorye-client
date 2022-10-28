import { FormProvider, useForm } from 'react-hook-form';
import { RadioButton, FormInput, Button } from '../../';
import styles from './QuizForm.module.scss';
import { FlatLogo } from '../../../assets';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { quizSlice } from '../../../store/reducers/quizReducer';
import { Question } from '../../../types/quizTypes';

interface Props {
    question: Question;
}

const QuizForm: React.FC<Props> = ({ question }) => {
    const methods = useForm({
        mode: 'onChange',
    });

    const dispatch = useAppDispatch();
    const { updateActive, setAnswer, setFinished } = quizSlice.actions;
    const { activeCard, quiz } = useAppSelector(state => state.quizReducer);

    const onSubmit = (data: any) => {
        const newState = {
            answer: data.answer,
            status: data.answer === question.correctAnswer ? 'right' : 'wrong',
        };
        dispatch(setAnswer({ index: activeCard, answer: newState }));
        activeCard + 1 >= quiz.questions.length
            ? dispatch(setFinished(true))
            : dispatch(updateActive(activeCard + 1));
    };

    const validations = {
        required: 'Заполните это поле',
    };

    return (
        <div className={styles.quiz}>
            <div className={styles.image}>
                {question.image ? <img src={question.image} /> : <FlatLogo />}
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