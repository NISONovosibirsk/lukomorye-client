import { ReactElement } from 'react';
import type { NextPageWithLayout } from '../_app';
import { QuizCard, UserLayout } from '../../components';
import { QUIZ_LIST } from '../../assets/mock';
import styles from './index.module.scss'

const User: NextPageWithLayout = () => {

    return (
        <div className={styles.home}>
            <h2>Рекомендуемые викторины</h2>
            <ul>
                {QUIZ_LIST.map((quiz, index) => (
                    <QuizCard key={index} quiz={quiz}/>
                ))}
            </ul>
        </div>
    );
};

User.getLayout = function getLayout(page: ReactElement) {
    return <UserLayout>{page}</UserLayout>;
};

export default User;
