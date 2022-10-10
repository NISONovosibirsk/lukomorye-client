import { Student } from '../../../types/profileTypes';
import styles from './TeacherDataItem.module.scss';

interface Props {
    student: Student
}

const TeacherDataItem: React.FC<Props> = ({student}) => {

    return (
        <li className={styles.student}>
            <div className={`${styles.field} ${styles.name}`}>{student.name}</div>
            <div className={styles.field}>{student.grade}</div>
            <div className={styles.field}>{student.score}</div>
        </li>
    )
}

export default TeacherDataItem