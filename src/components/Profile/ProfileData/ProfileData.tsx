import { Input, Select, Button } from '../..';
import { gradeList, postList } from '../../../assets/mock';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { userSlice } from '../../../store/reducers/userReducer';
import ProfileFormWrapper from '../ProfileFormWrapper/ProfileFormWrapper';
import styles from './ProfileData.module.scss';

const ProfileData: React.FC = () => {
    const { name, post, grade, school } = useAppSelector(
        state => state.userReducer
    );
    const { editUserName } = userSlice.actions;
    const dispatch = useAppDispatch();

    return (
        <ProfileFormWrapper width='500px' height='410px'>
            <h4>Профиль</h4>
            <form>
                <div className={styles.dataForm}>
                    <Input
                        type='text'
                        placeholder='Фамилия / Имя / Отчество'
                        value={name}
                        name={'name'}
                    />
                    <Select
                        value={post}
                        placeholder='Должность'
                        fontSize='1em'
                        options={postList}
                    />
                    <Select
                        placeholder='Учебное заведение'
                        fontSize='1em'
                        value={school}
                    />
                    <Select
                        value={grade}
                        placeholder='Класс'
                        fontSize='1em'
                        options={gradeList}
                    />
                </div>
                <Button title='Сохранить' width='50%' type='submit' />
            </form>
        </ProfileFormWrapper>
    );
};

export default ProfileData;
