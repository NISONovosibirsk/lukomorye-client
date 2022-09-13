import { useController } from 'react-hook-form';
import styles from './Select.module.scss';

interface Props {
    placeholder?: string;
    fontSize?: string;
    options: Array<string>;
    defaultValue?: string | number;
    name: string;
    validations?: any;
}

const Select: React.FC<Props> = ({
    placeholder,
    fontSize,
    options,
    defaultValue,
    name,
    validations,
}) => {
    const {
        field,
        fieldState: { error },
    } = useController({ name, rules: validations, defaultValue });

    return (
        <select
            className={styles.select}
            placeholder={placeholder}
            style={{ fontSize: `${fontSize}` }}
            {...field}
        >
            <option className={styles.placeholder} disabled defaultValue={defaultValue}>
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

export default Select;
