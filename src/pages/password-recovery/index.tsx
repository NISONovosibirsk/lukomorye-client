import { ReactElement } from 'react';
import { NextPageWithLayout } from '../_app';
import { AuthorizationLayout, RecoveryForm } from '../../components';
import styles from './PasswordRecovery.module.scss';
import { FlatLogo } from '../../assets';

const PasswordRecovery: NextPageWithLayout = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.recovery}>
                <RecoveryForm />
            </div>
            <FlatLogo className={styles.logo}/>
        </div>
    );
};

PasswordRecovery.getLayout = function getLayout(page: ReactElement) {
    return <AuthorizationLayout>{page}</AuthorizationLayout>;
};

export default PasswordRecovery;
