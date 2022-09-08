import { ReactElement } from 'react';
import {
    AccountData,
    ProfileAvatar,
    ProfileData,
    TeacherData,
    UserLayout,
} from '../../../components';
import { useAppSelector } from '../../../hooks/redux';
import styles from './profile.module.scss';

const Profile = () => {
    const { name } = useAppSelector(state => state.userReducer);

    return (
        <div className={styles.profile}>
            <div className={styles.header}>
                <ProfileAvatar />
                <h2>{name}</h2>
            </div>
            <div className={styles.content}>
                <div className={styles.generalForms}>
                    <ProfileData />
                    <AccountData />
                </div>
                <TeacherData />
            </div>
        </div>
    );
};

Profile.getLayout = function getLayout(page: ReactElement) {
    return <UserLayout>{page}</UserLayout>;
};

export default Profile;
