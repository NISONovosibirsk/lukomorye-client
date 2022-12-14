import axios from 'axios';
import { ReactElement, useEffect } from 'react';
import {
    AccountData,
    Modal,
    ProfileAvatar,
    ProfileData,
    TeacherForm,
    UserLayout,
    TeacherData,
} from '../../../components';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { statusSlice } from '../../../store/reducers/statusReducer';
import { studentSlice } from '../../../store/reducers/studentReducer';
import styles from './profile.module.scss';

const Profile = () => {
    const { name } = useAppSelector(state => state.userReducer);
    const { modal } = useAppSelector(state => state.statusReducer);
    const { isDirty } = useAppSelector(state => state.studentReducer);
    const { updateModal } = statusSlice.actions;
    const { updateStudentList, resetForm } = studentSlice.actions;
    // const { setIsDirty } = studentSlice.actions;
    const dispatch = useAppDispatch();

    useEffect(() => {
        const getData = async () => {
            try {
                await axios.get('../quizMock.json').then(response => {
                    dispatch(updateStudentList(response.data.students));
                });
            } catch (error) {
                console.log(error);
            }
        };
        getData();
    }, [modal]);

    const handleClose: () => void = () => {
        dispatch(updateModal(false));
        dispatch(resetForm());
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
