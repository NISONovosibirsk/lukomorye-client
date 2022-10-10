import styles from './ProgressBar.module.scss';

interface Props {
    value: number;
}

const ProgressBar: React.FC<Props> = ({ value }) => {
    const handlePercentage = (value: number) => {
        let deg = (360 / 100) * value;
        return deg;
    };

    return (
        <div
            className={styles.progress}
            style={{
                background: `conic-gradient(#ED771C ${handlePercentage(
                    value
                )}deg, #F2F2F2 0deg)`,
            }}
        >
            <span>{`${value}%`}</span>
        </div>
    );
};

export default ProgressBar;
