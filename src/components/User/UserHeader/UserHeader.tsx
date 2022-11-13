import Image from 'next/image';
import Link from 'next/link';
import { DefaultAvatar, DropDownIcon } from '../../../assets';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { statusSlice } from '../../../store/reducers/statusReducer';
import DropDown from '../DropDown/DropDown';
import styles from './UserHeader.module.scss';

const Header: React.FC = () => {
    const { dropDown } = useAppSelector(state => state.statusReducer);
    const { photo } = useAppSelector(state => state.userReducer);
    const { updateDropDown } = statusSlice.actions;
    const dispatch = useAppDispatch();

    const handleOpen: () => void = () => {
        dispatch(updateDropDown(!dropDown));
    };

    return (
        <div className={styles.header}>
            <Link href={'/user'}>
                <a className={styles.home}></a>
            </Link>
            <div className={styles.controls}>
                {photo ? (
                    <Image src={photo} onClick={handleOpen}/>
                ) : (
                    <DefaultAvatar className={styles.avatar} onClick={handleOpen}/>
                )}
                <DropDownIcon onClick={handleOpen} />
                {dropDown && <DropDown />}
            </div>
        </div>
    );
};

export default Header;
