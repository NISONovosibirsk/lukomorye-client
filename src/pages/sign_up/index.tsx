import { ReactElement } from 'react';
import { AuthorizationLayout, SignUpForm } from '../../components';
import { NextPageWithLayout } from '../_app';
import { FullLogo } from '../../assets';
import styles from './signUp.module.scss';

const SignUp: NextPageWithLayout = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.signUp}>
                <SignUpForm />
            </div>
            <FullLogo />
        </div>
    );
};

SignUp.getLayout = function getLayout(page: ReactElement) {
    return <AuthorizationLayout>{page}</AuthorizationLayout>;
};

export default SignUp;
