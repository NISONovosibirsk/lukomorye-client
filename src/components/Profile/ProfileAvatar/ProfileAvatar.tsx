import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { userSlice } from '../../../store/reducers/userReducer';
import styles from './ProfileAvatar.module.scss';

const ProfileAvatar: React.FC = () => {

    const { photo } = useAppSelector(state => state.userReducer);
    const { updateUserAvatar } = userSlice.actions;
    const dispatch = useAppDispatch();

    const handlePhoto = (e: any) => {
        if (e.target.files && e.target.files[0]) {
            let image = new FormData();
            image.append('file', e.target.files[0]);

            console.log(image);
            // dispatch(updateUserAvatar(image));
        }
    };

    return (
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
    );
};

export default ProfileAvatar;
