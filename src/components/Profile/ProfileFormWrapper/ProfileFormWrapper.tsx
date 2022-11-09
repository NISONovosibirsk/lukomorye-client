import styles from './ProfileFormWrapper.module.scss';

interface Props {
    children: React.ReactNode;
}

const ProfileFormWrapper: React.FC<Props> = ({ children }) => {
    return <div className={styles.formWrapper}>{children}</div>;
};

export default ProfileFormWrapper;
