import Image from 'next/image';
import { DefaultAvatar, DropDownIcon } from '../../../assets';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { statusSlice } from '../../../store/reducers/statusReducer';
import DropDown from '../DropDown/DropDown';
import styles from './UserHeader.module.scss';

const Header: React.FC = () => {
    const { dropDown } = useAppSelector(state => state.statusReducer);
    const { avatar } = useAppSelector(state => state.userReducer);
    const { updateDropDown } = statusSlice.actions;
    const dispatch = useAppDispatch();

    const handleOpen: () => void = () => {
        dispatch(updateDropDown(!dropDown));
    };

    return (
        <div className={styles.header}>
            <div className={styles.controls}>
                {/* <div className={styles.avatar} onClick={handleOpen}></div> */}
                {/* <Image src={DefaultAvatar}/> */}
                {avatar ? (
                    <Image src={avatar} />
                ) : (
                    <DefaultAvatar className={styles.avatar} />
                )}
                <DropDownIcon onClick={handleOpen} />
                {dropDown && <DropDown />}
            </div>
        </div>
    );
};

export default Header;
