import { Input, Select } from '../..';
import { gradeList, postList } from '../../../assets/mock';
import { useAppSelector } from '../../../hooks/redux';
import ProfileFormWrapper from '../ProfileFormWrapper/ProfileFormWrapper';
import styles from './ProfileData.module.scss';

const ProfileData: React.FC = () => {
    
    const { name, post, grade, school } = useAppSelector(state => state.userReducer);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        
    }

    return (
        <ProfileFormWrapper width='500px' height='410px' btnWidth='50%'>
            <h3>Профиль</h3>
            <form className={styles.dataForm}>
                <Input
                    type='text'
                    placeholder='Фамилия / Имя / Отчество'
                    value={name}
                />
                <Select
                    value={post}
                    placeholder='Должность'
                    fontSize='1.2em'
                    options={postList}
                />
                <Select placeholder='Учебное заведение' fontSize='1.2em' value={school}/>
                <Select
                    value={grade}
                    placeholder='Класс'
                    fontSize='1.2em'
                    options={gradeList}
                />
            </form>
        </ProfileFormWrapper>
    );
};

export default ProfileData;
