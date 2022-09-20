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
}

const FormInput: React.FC<Props> = ({
    isScore,
    width,
    height,
    fontSize,
    placeholder,
    value,
    type,
    isDisabled
}) => {

    return (
        <div className={styles.inputWrapper}>
            <input
                disabled={isDisabled}
                className={`${styles.input} ${isScore && styles.score}`}
                type={type}
                style={{
                    width: `${width}`,
                    height: `${height}`,
                    fontSize: `${fontSize}`,
                }}
                placeholder={placeholder}
            />
            <span>ошибка</span>
        </div>
    );
};

export default FormInput;
