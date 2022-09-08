import { Input, ProfileFormWrapper } from '../../';
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
        <ProfileFormWrapper width='500px' height='410px' btnWidth='50%'>
            <h3>Логин / Пароль</h3>
            <form className={styles.accountForm}>
                <Input type='text' placeholder='Электронная почта' />
                <Input
                    type='password'
                    placeholder='Пароль'
                    value={password}
                    onChange={handleChangePassword}
                />
                <Input type='password' placeholder='Введите новый пароль' />
            </form>
        </ProfileFormWrapper>
    );
};

export default AccountData;
