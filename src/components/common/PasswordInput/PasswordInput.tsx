import { useState } from 'react';
import { useController } from 'react-hook-form';
import { ShowIcon } from '../../../assets';
import styles from './PasswordInput.module.scss';

interface Props {
    width?: string;
    height?: string;
    fontSize?: string;
    placeholder?: string;
    defaultValue: string | number;
    name: string;

    validations?: any;
}

const PasswordInput: React.FC<Props> = ({
    name,
    width,
    height,
    fontSize,
    placeholder,
    defaultValue,
    validations,
}) => {
    const {
        field,
        fieldState: { error },
    } = useController({ name, rules: validations, defaultValue });
    const [isShown, setIsShown] = useState(false);

    const handleShow = () => {
        setIsShown(true);
    };

    const handleHide = () => {
        setIsShown(false);
    };

    return (
        <div className={styles.inputWrapper}>
            <input
                className={`${styles.password} ${error && styles.error}`}
                type={isShown ? 'text' : 'password'}
                style={{
                    width: `${width}`,
                    height: `${height}`,
                    fontSize: `${fontSize}`,
                }}
                placeholder={placeholder}
                {...field}
            />
            <ShowIcon
                className={styles.showIcon}
                onMouseDown={handleShow}
                onMouseUp={handleHide}
            />
            {error && <span>{error.message}</span>}
        </div>
    );
};

export default PasswordInput;
