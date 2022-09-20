import styles from './Select.module.scss';

interface Props {
    placeholder?: string;
    fontSize?: string;
    options: Array<string>;
    defaultValue?: string | number;
    isDisabled?: boolean;
}

const Select: React.FC<Props> = ({
    placeholder,
    fontSize,
    options,
    defaultValue,
    isDisabled,
}) => {
    return (
        <select
            disabled={isDisabled}
            className={styles.select}
            placeholder={placeholder}
            style={{ fontSize: `${fontSize}` }}
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

export default Select;
