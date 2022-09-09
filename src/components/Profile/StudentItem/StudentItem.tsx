import { Input, Select } from '../..';
import { Student } from '../../../types/profileTypes';
import styles from './StudentItem.module.scss';

interface Props {
    student: Student;
}

const StudentItem: React.FC<Props> = ({student}) => {

    return (
        <div className={styles.student}>
            <Input
                type='text'
                placeholder='Имя / Фамилия'
                value={student.name}
            />
            <Select placeholder='Класс' value={student.grade} />
            <Input
                type='text'
                placeholder='Колличество баллов'
                isScore={true}
                value={student.score}
            />
        </div>
    );
};

export default StudentItem;
