import { useFormContext } from 'react-hook-form';
import { FormInput, Select } from '../..';
import { gradeList } from '../../../assets/mock';
import { Student } from '../../../types/profileTypes';
import styles from './StudentItem.module.scss';

interface Props {
    student: Student;
}

const StudentItem: React.FC<Props> = ({ student }) => {
    const handleClick = (e: any) => {
        e.stopPropagation();
    };

    const methods = useFormContext();

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
            validate: (value: number) =>
                value <= 100 || 'Больше 100 баллов'
        },
    };

    return (
        <div className={styles.student} onClick={handleClick}>
            <FormInput
                defaultValue={student.name}
                name={student.name}
                validations={validations.name}
            />
            <Select
                name={student.grade}
                placeholder={'Класс'}
                defaultValue={student.grade}
                options={gradeList}
                validations={validations.grade}
            />
            <FormInput
                defaultValue={student.score}
                name={String(student.score)}
                placeholder={'Колличество баллов'}
                isScore={true}
                validations={validations.score}
                type={'number'}
            />
        </div>
    );
};

export default StudentItem;
