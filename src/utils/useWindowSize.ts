import { useState, useEffect } from "react"

export type windowSize = {
    width: number | undefined,
    height: number | undefined,
}

export const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState<windowSize>({
        width: undefined,
        height: undefined,
    })

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            })
        }

        window.addEventListener("resize", handleResize)
        handleResize()
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return windowSize
}