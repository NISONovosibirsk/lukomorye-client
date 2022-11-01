import Link from 'next/link';
import { ReactElement } from 'react';
import {
    PhoneIcon,
    VerseLogo,
    EarthImage,
    MoonImage,
    SunImage,
} from '../assets';
import { MainHeader, MainLayout } from '../components';
import useCursor from '../hooks/useCursor';
import styles from './main.module.scss';
import { NextPageWithLayout } from './_app';

const Main: NextPageWithLayout = () => {
    const cursor = useCursor();

    return (
        <div className={styles.app}>
            <MainHeader />
            <div className={styles.content}>
                <div className={styles.verse}>
                    <VerseLogo />
                    <p>(из поэмы «Руслан и Людмила» А.С. Пушкина)</p>
                </div>
                <SunImage
                    className={styles.sun}
                    style={{
                        transform: `translate(-${cursor.x / 80}px, ${
                            cursor.y / 70
                        }px)`,
                    }}
                />
                <div
                    className={styles.earth}
                    style={{
                        transform: `translate(${cursor.x / 100}px, ${
                            cursor.y / 70
                        }px)`,
                    }}
                >
                    <EarthImage />
                    <Link href={'google.com'}>
                        <a className={styles.lukomorye}></a>
                    </Link>
                    <Link href={'google.com'}>
                        <a className={styles.zolotoy}></a>
                    </Link>
                    <Link href={'google.com'}>
                        <a className={styles.lestnica}></a>
                    </Link>
                </div>
                <MoonImage
                    className={styles.moon}
                    style={{
                        transform: `translate(${cursor.x / 90}px, -${
                            cursor.y / 80
                        }px)`,
                    }}
                />
            </div>
        </div>
    );
};

Main.getLayout = function getLayout(page: ReactElement) {
    return <MainLayout>{page}</MainLayout>;
};

export default Main;
