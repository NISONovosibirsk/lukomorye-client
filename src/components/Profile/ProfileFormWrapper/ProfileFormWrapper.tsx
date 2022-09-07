import Button from '../../common/Button/Button';
import styles from './ProfileFormWrapper.module.scss';

interface Props {
    children: React.ReactNode;
    width: string;
    height: string;
    btnWidth: string;
}

const ProfileFormWrapper: React.FC<Props> = ({ children, width, height, btnWidth }) => {
    return (
        <div
            className={styles.formWrapper}
            style={{ width: `${width}`, height: `${height}` }}
        >
            {children}
            <Button title='Сохранить' width={btnWidth}/>
        </div>
    );
};

export default ProfileFormWrapper;
