import Link from 'next/link';
import { ReactElement } from 'react';
import {
    PhoneIcon,
    VerseLogo,
    EarthImage,
    MoonImage,
    SunImage,
    LukmoryeTable,
    ZolotoyTable,
    LestnicaTable,
    ParallaxBackground,
} from '../assets';
import { MainHeader, MainLayout } from '../components';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import useCursor from '../hooks/useCursor';
import { statusSlice } from '../store/reducers/statusReducer';
import styles from './main.module.scss';
import { NextPageWithLayout } from './_app';

const Main: NextPageWithLayout = () => {
    const cursor = useCursor();
    const { menu } = useAppSelector(state => state.statusReducer);
    const { updateMenu } = statusSlice.actions;
    const dispatch = useAppDispatch();

    const handleClose = () => {
        menu && dispatch(updateMenu(false));
    };

    return (
        <div className={styles.app} onClick={handleClose}>
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
                <ParallaxBackground
                    className={styles.background}
                    style={{
                        transform: `translate(-${cursor.x / 120}px, -${
                            cursor.y / 80
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
                        <LukmoryeTable className={styles.lukomorye} />
                    </Link>
                    <Link href={'google.com'}>
                        <ZolotoyTable className={styles.zolotoy} />
                    </Link>
                    <Link href={'google.com'}>
                        <LestnicaTable className={styles.lestnica} />
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
                <p className={styles.caption}>
                    Организатор проектов – Центр образовательных технологий
                    «Лукоморье»
                </p>
            </div>
        </div>
    );
};

Main.getLayout = function getLayout(page: ReactElement) {
    return <MainLayout>{page}</MainLayout>;
};

export default Main;
