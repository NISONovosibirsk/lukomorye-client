import { useRef } from 'react';
import { ShowIcon } from '../../../assets';
import styles from './Input.module.scss';

interface Props {
    type: string;
    width?: string;
    height?: string;
    fontSize?: string;
    placeholder?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string | number;
    isScore?: boolean;
}

const Input: React.FC<Props> = ({
    type,
    width,
    height,
    fontSize,
    onChange,
    placeholder,
    value,
    isScore,
}) => {
    const inputType = useRef<HTMLInputElement>(null);

    const handleShow = () => {
        console.log(inputType);
        if (inputType.current) {
            inputType.current.type = 'text';
        }
    };

    const handleHide = () => {
        if (inputType.current) {
            inputType.current.type = 'password';
        }
    };

    return (
        <div className={styles.inputWrapper}>
            <input
                ref={inputType}
                className={`${styles.input} ${
                    type === 'password' && styles.password
                } ${isScore && styles.score}`}
                type={type}
                style={{
                    width: `${width}`,
                    height: `${height}`,
                    fontSize: `${fontSize}`,
                }}
                placeholder={placeholder}
                onChange={onChange}
                value={isScore ? `${value}/100` : value}
            />
            {type === 'password' && (
                <ShowIcon
                    className={styles.showIcon}
                    onMouseDown={handleShow}
                    onMouseUp={handleHide}
                />
            )}
        </div>
    );
};

export default Input;
