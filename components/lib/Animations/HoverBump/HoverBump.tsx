import React, { FC } from 'react'
import { useSpring, animated } from 'react-spring'
import { BrowserView, MobileView } from 'react-device-detect'

type HoverProps = {
    children: React.ReactNode,
    onHovered?: (isHovered: boolean) => void,
    scaleTo?: number,
    yTo?: number,
    duration?: number,
}

const Hover: FC<HoverProps> = props => {
    const {
        scaleTo = 1.05,
        yTo = -5,
        duration = 150
    } = props
    const [isHovered, setIsHovered] = React.useState(false)

    const mouseHover = (value: boolean) => {
        setIsHovered(value)
        props.onHovered?.(value)
    }

    const hoverProps = useSpring({
        scale: isHovered ? scaleTo : 1,
        y: isHovered ? yTo : 0,
        config: { duration: duration },
    })

    return (
        <>
            <BrowserView>
                <span onMouseEnter={() => mouseHover(true)} onMouseLeave={() => mouseHover(false)}>
                    <animated.div style={{ ...hoverProps }}>
                        {props.children}
                    </animated.div>
                </span>
            </BrowserView>
            <MobileView>
                {props.children}
            </MobileView>
        </>
    )
}

export default Hover