import { DropDownIcon, LogOutIcon, SettingsIcon } from '../../../assets';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { statusSlice } from '../../../store/reducers/statusReducer';
import styles from './UserHeader.module.scss';

const Header: React.FC = () => {
    const { dropDown } = useAppSelector(state => state.statusReducer);
    const { updateDropDown } = statusSlice.actions;
    const dispatch = useAppDispatch();

    const handleOpen: () => void = () => {
        dispatch(updateDropDown(!dropDown));
    };

    return (
        <div className={styles.header}>
            <div className={styles.controls}>
                <div className={styles.avatar} onClick={handleOpen}></div>
                <DropDownIcon onClick={handleOpen}/>
                {dropDown && (
                    <ul className={styles.dropDown}>
                        <h4>Ваш профиль</h4>
                        <li>
                            <SettingsIcon />
                            <p>Настройки</p>
                        </li>
                        <li>
                            <LogOutIcon />
                            <p>Выйти из профиля</p>
                        </li>
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Header;
