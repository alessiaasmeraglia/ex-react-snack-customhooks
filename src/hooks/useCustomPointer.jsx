import { useEffect, useState } from 'react';

function useCustomPointer(pointerContent) {
    const [position, setPosition] = useState({
        x: 0,
        y: 0,
    });

    useEffect(() => {
        function handleMouseMove(event) {
            setPosition({
                x: event.clientX,
                y: event.clientY,
            });
        }

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener(
                'mousemove',
                handleMouseMove
            );
        };
    }, []);

    return (
        <span
            className="custom-pointer"
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
            }}
            aria-hidden="true"
        >
            {pointerContent}
        </span>
    );
}

export default useCustomPointer;