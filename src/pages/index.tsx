import Link from "next/link";

const Index = () => {
    return (
        <div className='app'>
            <Link href={'/user'}>Пользователь</Link>
        </div>
    );
};

export default Index;
