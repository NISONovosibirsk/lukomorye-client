import { FormProvider, useForm } from 'react-hook-form';
import {
    ProfileFormWrapper,
    Button,
    FormInput,
    PasswordInput,
} from '../../';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { userSlice } from '../../../store/reducers/userReducer';
import styles from './AccountData.module.scss';

const AccountData: React.FC = () => {
    const { updateAccountData } = userSlice.actions;
    const dispatch = useAppDispatch();

    const methods = useForm({ mode: 'all' });

    const onSubmit = (data: any) => {
        dispatch(updateAccountData(data));
        methods.reset();
    };

    const validations = {
        email: {
            required: 'Заполните это поле',
            pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                message: 'Некорректный формат адреса почты',
            },
        },
        password: {
            required: 'Заполните это поле',
            minLength: {
                value: 8,
                message: 'Минимальная длина: 8 символов',
            },
        },
        confirmPassword: {
            required: 'Заполните это поле',
            minLength: {
                value: 8,
                message: 'Минимальная длина: 8 символов',
            },
            validate: (value: string) =>
                value === methods.watch('password') || 'Пароли не совпадают',
        },
    };

    return (
        <ProfileFormWrapper width='500px' height='410px'>
            <h4>Логин / Пароль</h4>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <div className={styles.accountForm}>
                        <FormInput
                            name={'email'}
                            placeholder={'Электронная почта'}
                            defaultValue={''}
                            validations={validations.email}
                        />
                        <PasswordInput
                            name='password'
                            defaultValue={''}
                            placeholder={'Введите новый пароль'}
                            validations={validations.password}
                        />
                        <PasswordInput
                            name='confirmPassword'
                            defaultValue={''}
                            placeholder={'Подтвердите пароль'}
                            validations={validations.confirmPassword}
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

export default AccountData;
