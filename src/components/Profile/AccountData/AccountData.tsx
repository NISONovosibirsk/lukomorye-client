import { Input, ProfileFormWrapper, Button } from '../../';
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

    return (
        <ProfileFormWrapper width='500px' height='410px'>
            <h4>Логин / Пароль</h4>
            <form>
                <div className={styles.accountForm}>
                    <Input type='text' placeholder='Электронная почта' />
                    <Input
                        type='password'
                        placeholder='Пароль'
                        value={password}
                        onChange={handleChangePassword}
                    />
                    <Input type='password' placeholder='Введите новый пароль' />
                </div>
                <Button title='Сохранить' width='50%' type='submit' />
            </form>
        </ProfileFormWrapper>
    );
};

export default AccountData;
