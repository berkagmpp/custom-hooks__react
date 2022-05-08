import { useState, useEffect } from "react";

// custom-hook must start with 'use' in the functioning name
const useCounter = (forwards = true) => {
    const [counter, setCounter] = useState(0);          // this useState() will be tighed with useCounter 

    useEffect(() => {
        const interval = setInterval(() => {
            if (forwards) {
                setCounter((prevCounter) => prevCounter + 1);
            } else {
                setCounter((prevCounter) => prevCounter - 1);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [forwards]);

    return counter;
};

export default useCounter;