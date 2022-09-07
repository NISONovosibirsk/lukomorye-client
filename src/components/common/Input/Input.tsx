import styles from './Input.module.scss';

interface Props {
    type: string;
    width?: string;
    height?: string;
    fontSize?: string;
    placeholder?: string;
    svg?: string;
    onChange?: () => void;
}

const Input: React.FC<Props> = ({
    type,
    width,
    height,
    fontSize,
    onChange,
    placeholder,
    svg,
}) => {
    return (
        <input
            className={styles.input}
            type={type}
            style={{
                width: `${width}`,
                height: `${height}`,
                fontSize: `${fontSize}`,
            }}
            placeholder={placeholder}
            onChange={onChange}
        />
    );
};

export default Input;
