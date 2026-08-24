import { useState } from 'react';

function useSwitch() {
    const [isOn, setIsOn] = useState(false);

    function toggle() {
        setIsOn((currentValue) => !currentValue);
    }

    return [isOn, toggle];
}

export default useSwitch;