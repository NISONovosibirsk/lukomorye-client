import { ReactElement } from 'react';
import { AccountData, ProfileData, UserLayout } from '../../../components';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { userSlice } from '../../../store/reducers/userReducer';
import styles from './profile.module.scss';

const Profile = () => {
    const { name, photo } = useAppSelector(state => state.userReducer);
    const { updateUserAvatar } = userSlice.actions;
    const dispatch = useAppDispatch();

    const handlePhoto = (e: any) => {
        if (e.target.files && e.target.files[0]) {
            let image = new FormData();
            image.append('file', e.target.files[0]);

            console.log(image);
            dispatch(updateUserAvatar(image));
        }
    };

    return (
        <div className={styles.profile}>
            <div className={styles.header}>
                <div
                    className={styles.avatar}
                    style={{ backgroundImage: `url(${photo})` }}
                >
                    <label className={styles.select}>
                        <input
                            onChange={handlePhoto}
                            type='file'
                            accept='image/png, image/jpeg, image/jpg'
                        />
                    </label>
                </div>
                <h2>{name}</h2>
            </div>
            <div className={styles.content}>
                <div className={styles.generalForms}>
                    <ProfileData />
                    <AccountData />
                </div>
                <div>
                    TEACHER FORM
                </div>
            </div>
        </div>
    );
};

Profile.getLayout = function getLayout(page: ReactElement) {
    return <UserLayout>{page}</UserLayout>;
};

export default Profile;
