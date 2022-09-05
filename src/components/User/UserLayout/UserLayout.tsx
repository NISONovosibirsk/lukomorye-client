import { UserFooter, UserHeader, UserSidebar } from '../..';
import styles from './Userlayout.module.scss';

interface Props {
    children: any;
}

const UserLayout: React.FC<Props> = ({ children }) => {
    return (
        <section className={styles.user}>
            <UserHeader />
            <div className={styles.body}>
                <UserSidebar />
                <div className={styles.content}>{children}</div>
            </div>
            <UserFooter />
        </section>
    );
};

export default UserLayout;
