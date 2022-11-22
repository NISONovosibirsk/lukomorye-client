import { useController } from 'react-hook-form';
import styles from './RadioButton.module.scss';

interface Props {
    checked?: boolean;
    title: string;
    name: string;
    value: string;
    validations?: any;
    fontSize?: string;
}

const RadioButton: React.FC<Props> = ({
    checked,
    title,
    name,
    value,
    validations,
    fontSize,
}) => {
    const { field, fieldState } = useController({ name, rules: validations });

    return (
        <label className={styles.wrapper} style={{ fontSize: `${fontSize}` }}>
            {title}
            <input
                type='radio'
                defaultChecked={checked}
                {...field}
                value={value}
            />
            <span className={styles.checkmark}></span>
        </label>
    );
};

export default RadioButton;
