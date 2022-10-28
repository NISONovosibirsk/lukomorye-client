import Link from 'next/link';
import { useRouter } from 'next/router';
import { LogOutIcon, SettingsIcon } from '../../../assets';
import styles from './DropDown.module.scss';

const DropDown: React.FC = () => {
    const { pathname } = useRouter();

    return (
        <ul className={styles.dropDown}>
            <h4>Ваш профиль</h4>
            <li className={pathname === '/user/profile' ? styles.disabled : ''}>
                <SettingsIcon />
                <Link href={'user/profile'}>
                    <a>Настройки</a>
                </Link>
            </li>
            <li>
                <LogOutIcon />
                <p>Выйти из профиля</p>
            </li>
        </ul>
    );
};

export default DropDown;
