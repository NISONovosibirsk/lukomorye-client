import { Input, Select, Button } from '../..';
import { gradeList, postList } from '../../../assets/mock';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { userSlice } from '../../../store/reducers/userReducer';
import ProfileFormWrapper from '../ProfileFormWrapper/ProfileFormWrapper';
import styles from './ProfileData.module.scss';
import { useForm } from 'react-hook-form';

const ProfileData: React.FC = () => {
    const { name, post, grade, school } = useAppSelector(
        state => state.userReducer
    );
    const { editUserName } = userSlice.actions;
    const dispatch = useAppDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
    };

    const validations = {
        required: 'Заполните это поле',
    };

    return (
        <ProfileFormWrapper width='500px' height='410px'>
            <h4>Профиль</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.dataForm}>
                    <Input
                        type='text'
                        placeholder='Фамилия / Имя / Отчество'
                        // value={name}
                        name={'name'}
                        // {...register('name', validations)}
                    />
                    {/* <Select
                        // value={post}
                        placeholder='Должность'
                        fontSize='1em'
                        options={postList}
                        // name={'post'}
                        // {...register('post', validations)}
                    />
                    <Select
                        placeholder='Учебное заведение'
                        fontSize='1em'
                        // value={school}
                        // name={'school'}
                        // {...register('school', validations)}
                    />
                    <Select
                        // value={grade}
                        placeholder='Класс'
                        fontSize='1em'
                        options={gradeList}
                        // name={'grade'}
                        // {...register('grade', validations)}
                    /> */}
                </div>
                <Button
                    title='Сохранить'
                    width='50%'
                    type='submit'
                    isDisabled={!isValid}
                />
            </form>
        </ProfileFormWrapper>
    );
};

export default ProfileData;
