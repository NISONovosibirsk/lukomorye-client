import {Input, ProfileFormWrapper} from '../../';
import styles from './AccountData.module.scss';

const AccountData: React.FC = () => {

    return (
        <ProfileFormWrapper width='500px' height='410px' btnWidth='50%'>
            <h3>Логин / Пароль</h3>
            <form className={styles.accountForm}>
                <Input type='text' placeholder='Электронная почта' svg='profileIcons/edit-icon.svg'/>
                <Input type='password' placeholder='Пароль' />
                <Input type='password' placeholder='Введите новый пароль' />
            </form>
        </ProfileFormWrapper>
    )
}

export default AccountData;