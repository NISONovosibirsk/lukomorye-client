import { ReactElement } from 'react';
import {
    AccountData,
    Modal,
    ProfileAvatar,
    ProfileData,
    TeacherData,
    TeacherForm,
    UserLayout,
} from '../../../components';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { statusSlice } from '../../../store/reducers/statusReducer';
import styles from './profile.module.scss';

const Profile = () => {
    const { name } = useAppSelector(state => state.userReducer);
    const { updateModal } = statusSlice.actions;
    const dispatch = useAppDispatch();

    const handleClose: () => void = () => {
        dispatch(updateModal(false));
    };

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
            <Modal onClose={handleClose} height={'80vh'} width={'60vw'}>
                <TeacherForm />
            </Modal>
        </div>
    );
};

Profile.getLayout = function getLayout(page: ReactElement) {
    return <UserLayout>{page}</UserLayout>;
};

export default Profile;
