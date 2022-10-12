import { FormProvider, useForm } from 'react-hook-form';
import {
    cityList,
    gradeList,
    postList,
    schoolList,
} from '../../../assets/mock';
import {
    RadioButton,
    FormInput,
    FormSelect,
    PasswordInput,
    Button,
} from '../../';
import styles from './SignUpForm.module.scss';

const SignUpForm: React.FC = () => {
    const methods = useForm({
        mode: 'onChange',
        defaultValues: { sex: 'male', confirmPassword: '', password: '' },
    });

    const onSubmit = (data: any) => {
        console.log(data);
    };

    const validations = {
        name: {
            required: 'Заполните это поле',
            minLength: { value: 10, message: 'Минимальная длина: 10 символов' },
        },
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
        <FormProvider {...methods}>
            <form
                onSubmit={methods.handleSubmit(onSubmit)}
                className={styles.form}
            >
                <div className={styles.selects}>
                    <h4>Создай свой профиль</h4>
                    <label className={styles.field}>
                        Вы
                        <FormSelect
                            name={'role'}
                            options={postList}
                            defaultValue={'Учитель'}
                        />
                    </label>
                    <label className={styles.field}>
                        Город
                        <FormSelect
                            name={'city'}
                            options={cityList}
                            defaultValue={'Новосибирск'}
                        />
                    </label>
                    <label className={styles.field}>
                        Школа
                        <FormSelect
                            name={'school'}
                            options={schoolList}
                            defaultValue={'Школа №1'}
                        />
                    </label>
                    <label className={styles.field}>
                        Класс
                        <FormSelect
                            name={'grade'}
                            options={gradeList}
                            defaultValue={'1А'}
                        />
                    </label>
                    <div className={styles.radio}>
                        <RadioButton
                            checked={true}
                            title={'Мужской'}
                            name={'sex'}
                            value={'male'}
                        />
                        <RadioButton
                            title={'Женский'}
                            name={'sex'}
                            value={'female'}
                        />
                    </div>
                </div>
                <div className={styles.inputs}>
                    <label className={styles.field}>
                        E-mail (является логином при авторизации)
                        <FormInput
                            defaultValue={''}
                            name={'email'}
                            validations={validations.email}
                        />
                    </label>
                    <label className={styles.field}>
                        Фамилия / Имя / Отчество{' '}
                        <FormInput
                            defaultValue={''}
                            name={'name'}
                            validations={validations.name}
                        />
                    </label>
                    <label className={styles.field}>
                        Пароль
                        <PasswordInput
                            defaultValue={''}
                            name={'password'}
                            validations={validations.password}
                        />
                    </label>
                    <label className={styles.field}>
                        Подтвердите пароль
                        <PasswordInput
                            defaultValue={''}
                            name={'confirmPassword'}
                            validations={validations.confirmPassword}
                        />
                    </label>
                    <Button
                        title={'Создать'}
                        width={'50%'}
                        type={'submit'}
                        isDisabled={!methods.formState.isValid}
                    />
                    <p className={styles.terms}>
                        Нажимая на кнопку, вы соглашаетесь на обработку
                        персональных данных
                    </p>
                </div>
            </form>
        </FormProvider>
    );
};

export default SignUpForm;
