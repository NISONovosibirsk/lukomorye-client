import { FormInput, Select } from '../..';
import { gradeList } from '../../../assets/mock';
import { Student } from '../../../types/profileTypes';
import styles from './StudentItem.module.scss';

interface Props {
    student: Student;
    isDisabled?: boolean;
}

const StudentItem: React.FC<Props> = ({ student, isDisabled }) => {
    const handleClick = (e: any) => {
        e.stopPropagation();
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
        <div className={styles.student} onClick={handleClick}>
            <FormInput
                isDisabled={isDisabled}
                defaultValue={student.name}
                name={'name'}
                validations={validations.name}
            />
            <Select
                isDisabled={isDisabled}
                name={'grade'}
                placeholder={'Класс'}
                defaultValue={student.grade}
                options={gradeList}
                validations={validations.grade}
            />
            <FormInput
                isDisabled={isDisabled}
                defaultValue={student.score}
                name={'score'}
                placeholder={'Колличество баллов'}
                isScore={true}
                validations={validations.score}
                type={'number'}
            />
        </div>
    );
};

export default StudentItem;
