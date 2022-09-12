import { UserFooter, UserHeader, UserSidebar } from '../..';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { statusSlice } from '../../../store/reducers/statusReducer';
import styles from './Userlayout.module.scss';

interface Props {
    children: React.ReactNode;
}

const UserLayout: React.FC<Props> = ({ children }) => {
    const { dropDown } = useAppSelector(state => state.statusReducer);
    const { updateDropDown } = statusSlice.actions;
    const dispatch = useAppDispatch();

    const handleClose: () => void = () => {
        dropDown && dispatch(updateDropDown(false));
    };

    return (
        <section className={styles.user}>
            <UserHeader />
            <div className={styles.body} onClick={handleClose}>
                <UserSidebar />
                <div className={styles.content}>{children}</div>
            </div>
            <UserFooter />
        </section>
    );
};

export default UserLayout;
