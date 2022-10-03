import React from 'react';
import { Select, Input } from '../..';
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
    const { studentList } = useAppSelector(state => state.studentReducer);
    const dispatch = useAppDispatch();
    const { removeStudent } = studentSlice.actions;

    const handleEdit = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newState = studentList[index];
        const { name } = e.target;

        switch (name) {
            case 'name':
                newState.name = e.target.value;
            case 'grade':
                newState.grade = e.target.value;
            case 'score':
                newState.score = e.target.value;
            default:
                break;
        }
    };

    const handleRemove = () => {
        dispatch(removeStudent(index));
    };

    return (
        <div className={styles.student}>
            <Input
                value={student.name}
                isDisabled={isDisabled}
                onChange={handleEdit}
                name={'name'}
            />
            <Select
                value={student.grade}
                options={gradeList}
                isDisabled={isDisabled}
            />
            <Input
                value={student.score}
                isDisabled={isDisabled}
                onChange={handleEdit}
                name={'score'}
            />
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
