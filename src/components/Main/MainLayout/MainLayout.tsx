import Link from 'next/link';
import { ReactNode } from 'react';
import { Footer } from '../..';
import { FooterLogo, MailIcon, PhoneIcon, PlanetIcon } from '../../../assets';
import styles from './MainLayout.module.scss';

interface Props {
    children: ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
    return (
        <section className={styles.main}>
            {children}
            <Footer />
        </section>
    );
};

export default MainLayout;
