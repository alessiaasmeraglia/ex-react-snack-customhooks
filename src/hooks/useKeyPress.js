import { useEffect, useState } from 'react';

function useKeyPress(targetKey) {
    const [isKeyPressed, setIsKeyPressed] = useState(false);

    useEffect(() => {
        function handleKeyDown(event) {
            if (event.key === targetKey) {
                setIsKeyPressed(true);
            }
        }

        function handleKeyUp(event) {
            if (event.key === targetKey) {
                setIsKeyPressed(false);
            }
        }

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        return () => {
            window.removeEventListener(
                'keydown',
                handleKeyDown
            );

            window.removeEventListener(
                'keyup',
                handleKeyUp
            );
        };
    }, [targetKey]);

    return isKeyPressed;
}

export default useKeyPress;