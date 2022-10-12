import { useController } from 'react-hook-form';
import styles from './RadioButton.module.scss';

interface Props {
    checked?: boolean;
    title: string;
    name: string;
    value: string;
}

const RadioButton: React.FC<Props> = ({ checked, title, name, value }) => {
    const {field, fieldState} = useController({ name});

    return (
        <label className={styles.wrapper}>
            {title}
            <input type='radio' defaultChecked={checked} {...field} value={value}/>
            <span className={styles.checkmark}></span>
        </label>
    );
};

export default RadioButton;
