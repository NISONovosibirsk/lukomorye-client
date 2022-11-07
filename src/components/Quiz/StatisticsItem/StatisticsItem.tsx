import { ReactNode } from 'react';
import styles from './StatisticsItem.module.scss'

interface Props {
    children: ReactNode;
}

const StatisticsItem: React.FC<Props> = ({children}) => {

    return (
        <li className={styles.wrapper}>
            {children}
        </li>
    )
}

export default StatisticsItem;