import { StarIcon } from '../../../../assets';
import styles from './SidebarItem.module.scss';

interface Props {
    name: string;
    points: number;
}

const SidebarItem: React.FC<Props> = ({ name, points }) => {
    return (
        <li className={styles.sidebarItem}>
            <p className={styles.name}>{name}</p>
            <div className={styles.score}>
                <p className={styles.points}>{`${points}/100`}</p>
                <StarIcon />
            </div>
        </li>
    );
};

export default SidebarItem;
