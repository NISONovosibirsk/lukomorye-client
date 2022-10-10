import { useController } from 'react-hook-form';
import styles from './FormSelect.module.scss';

interface Props {
    placeholder?: string;
    fontSize?: string;
    options: Array<string>;
    defaultValue?: string | number;
    name: string;
    validations?: any;
    isDisabled?: boolean;
}

const FormSelect: React.FC<Props> = ({
    placeholder,
    fontSize,
    options,
    defaultValue,
    name,
    validations,
    isDisabled,
}) => {
    const {
        field,
        fieldState: { error },
    } = useController({ name, rules: validations, defaultValue });

    return (
        <select
            disabled={isDisabled}
            className={styles.select}
            placeholder={placeholder}
            style={{ fontSize: `${fontSize}` }}
            {...field}
        >
            <option
                className={styles.placeholder}
                disabled
                defaultValue={defaultValue}
            >
                {defaultValue ? defaultValue : placeholder}
            </option>
            {options &&
                options.map((option, index) => (
                    <option
                        className={styles.option}
                        value={option}
                        key={index}
                    >
                        {option}
                    </option>
                ))}
        </select>
    );
};

export default FormSelect;
