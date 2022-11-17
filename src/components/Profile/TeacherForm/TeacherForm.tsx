import { AddIcon } from '../../../assets';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { StudentItem, Button } from '../../';
import styles from './TeacherForm.module.scss';
import { studentSlice } from '../../../store/reducers/studentReducer';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { v4 as uuidv4 } from 'uuid';
import { statusSlice } from '../../../store/reducers/statusReducer';

const TeacherForm: React.FC = () => {
    const { studentList, error } = useAppSelector(
        state => state.studentReducer
    );
    const { updateModal } = statusSlice.actions;
    const { addStudent } = studentSlice.actions;
    const dispatch = useAppDispatch();

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log('data sending');
        dispatch(updateModal(false));
    };

    const handleAdd = () => {
        !error &&
            dispatch(
                addStudent({ name: '', grade: '1A', score: 0, id: uuidv4() })
            );
    };

    return (
        <div className={styles.teacherForm}>
            <div className={styles.header}>
                <h4>Список участников тестирования</h4>
                <div
                    className={
                        error
                            ? `${styles.addStudent} ${styles.disabled}`
                            : styles.addStudent
                    }
                    onClick={handleAdd}
                >
                    <p>Добавить участника</p>
                    <AddIcon />
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <TransitionGroup className={styles.studentsForm}>
                    {studentList.map((student, index) => (
                        <CSSTransition
                            key={student.id}
                            timeout={200}
                            classNames={{
                                exitActive: styles.exitActive,
                                enterActive: styles.enterActive,
                            }}
                        >
                            <StudentItem student={student} index={index} />
                        </CSSTransition>
                    ))}
                </TransitionGroup>
                <span className={styles.error}>{error}</span>
                <Button
                    title='Сохранить'
                    width='25%'
                    type='submit'
                    isDisabled={error ? true : false}
                />
            </form>
        </div>
    );
};

export default TeacherForm;
