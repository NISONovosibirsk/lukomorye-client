import styles from './ProgressBar.module.scss';

const ProgressBar = () => {

    return (
        <div className={styles.progress}>
            <div className={styles.fill}></div>
        </div>
    )
}

export default ProgressBar;