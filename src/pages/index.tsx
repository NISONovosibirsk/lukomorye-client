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
            {/* <Link href={'/quiz'}>Викторина</Link> */}
            <Link href={'/sign_in'}>Вход</Link>
        </div>
    );
};

export default Index;
