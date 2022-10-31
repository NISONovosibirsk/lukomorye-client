import { useEffect, useState } from 'react';

const useCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updatePosition = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };
        document.addEventListener('mousemove', updatePosition);

        return () => {
            document.removeEventListener('mousemove', updatePosition);
        };
    }, []);

    return position;
};

export default useCursor;
