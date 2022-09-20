import Link from "next/link";

const Index = () => {
    return (
        <div className='app'>
            <Link href={'/user'}>Пользователь</Link>
            <Link href={'/quiz'}>Викторина</Link>
        </div>
    );
};

export default Index;
