import styles from './UserHeader.module.scss';

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.controls}>
                <div className={styles.avatar}></div>
            </div>
        </div>
    );
};

export default Header;
