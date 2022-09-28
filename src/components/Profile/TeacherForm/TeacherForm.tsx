import { AddIcon } from '../../../assets';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { StudentItem, Button } from '../../';
import styles from './TeacherForm.module.scss';
import { FormProvider, useForm } from 'react-hook-form';
import { studentSlice } from '../../../store/reducers/studentReducer';

const TeacherForm: React.FC = () => {
    const { studentList } = useAppSelector(state => state.studentReducer);
    const { addStudent } = studentSlice.actions;
    const dispatch = useAppDispatch();

    const methods = useForm({ mode: 'all' });

    const handleAdd = () => {
        dispatch(addStudent({ name: '', grade: '', score: 0 }));
    };

    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <div className={styles.teacherForm}>
            <div className={styles.header}>
                <h4>Список участников тестирования</h4>
                <div className={styles.addStudent} onClick={handleAdd}>
                    Добавить участника
                    <AddIcon />
                </div>
            </div>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <div className={styles.studentsForm}>
                        {studentList.map((student, index) => (
                            <StudentItem student={student} key={index} index={index}/>
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
