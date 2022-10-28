import Link from 'next/link';
import { ReactElement } from 'react';
import { MainLogo, PhoneIcon, VerseLogo } from '../assets';
import { MainHeader, MainLayout } from '../components';
import styles from './main.module.scss';
import { NextPageWithLayout } from './_app';

const Main: NextPageWithLayout = () => {
    return (
        <div className={styles.app}>
            <MainHeader />
            <div className={styles.content}>
                <MainLogo />
                <div className={styles.verse}>
                    <VerseLogo />
                    <p>(из поэмы «Руслан и Людмила» А.С. Пушкина)</p>
                </div>
            </div>
        </div>
    );
};

Main.getLayout = function getLayout(page: ReactElement) {
    return <MainLayout>{page}</MainLayout>;
};

export default Main;
