import React, { FC } from 'react'
import { useSpring, animated } from 'react-spring'

type HoverProps = {
    children: React.ReactNode
}

const Hover: FC<HoverProps> = props => {
    const [isHovered, setIsHovered] = React.useState(false)

    const mouseHover = (value: boolean) => {
        setIsHovered(value)
    }

    const hoverProps = useSpring({
        from: {
            scale: 1,
            y: 0,
        },
        to: {
            scale: isHovered ? 1.05 : 1,
            y: isHovered ? -5 : 0
        },
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