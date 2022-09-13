import styles from './TeacherData.module.scss';
import { TeacherForm } from '../../';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { statusSlice } from '../../../store/reducers/statusReducer';

const TeacherData: React.FC = () => {
    const { updateCaption } = statusSlice.actions;
    const dispatch = useAppDispatch();

    const handleShow = () => {
        dispatch(updateCaption(true));
    };

    const handleHide = () => {
        dispatch(updateCaption(false));
    };

    return (
        <div
            className={styles.formWrapper}
            onMouseEnter={handleShow}
            onMouseLeave={handleHide}
        >
            <TeacherForm />
        </div>
    );
};

export default TeacherData;
