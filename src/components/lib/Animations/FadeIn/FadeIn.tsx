import React, { FC } from 'react'
import { useSpring, animated } from 'react-spring'

type FadeInProps = {
    children: React.ReactNode
    duration?: number
}

const FadeIn: FC<FadeInProps> = props => {
    const { duration = 100 } = props

    const fadeProps = useSpring({
        from: { opacity: 0.05 },
        to: { opacity: 1 },
        config: { duration: duration },
    })

    return (
        <animated.div style={{ ...fadeProps }}>
            {props.children}
        </animated.div>
    )
}

export default FadeIn