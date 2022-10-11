import { FormProvider, useForm } from 'react-hook-form';
import Button from '../../common/Button/Button';
import FormInput from '../../common/FormInput/FormInput';
import PasswordInput from '../../common/PasswordInput/PasswordInput';
import styles from './SignInForm.module.scss';

const SignInForm: React.FC = () => {
    const methods = useForm({ mode: 'onChange' });
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
    };

    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <FormProvider {...methods}>
            <form
                onSubmit={methods.handleSubmit(onSubmit)}
                className={styles.form}
            >
                <h4>Войдите в свой профиль</h4>
                <FormInput
                    defaultValue={''}
                    name={'email'}
                    type={'text'}
                    placeholder={'Электронная почта'}
                    validations={validations.email}
                />
                <PasswordInput
                    defaultValue={''}
                    name={'password'}
                    placeholder={'Пароль'}
                    validations={validations.password}
                />
                <p>Не помню пароль</p>
                <Button
                    title={'Войти'}
                    width={'40%'}
                    type='submit'
                    isDisabled={!methods.formState.isValid}
                />
                <label className={styles.remember}>
                    Запомнить меня
                    <input type='checkbox' />
                </label>
                <p className={styles.registration}>Зарегистрироваться</p>
            </form>
        </FormProvider>
    );
};

export default SignInForm;
