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
    const { modal } = useAppSelector(state => state.statusReducer);
    const { studentList, isDirty, isValid } = useAppSelector(
        state => state.studentReducer
    );
    const dispatch = useAppDispatch();
    const { removeStudent, editStudent, setIsDirty, setError, setIsValid } =
        studentSlice.actions;

    const handleEdit = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newState = { ...studentList[index] };
        const { name, value, validationMessage } = e.target;
        e.preventDefault();

        switch (name) {
            case 'name':
                newState.name = value;
                dispatch(
                    setError(validationMessage && `**${validationMessage}`)
                );
                dispatch(setIsValid(e.target.checkValidity() ? true : false));
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
        dispatch(removeStudent(index));
        !isDirty && dispatch(setIsDirty(true));
    };

    return (
        <div className={styles.student}>
            <Input
                required={true}
                value={student.name}
                isDisabled={isDisabled}
                onChange={handleEdit}
                name={'name'}
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
