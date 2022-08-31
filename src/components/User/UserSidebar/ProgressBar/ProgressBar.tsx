import styles from './ProgressBar.module.scss';

interface Props {
    value: number;
}

const ProgressBar: React.FC<Props> = ({value}) => {

    return (
        <div className={styles.progress}>
            <span>{`${value}%`}</span>
        </div>
    )
}

export default ProgressBar;