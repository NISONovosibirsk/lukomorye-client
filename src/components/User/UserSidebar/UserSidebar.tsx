import { useAppSelector } from '../../../hooks/redux';
import { SidebarItem } from '../..';
import styles from './UserSidebar.module.scss';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';

const UserSidebar: React.FC = () => {
    const user = useAppSelector(state => state.userReducer);
    const progressbar = {
        textColor: '#ED771C',
        pathColor: '#ED771C',
        textSize: '32px',
    };

    return (
        <div className={styles.sidebar}>
            <div className={styles.header}>
                <p className={styles.name}>{user.name}</p>
                <p className={styles.rating}>Ваш рейтинг</p>
                <div className={styles.points}>
                    {/* <ProgressBar value={user.rating} /> */}
                    <CircularProgressbar
                        value={user.rating}
                        text={`${user.rating}%`}
                        styles={buildStyles(progressbar)}
                    />
                </div>
            </div>
            <div className={styles.statistics}>
                <h4>Пройденные тесты</h4>
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
