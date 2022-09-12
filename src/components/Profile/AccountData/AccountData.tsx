import { FormProvider, useForm } from 'react-hook-form';
import {
    ProfileFormWrapper,
    Button,
    ValidatedInput,
    PasswordInput,
} from '../../';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { userSlice } from '../../../store/reducers/userReducer';
import styles from './AccountData.module.scss';

const AccountData: React.FC = () => {
    const { password } = useAppSelector(state => state.userReducer);
    const { updateUserPassword } = userSlice.actions;
    const dispatch = useAppDispatch();

    const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(updateUserPassword(e.target.value));
    };

    const methods = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
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
                message: 'Минимальная длинна: 8 символов'
            }
        },
    };

    return (
        <ProfileFormWrapper width='500px' height='410px'>
            <h4>Логин / Пароль</h4>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <div className={styles.accountForm}>
                        <ValidatedInput
                            name={'email'}
                            placeholder={'Электронная почта'}
                            defaultValue={''}
                            validations={validations.email}
                        />
                        <PasswordInput
                            name='password'
                            defaultValue={''}
                            placeholder={'Пароль'}
                            validations={validations.password}
                        />
                        <PasswordInput
                            name='confirmPassword'
                            defaultValue={''}
                            placeholder={'Введите новый пароль'}
                        />
                    </div>
                    <Button title='Сохранить' width='50%' type='submit' />
                </form>
            </FormProvider>
        </ProfileFormWrapper>
    );
};

export default AccountData;
