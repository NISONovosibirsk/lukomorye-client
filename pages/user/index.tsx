import { UserFooter, UserHeader, UserSidebar } from '../../src/components';

import styles from './index.module.scss';

const User = () => {
    return (
        <section className={styles.user}>
            <UserHeader />
            <div className={styles.body}>
                <UserSidebar />
                <div className={styles.content}></div>
            </div>
            <UserFooter />
        </section>
    );
};

export default User;
