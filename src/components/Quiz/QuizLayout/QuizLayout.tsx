import styles from './QuizLayout.module.scss';
import { UserHeader, UserFooter } from '../../';

interface Props {
    children: React.ReactNode;
}

const QuizLayout: React.FC<Props> = ({ children }) => {
    return (
        <section className={styles.quiz}>
            <UserHeader />
            <div className={styles.content}>
                {children}
            </div>
            <UserFooter />
        </section>
    );
};

export default QuizLayout;
