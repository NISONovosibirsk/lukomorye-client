import { useEffect, useState } from 'react';
import styles from './Input.module.scss';

interface Props {
    width?: string;
    height?: string;
    fontSize?: string;
    placeholder?: string;
    value: string | number;
    isScore?: boolean;
    type?: string;
    isDisabled?: boolean;
    error?: string | boolean;
    onChange: any;
    name: string;
    required?: boolean;
}

const Input: React.FC<Props> = ({
    isScore,
    width,
    height,
    fontSize,
    placeholder,
    value,
    type,
    isDisabled,
    error,
    onChange,
    name,
    required,
}) => {
    return (
        <div className={styles.inputWrapper}>
            <input
                required={required}
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
                value={value}
                onChange={onChange}
                name={name}
            />
        </div>
    );
};

export default Input;
