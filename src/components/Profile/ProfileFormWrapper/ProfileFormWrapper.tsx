import styles from './ProfileFormWrapper.module.scss';

interface Props {
    children: React.ReactNode;
    width: string;
    height: string;
}

const ProfileFormWrapper: React.FC<Props> = ({ children, width, height }) => {
    return (
        <div
            className={styles.formWrapper}
            style={{ width: `${width}`, height: `${height}` }}
        >
            {children}
        </div>
    );
};

export default ProfileFormWrapper;
