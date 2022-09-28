import { FormInput, FormSelect, Select, Input } from '../..';
import { RemoveStudentIcon } from '../../../assets';
import { gradeList } from '../../../assets/mock';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { studentSlice } from '../../../store/reducers/studentReducer';
import { Student } from '../../../types/profileTypes';
import styles from './StudentItem.module.scss';

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
        dispatch(removeStudent(index))
    };

    const validations = {
        name: {
            required: 'Заполните это поле',
            minLength: {
                value: 10,
                message: 'Минимальная длина: 10 символов',
            },
        },
        grade: {
            required: 'Заполните это поле',
        },
        score: {
            required: 'Заполните это поле',
            validate: (value: number) => value <= 100 || 'Больше 100 баллов',
        },
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
            {modal && <RemoveStudentIcon className={styles.remove} onClick={handleRemove}/>}
        </div>
    );
};

export default StudentItem;
