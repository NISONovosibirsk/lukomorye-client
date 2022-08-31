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
                <p>{`${points}/100`}</p>
            </div>
        </li>
    );
};

export default SidebarItem;
