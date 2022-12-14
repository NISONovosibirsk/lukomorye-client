import { ReactElement } from 'react';
import { AuthImage } from '../../assets';
import { SignInForm } from '../../components';
import AuthorizationLayout from '../../components/Authorization/AuthorizationLayout/AuthorizationLayout';
import { NextPageWithLayout } from '../_app';
import styles from './signIn.module.scss';

const SignIn: NextPageWithLayout = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.signIn}>
                <p>Авторизуйтесь, чтобы начать заниматься</p>
                <SignInForm />
            </div>
            <AuthImage />
        </div>
    );
};

SignIn.getLayout = function getLayout(page: ReactElement) {
    return <AuthorizationLayout>{page}</AuthorizationLayout>;
};

export default SignIn;
