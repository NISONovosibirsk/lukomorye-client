import { AddIcon } from '../../../assets';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { StudentItem, Button } from '../../';
import styles from './TeacherForm.module.scss';
import { studentSlice } from '../../../store/reducers/studentReducer';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { v4 as uuidv4 } from 'uuid';

const TeacherForm: React.FC = () => {
    const { studentList, error } = useAppSelector(
        state => state.studentReducer
    );
    const { addStudent } = studentSlice.actions;
    const dispatch = useAppDispatch();

    const handleAdd = () => {
        !error && dispatch(addStudent({ name: '', grade: '1A', score: 0, id: uuidv4() }));
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
                    Добавить участника
                    <AddIcon />
                </div>
            </div>
            <form>
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
