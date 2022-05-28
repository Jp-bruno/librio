import { useState, useEffect } from "react";

export default function useScreenSize() {
    const [windowSize, setWindowSize] = useState(0);

    useEffect(() => {
        console.log(window.innerWidth);
        setWindowSize(window.innerWidth);
        window.addEventListener('resize', () => setWindowSize(window.innerWidth));
    }, [])

    return windowSize
}