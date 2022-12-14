import { useController } from 'react-hook-form';
import styles from './FormInput.module.scss';

interface Props {
    width?: string;
    height?: string;
    fontSize?: string;
    placeholder?: string;
    defaultValue: string | number;
    isScore?: boolean;
    name: string;
    type?: string;
    validations?: any;
    isDisabled?: boolean;
}

const FormInput: React.FC<Props> = ({
    name,
    isScore,
    width,
    height,
    fontSize,
    placeholder,
    validations,
    defaultValue,
    type,
    isDisabled
}) => {
    const {
        field,
        fieldState: { error },
    } = useController({ name, rules: validations, defaultValue });

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
                {...field}
            />
            {error && <span>{error.message}</span>}
        </div>
    );
};

export default FormInput;
