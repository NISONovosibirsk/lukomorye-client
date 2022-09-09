import styles from './Select.module.scss';

interface Props {
    placeholder: string;
    fontSize?: string;
    options?: Array<string>;
    value?: string | number;
}

const Select: React.FC<Props> = ({ placeholder, fontSize, options, value }) => {
    return (
        <select
            className={styles.select}
            placeholder={placeholder}
            style={{ fontSize: `${fontSize}` }}
        >
            <option className={styles.placeholder} value='' disabled selected>
                {value ? value : placeholder}
            </option>
            {options && options.map((option, index) => (
                <option className={styles.option} value={option} key={index}>{option}</option>
            ))}
        </select>
    );
};

export default Select;
