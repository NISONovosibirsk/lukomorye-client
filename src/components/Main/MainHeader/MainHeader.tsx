import Link from 'next/link';
import { PhoneIcon } from '../../../assets';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { statusSlice } from '../../../store/reducers/statusReducer';
import styles from './MainHeader.module.scss';
import { CSSTransition } from 'react-transition-group';

const MainHeader: React.FC = () => {
    const { menu } = useAppSelector(state => state.statusReducer);
    const { updateMenu } = statusSlice.actions;
    const dispatch = useAppDispatch();

    const handleMenu = () => {
        dispatch(updateMenu(!menu));
    };

    return (
        <header className={styles.header}>
            <div
                className={`${styles.button} ${menu && styles.active}`}
                onClick={handleMenu}
            ></div>
            <div className={styles.rightBlock}>
                <Link href={'/sign-in'}>Вход</Link>
                <div className={styles.phone}>
                    <PhoneIcon />
                    <p>(383) 35 12 75</p>
                </div>
            </div>
            <CSSTransition
                timeout={200}
                classNames={{
                    exitActive: styles.exitActive,
                    enterActive: styles.enterActive,
                }}
                in={menu}
                mountOnEnter
                unmountOnExit
            >
                <ul className={styles.bar}>
                    <Link href={'/'}>О нас</Link>
                    <Link href={'/'}>
                        Игра-конкурс «Золотой ключик» для 1-4 классов
                    </Link>
                    <Link href={'/'}>
                        Игра-конкурс «Лестница успеха» для 5-11 классов
                    </Link>
                    <Link href={'/'}>
                        Игра-конкурс «Лукоморье» для 1-11 классов
                    </Link>
                    <Link href={'/'}>Контакты</Link>
                </ul>
            </CSSTransition>
        </header>
    );
};

export default MainHeader;
