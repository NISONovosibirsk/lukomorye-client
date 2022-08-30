import ProgressBar from './ProgressBar/ProgressBar';
import styles from './UserSidebar.module.scss';

const UserSidebar = () => {

    return (
        <div className={styles.sidebar}>
            <div className={styles.header}>
                <p className={styles.name}>Роман Карлович</p>
                <p className={styles.rating}>Ваш рейтинг</p>
                <div className={styles.points}>
                    <ProgressBar />
                </div>
            </div>
            <div className={styles.statistics}></div>
        </div>
    )
}

export default UserSidebar;