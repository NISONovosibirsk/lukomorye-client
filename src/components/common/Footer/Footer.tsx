import { ReactNode } from 'react';
import styles from './Footer.module.scss';

interface Props {
    children?: ReactNode
}

const Footer: React.FC<Props> = ({children}) => {

    return (
        <div className={styles.footer}>
            {children}
        </div>
    )
}

export default Footer;