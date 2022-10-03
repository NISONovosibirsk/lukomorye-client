import { AddIcon } from '../../../assets';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { StudentItem, Button } from '../../';
import styles from './TeacherForm.module.scss';
import { studentSlice } from '../../../store/reducers/studentReducer';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const TeacherForm: React.FC = () => {
    const { studentList } = useAppSelector(state => state.studentReducer);
    const { addStudent } = studentSlice.actions;
    const dispatch = useAppDispatch();

    const handleAdd = () => {
        dispatch(addStudent({ name: '', grade: '', score: 0 }));
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
            <form>
                <TransitionGroup className={styles.studentsForm}>
                    {studentList.map((student, index) => (
                        <CSSTransition
                            key={index}
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
                <Button title='Сохранить' width='25%' type='submit' />
            </form>
        </div>
    );
};

export default TeacherForm;
