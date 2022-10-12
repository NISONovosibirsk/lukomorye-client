import { FormProvider, useForm } from 'react-hook-form';
import styles from './RecoveryForm.module.scss';
import { FormInput, Button } from '../../';

const RecoveryForm: React.FC = () => {
    const methods = useForm({ mode: 'onChange' });
    const validations = {
        required: 'Заполните это поле',
        pattern: {
            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
            message: 'Некорректный формат адреса почты',
        },
    };

    const onSubmit = (data: any) => {
        try {
            console.log(data);
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
                <h4>Восстановление пароля</h4>
                <p>
                    Для восстановления пароля Вам необходимо ввести свою
                    электронную почту. Письмо с дальнейшей инструкцией по смене
                    пароля будет выслано вам на почту.
                </p>
                <FormInput
                    name={'email'}
                    defaultValue={''}
                    validations={validations}
                />
                <Button
                    title={'Отправить'}
                    width={'50%'}
                    type={'submit'}
                    isDisabled={!methods.formState.isValid}
                />
            </form>
        </FormProvider>
    );
};

export default RecoveryForm;
