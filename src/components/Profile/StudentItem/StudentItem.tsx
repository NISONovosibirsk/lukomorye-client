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
    const { studentList } = useAppSelector(
        state => state.studentReducer
    );
    const dispatch = useAppDispatch();
    const { removeStudent, editStudent, setIsDirty, setError } =
        studentSlice.actions;

    const [inputError, setInputError] = useState(false);

    useEffect(() => {
        !modal && setInputError(false);
    }, [modal]);

    const handleEdit = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newState = { ...studentList[index] };
        const { name, value, validationMessage } = e.target;

        switch (name) {
            case 'name':
                newState.name = value;
                dispatch(
                    setError(validationMessage && `**${validationMessage}`)
                );
                setInputError(validationMessage ? true : false);
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
        // !isDirty && dispatch(setIsDirty(true));
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
