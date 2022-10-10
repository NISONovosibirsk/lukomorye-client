import { DownloadIcon, StarIcon } from '../../../../assets';
import styles from './SidebarItem.module.scss';

interface Props {
    name: string;
    points: number;
}

const SidebarItem: React.FC<Props> = ({ name, points }) => {
    return (
        <li className={styles.sidebarItem}>
            <p className={styles.name}>{name}</p>
            <div className={styles.results}>
                <div className={styles.info}>
                    <StarIcon className={points === 100 ? styles.orange : styles.points} />
                    <div className={styles.score}>
                        <p
                            className={
                                points === 100
                                    ? `${styles.points} ${styles.orange}`
                                    : styles.points
                            }
                        >
                            {points}
                        </p>
                        <p>/ 100</p>
                    </div>
                </div>
                <div className={styles.certificates}>
                    <DownloadIcon />
                    {points === 100 ? <p>Диплом</p> : <p>Сертификат</p>}
                </div>
            </div>
        </li>
    );
};

export default SidebarItem;
