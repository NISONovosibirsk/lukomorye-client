import styles from './Checkbox.module.scss';

interface Props {
    title: string;
}

const Checkbox: React.FC<Props> = ({ title }) => {
    return (
        <label className={styles.wrapper}>
            {title}
            <input type='checkbox' />
            <span className={styles.checkmark}></span>
        </label>
    );
};

export default Checkbox;
