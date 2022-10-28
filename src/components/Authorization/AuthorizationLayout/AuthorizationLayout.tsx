import { ReactNode } from 'react';
import { Footer } from '../../../components';
import styles from './AuthorizationLayout.module.scss';

interface Props {
    children: ReactNode;
}

const AuthorizationLayout: React.FC<Props> = ({ children }) => {
    return (
        <section className={styles.authorization}>
            {children}
            <Footer />
        </section>
    );
};

export default AuthorizationLayout;
