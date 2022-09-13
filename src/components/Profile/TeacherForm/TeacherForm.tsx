import { AddIcon } from '../../../assets';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { userSlice } from '../../../store/reducers/userReducer';
import { StudentItem, Button } from '../../';
import styles from './TeacherForm.module.scss';
import { FormProvider, useForm } from 'react-hook-form';
import { statusSlice } from '../../../store/reducers/statusReducer';

const TeacherForm: React.FC = () => {
    const { studentsList } = useAppSelector(state => state.userReducer);
    const { updateModal } = statusSlice.actions;
    const { modal, studentsCaption } = useAppSelector(
        state => state.statusReducer
    );
    const { addStudent } = userSlice.actions;
    const dispatch = useAppDispatch();

    const methods = useForm({ mode: 'all' });

    const handleOpen = (e: any) => {
        e.preventDefault();
        dispatch(updateModal(true));
    };

    const handleAdd = (e: any) => {
        e.stopPropagation();
        dispatch(addStudent({ name: '', grade: '', score: 0 }));
    };

    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <div className={`${styles.teacherForm} ${modal && styles.formModal}`}>
            <div className={styles.header} onClick={handleOpen}>
                <h4>Список участников тестирования</h4>
                {studentsCaption && (
                    <span className={styles.caption}>Развернуть</span>
                )}
                <div className={styles.addStudent} onClick={handleAdd}>
                    Добавить участника
                    <AddIcon />
                </div>
            </div>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <div className={styles.studentsForm}>
                        {studentsList.map((student, index) => (
                            <StudentItem student={student} key={index} />
                        ))}
                    </div>
                    <Button
                        title='Сохранить'
                        width='25%'
                        type='submit'
                        isDisabled={!methods.formState.isValid}
                    />
                </form>
            </FormProvider>
        </div>
    );
};

export default TeacherForm;
