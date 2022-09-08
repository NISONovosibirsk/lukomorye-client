import styles from './TeacherData.module.scss';
import { ProfileFormWrapper, Input, Select, StudentItem } from '../../';
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
        <ProfileFormWrapper width='1025px' height='370px' btnWidth='25%'>
            <div className={styles.header}>
                <h3>Список участников тестирования</h3>
                <div className={styles.addStudent} onClick={handleAdd}>
                    Добавить участника
                    <AddIcon />
                </div>
            </div>
            <form className={styles.studentsForm}>
                {studentsList.map((student, index) => (
                    <StudentItem student={student} key={index} />
                ))}
            </form>
        </ProfileFormWrapper>
    );
};

export default TeacherData;
