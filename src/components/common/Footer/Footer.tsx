import Link from 'next/link';
import { FooterLogo, MailIcon, PhoneIcon, PlanetIcon } from '../../../assets';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {

    return (
        <div className={styles.footer}>
                    <FooterLogo />
                    <ul className={styles.links}>
                        <Link href={'/'}>Главная</Link>
                        <Link href={'/'}>
                            Игра-конкурс «Золотой ключик» для 1-4 классов
                        </Link>
                        <Link href={'/'}>
                            Игра-конкурс «Лестница успеха» для 5-11 классов
                        </Link>
                        <Link href={'/'}>
                            Игра-конкурс «Лукоморье» для 1-11 классов
                        </Link>
                    </ul>
                    <ul className={styles.contacts}>
                        <li>
                            <PhoneIcon />
                            <p>(383) 308 35 16</p>
                        </li>
                        <li>
                            <MailIcon />
                            <p>mail@info.ru</p>
                        </li>
                        <li>
                            <PlanetIcon />
                            <p>luka@nios.ru</p>
                        </li>
                    </ul>
        </div>
    )
}

export default Footer;