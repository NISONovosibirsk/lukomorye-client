import styles from './Select.module.scss';

interface Props {
    placeholder?: string;
    fontSize?: string;
    options: Array<string>;
    value: string | number;
    validations?: any;
    isDisabled?: boolean;
    onChange: any;
}

const Select: React.FC<Props> = ({
    placeholder,
    fontSize,
    options,
    value,
    isDisabled,
    onChange,
}) => {
    return (
        <select
            disabled={isDisabled}
            className={styles.select}
            placeholder={placeholder}
            style={{ fontSize: `${fontSize}` }}
            value={value}
            onChange={onChange}
        >
            <option className={styles.placeholder} disabled value={value}>
                {value ? value : placeholder}
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
