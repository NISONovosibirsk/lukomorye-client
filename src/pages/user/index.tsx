import { ReactElement } from 'react';
import { UserFooter, UserHeader, UserSidebar } from '../../components';
import UserLayout from '../../components/User/UserLayout/UserLayout';
import type { NextPageWithLayout } from '../_app';
import Link from 'next/link';

const User: NextPageWithLayout = () => {
    return (
        <>
            <p>ХОМЕ</p>
            <Link href={'user/settings'}>Настройке</Link>
        </>
    );
};

User.getLayout = function getLayout(page: ReactElement) {
    return <UserLayout>{page}</UserLayout>;
};

export default User;
