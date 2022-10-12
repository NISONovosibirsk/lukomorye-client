import Link from 'next/link';

const Index = () => {
    return (
        <div
            className='app'
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '3vh',
                marginLeft: '3vw',
                marginTop: '3vh',
                
            }}
        >
            <Link href={'/user'}>Пользователь</Link>
            <Link href={'/sign_in'}>Вход</Link>
            <Link href={'/sign_up'}>Регистрация</Link>
            <Link href={'/password-recovery'}>Восстановление пароля</Link>
            <Link href={'/set-new-password'}>Задать новый пароль</Link>
        </div>
    );
};

export default Index;
