import { ReactElement } from 'react';
import { NextPageWithLayout } from '../_app';
import { AuthorizationLayout, NewPasswordForm } from '../../components';
import styles from './SetNewPassword.module.scss';
import { FlatLogo } from '../../assets';

const SetNewPassword: NextPageWithLayout = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.newPassword}>
                <NewPasswordForm />
            </div>
            <FlatLogo className={styles.logo}/>
        </div>
    );
};

SetNewPassword.getLayout = function getLayout(page: ReactElement) {
    return <AuthorizationLayout>{page}</AuthorizationLayout>;
};

export default SetNewPassword;
