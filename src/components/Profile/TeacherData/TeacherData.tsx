import styles from './TeacherData.module.scss';
import { ProfileFormWrapper, StudentItem, Button } from '../../';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { AddIcon } from '../../../assets';
import { userSlice } from '../../../store/reducers/userReducer';

const TeacherData: React.FC = () => {
    const { studentsList } = useAppSelector(state => state.userReducer);
    const { addStudent } = userSlice.actions;
    const dispatch = useAppDispatch();
    ('');

    const handleAdd = () => {
        dispatch(addStudent({ name: '', grade: '', score: 0 }));
    };

    return (
        <ProfileFormWrapper width='1040px' height='370px'>
            <div className={styles.header}>
                <h4>Список участников тестирования</h4>
                <div className={styles.addStudent} onClick={handleAdd}>
                    Добавить участника
                    <AddIcon />
                </div>
            </div>
            <form>
                {/* <div className={styles.studentsForm}>
                    {studentsList.map((student, index) => (
                        <StudentItem student={student} key={index} />
                    ))}
                </div>
                <Button title='Сохранить' width='25%' type='submit' /> */}
            </form>
        </ProfileFormWrapper>
    );
};

export default TeacherData;
