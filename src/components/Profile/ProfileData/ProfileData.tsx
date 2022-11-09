import { FormSelect, Button, FormInput } from '../..';
import { gradeList, postList } from '../../../assets/mock';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { userSlice } from '../../../store/reducers/userReducer';
import ProfileFormWrapper from '../ProfileFormWrapper/ProfileFormWrapper';
import styles from './ProfileData.module.scss';
import { FormProvider, useForm } from 'react-hook-form';

const ProfileData: React.FC = () => {
    const { post, grade, school } = useAppSelector(state => state.userReducer);
    const { updateProfile } = userSlice.actions;
    const dispatch = useAppDispatch();

    const methods = useForm({ mode: 'all' });

    const onSubmit = (data: any) => {
        dispatch(updateProfile(data));
        methods.reset();
    };

    const validations = {
        name: {
            required: 'Заполните это поле',
            minLength: { value: 10, message: 'Минимальная длина: 10 символов' },
        },
        select: {
            required: 'Заполните это поле',
        },
    };

    return (
        <ProfileFormWrapper>
            <h4>Профиль</h4>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <div className={styles.dataForm}>
                        <FormInput
                            name={'name'}
                            placeholder={'Фамилия / Имя / Отчество'}
                            validations={validations.name}
                            defaultValue={''}
                        />
                        <FormSelect
                            name={'post'}
                            placeholder={'Должность'}
                            defaultValue={post}
                            validations={validations.select}
                            options={postList}
                        />
                        <FormSelect
                            name={'school'}
                            placeholder={'Учебное заведение'}
                            defaultValue={school}
                            validations={validations.select}
                            options={[]}
                        />
                        <FormSelect
                            name={'grade'}
                            placeholder={'Класс'}
                            defaultValue={grade}
                            validations={validations.select}
                            options={gradeList}
                        />
                    </div>
                    <Button
                        title='Сохранить'
                        width='50%'
                        type='submit'
                        isDisabled={!methods.formState.isValid}
                    />
                </form>
            </FormProvider>
        </ProfileFormWrapper>
    );
};

export default ProfileData;
