import styles from './Input.module.scss';

interface Props {
    width?: string;
    height?: string;
    fontSize?: string;
    placeholder?: string;
    value: string | number;
    isScore?: boolean;
    type?: string;
    isDisabled?: boolean;
    error: string;
}

const Input: React.FC<Props> = ({
    isScore,
    width,
    height,
    fontSize,
    placeholder,
    value,
    type,
    isDisabled,
    error
}) => {
    return (
        <div className={styles.inputWrapper}>
            <input
                disabled={isDisabled}
                className={`${styles.input}  ${isScore && styles.score} ${
                    error && styles.error
                }`}
                type={type}
                style={{
                    width: `${width}`,
                    height: `${height}`,
                    fontSize: `${fontSize}`,
                }}
                placeholder={placeholder}
                value={value}
            />
            {error && <span>{error}</span>}
        </div>
    );
};

export default Input;
