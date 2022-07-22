import React, { FC, useState } from 'react'
import { useSpring, animated } from 'react-spring'
import Button from '../../Button/Button'

type FlipOnClickProps = {
    children?: React.ReactNode
}

const FlipOnClick: FC<FlipOnClickProps> = props => {
    const [clicked, setClicked] = useState(false)

    const spring = useSpring({
        transform: clicked ? 'rotateY(180deg)' : 'rotateY(0deg)',
        config: {
            duration: 250
        }
    })

    return (
        <Button onClick={() => setClicked(!clicked)}>
            <animated.div style={{ ...spring }}>
                {props.children}
            </animated.div>
        </Button>
    )
}

export default FlipOnClick