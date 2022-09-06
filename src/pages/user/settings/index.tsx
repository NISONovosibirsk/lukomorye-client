import { ChangeEvent, ReactElement } from 'react';
import { UserLayout } from '../../../components';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { userSlice } from '../../../store/reducers/userReducer';
import styles from './settings.module.scss';

const Settings = () => {
    const { name, photo } = useAppSelector(state => state.userReducer);
    const { updateUserAvatar } = userSlice.actions;
    const dispatch = useAppDispatch();

    const handlePhoto = (e: any) => {
        if (e.target.files && e.target.files[0]) {
            let image = new FormData();
            image.append('file', e.target.files[0]);

            console.log(image)
            dispatch(updateUserAvatar(image))
        }
    };

    return (
        <div className={styles.settings}>
            <div className={styles.header}>
                <div className={styles.avatar} style={{backgroundImage: `url(${photo})`}}>
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
            <div className={styles.content}></div>
        </div>
    );
};

Settings.getLayout = function getLayout(page: ReactElement) {
    return <UserLayout>{page}</UserLayout>;
};

export default Settings;
