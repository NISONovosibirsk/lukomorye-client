import Link from 'next/link';
import { LogOutIcon, SettingsIcon } from '../../../assets';
import styles from './DropDown.module.scss';

const DropDown: React.FC = () => {

    return (
        <ul className={styles.dropDown}>
                        <h4>Ваш профиль</h4>
                        <li>
                            <SettingsIcon />
                            <Link href={'user/settings'}>
                                <a>Настройки</a>
                            </Link>
                        </li>
                        <li>
                            <LogOutIcon />
                            <p>Выйти из профиля</p>
                        </li>
                    </ul>
    )
};

export default DropDown;
