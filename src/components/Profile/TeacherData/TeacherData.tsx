import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { statusSlice } from '../../../store/reducers/statusReducer';
import { TeacherDataItem } from '../../';
import styles from './TeacherData.module.scss';

const TeacherData: React.FC = () => {
    const { studentList } = useAppSelector(state => state.studentReducer);
    const dispatch = useAppDispatch();
    const { updateModal } = statusSlice.actions;

    const handleOpen = () => {
        dispatch(updateModal(true));
    };

    return (
        <div className={styles.wrapper}>
            <h4>Список участников тестирования</h4>
            <ul className={styles.studentsForm}>
                {studentList.map((student, index) => (
                    <TeacherDataItem key={index} student={student} />
                ))}
            </ul>
            <span onClick={handleOpen}>Нажмите для редактирования</span>
        </div>
    );
};

export default TeacherData;
