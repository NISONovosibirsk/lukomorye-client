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
                        transform: `translate(${cursor.x / 55}px, ${
                            cursor.y / 55
                        }px)`,
                    }}
                />
                <div
                    className={styles.earth}
                    style={{
                        transform: `translate(${cursor.x / 80}px, ${
                            cursor.y / 80
                        }px)`,
                    }}
                >
                    <EarthImage />
                </div>
                <MoonImage
                    className={styles.moon}
                    style={{
                        transform: `translate(${cursor.x / 60}px, ${
                            cursor.y / 60
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
