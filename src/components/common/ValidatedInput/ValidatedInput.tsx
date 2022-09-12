import { useController } from 'react-hook-form';
import styles from './ValidatedInput.module.scss';

interface Props {
    width?: string;
    height?: string;
    fontSize?: string;
    placeholder?: string;
    defaultValue: string | number;
    isScore?: boolean;
    name: string;

    validations?: any;
}

const ValidatingInput: React.FC<Props> = ({
    name,
    isScore,
    width,
    height,
    fontSize,
    placeholder,
    validations,
    defaultValue,
}) => {
    const {
        field,
        fieldState: { error },
    } = useController({ name, rules: validations, defaultValue });

    return (
        <div className={styles.inputWrapper}>
            <input
                className={`${styles.input}  ${isScore && styles.score} ${error && styles.error}`}
                type='text'
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

export default ValidatingInput;
