import { Select, Input } from '../..';
import { RemoveStudentIcon } from '../../../assets';
import { gradeList } from '../../../assets/mock';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { studentSlice } from '../../../store/reducers/studentReducer';
import { Student } from '../../../types/profileTypes';
import styles from './StudentItem.module.scss';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

interface Props {
    student: Student;
    isDisabled?: boolean;
    index: number;
}

const StudentItem: React.FC<Props> = ({ student, isDisabled, index }) => {
    const { modal } = useAppSelector(state => state.statusReducer);
    const dispatch = useAppDispatch();
    const { removeStudent } = studentSlice.actions;

    const handleEdit = () => {};

    const handleRemove = () => {
        dispatch(removeStudent(index));
    };

    return (
            <div className={styles.student}>
                <Input value={student.name} isDisabled={isDisabled} />
                <Select
                    value={student.grade}
                    options={gradeList}
                    isDisabled={isDisabled}
                />
                <Input value={student.score} isDisabled={isDisabled} />
                {modal && (
                    <RemoveStudentIcon
                        className={styles.remove}
                        onClick={handleRemove}
                    />
                )}
            </div>
    );
};

export default StudentItem;
