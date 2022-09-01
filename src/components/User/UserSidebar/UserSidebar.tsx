import { useAppSelector } from '../../../hooks/redux';
import { ProgressBar, SidebarItem } from '../../../components';
import styles from './UserSidebar.module.scss';

const UserSidebar: React.FC = () => {
    const user = useAppSelector(state => state.userReducer);

    return (
        <div className={styles.sidebar}>
            <div className={styles.header}>
                <p className={styles.name}>{user.name}</p>
                <p className={styles.rating}>Ваш рейтинг</p>
                <div className={styles.points}>
                    <ProgressBar value={user.rating} />
                </div>
            </div>
            <div className={styles.statistics}>
                <p>Пройденные тесты</p>
                <ul>
                    {user.passedTests.map((test, index) => (
                        <SidebarItem
                            name={test.name}
                            points={test.points}
                            key={index}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default UserSidebar;
