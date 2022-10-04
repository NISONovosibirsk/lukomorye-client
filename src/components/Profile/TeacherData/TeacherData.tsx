import { FormProvider, useForm, useFormContext } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { statusSlice } from '../../../store/reducers/statusReducer';
import StudentItem from '../StudentItem/StudentItem';
import styles from './TeacherData.module.scss';

const TeacherData: React.FC = () => {
    const { studentList } = useAppSelector(state => state.studentReducer);
    const dispatch = useAppDispatch();
    const { updateModal } = statusSlice.actions;
    const methods = useForm({ mode: 'onChange' });

    const handleOpen = () => {
        dispatch(updateModal(true));
    };

    return (
        <div className={styles.wrapper}>
            <h4>Список участников тестирования</h4>
            <FormProvider {...methods}>
                <form className={styles.studentsForm}>
                    {studentList.map((student, index) => (
                        <StudentItem
                            index={index}
                            student={student}
                            key={index}
                            isDisabled={true}
                        />
                    ))}
                </form>
            </FormProvider>
            <span onClick={handleOpen}>Нажмите для редактирования</span>
        </div>
    );
};

export default TeacherData;
