import React, { FC } from 'react'
import { useSpring, animated } from 'react-spring'

type HoverProps = {
    children: React.ReactNode,
    onHovered?: (isHovered: boolean) => void,
}

const Hover: FC<HoverProps> = props => {
    const [isHovered, setIsHovered] = React.useState(false)

    const mouseHover = (value: boolean) => {
        setIsHovered(value)
        props.onHovered?.(value)
    }

    const hoverProps = useSpring({
        scale: isHovered ? 1.05 : 1,
        y: isHovered ? -5 : 0,
        config: { duration: 150 },
    })

    return (
        <span onMouseEnter={() => mouseHover(true)} onMouseLeave={() => mouseHover(false)}>
            <animated.div style={{ ...hoverProps }}>
                {props.children}
            </animated.div>
        </span>
    )
}

export default Hover