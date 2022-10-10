import React, { useEffect, useState } from 'react';
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
    const { studentList, error } = useAppSelector(
        state => state.studentReducer
    );
    const dispatch = useAppDispatch();
    const { removeStudent, editStudent, setError } = studentSlice.actions;

    const [inputError, setInputError] = useState(false);

    useEffect(() => {
        if (!student.name) {
            dispatch(setError('**Заполните это поле'));
            setInputError(true);
        }
        if (student.name && error) {
            dispatch(setError(''));
            setInputError(false);
        }
    }, [student.name]);

    const handleEdit = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newState = { ...studentList[index] };
        const { name, value } = e.target;

        switch (name) {
            case 'name':
                newState.name = value;
                break;
            case 'grade':
                newState.grade = value;
                break;
            case 'score':
                newState.score = value;
                break;
            default:
                break;
        }

        dispatch(editStudent({ index: index, student: newState }));
    };

    const handleRemove = () => {
        if (inputError) {
            dispatch(setError(''));
            dispatch(removeStudent(index));
        }
        if (!inputError) {
            dispatch(removeStudent(index));
        }
    };

    return (
        <div className={styles.student}>
            <Input
                required={true}
                value={student.name}
                isDisabled={isDisabled}
                onChange={handleEdit}
                name={'name'}
                error={inputError}
            />
            <Select
                value={student.grade}
                options={gradeList}
                isDisabled={isDisabled}
                onChange={handleEdit}
            />
            <Input
                value={student.score}
                isDisabled={true}
                onChange={handleEdit}
                name={'score'}
                isScore={true}
            />
            <RemoveStudentIcon
                className={styles.remove}
                onClick={handleRemove}
            />
        </div>
    );
};

export default StudentItem;
