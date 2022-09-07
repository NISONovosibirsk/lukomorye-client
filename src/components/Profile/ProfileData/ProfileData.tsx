import { Input, Select } from '../..'
import ProfileFormWrapper from '../ProfileFormWrapper/ProfileFormWrapper';
import styles from './ProfileData.module.scss';

const ProfileData: React.FC = () => {
    const postList = ['Учитель', 'Классный руководитель'];
    const classList = ['1', '2', '3', '4', '5']

    return (
        <ProfileFormWrapper width='500px' height='410px' btnWidth='50%'>
            <h3>Профиль</h3>
            <form className={styles.dataForm}>
                <Input type='text' placeholder='Фамилия / Имя / Отчество' />
                <Select placeholder='Должность' fontSize='1.2em' options={postList}/>
                <Select placeholder='Учебное заведение' fontSize='1.2em'/>
                <Select placeholder='Класс' fontSize='1.2em' options={classList}/>
            </form>
        </ProfileFormWrapper>
    );
};

export default ProfileData;
