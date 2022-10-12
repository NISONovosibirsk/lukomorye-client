import { FormProvider, useForm } from 'react-hook-form';
import styles from './NewPasswordForm.module.scss';
import { PasswordInput, Button } from '../../';

const NewPasswordForm: React.FC = () => {
    const methods = useForm({ mode: 'onChange' });
    const validations = {
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

    const onSubmit = (data: any) => {
        try {
            console.log(data.password);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <FormProvider {...methods}>
            <form
                onSubmit={methods.handleSubmit(onSubmit)}
                className={styles.form}
            >
                <label className={styles.field}>
                    Создайте новый пароль
                    <PasswordInput
                        defaultValue={''}
                        name={'password'}
                        validations={validations.password}
                    />
                </label>
                <label className={styles.field}>
                    Подтвердите новый пароль
                    <PasswordInput
                        defaultValue={''}
                        name={'confirmPassword'}
                        validations={validations.confirmPassword}
                    />
                </label>
                <Button
                    title={'Создать'}
                    width={'50%'}
                    isDisabled={!methods.formState.isValid}
                />
            </form>
        </FormProvider>
    );
};

export default NewPasswordForm;
