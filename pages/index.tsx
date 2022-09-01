import Link from "next/link";

const Index = () => {
    return (
        <div className='app'>
            <Link href={'/user'}>Пользовватель</Link>
        </div>
    );
};

export default Index;
