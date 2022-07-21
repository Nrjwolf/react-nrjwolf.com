import React, { FC } from 'react'
import { SocialIcon as SocialIconLib } from 'react-social-icons'
import Hover from '../../lib/Animations/HoverBump/HoverBump'
import Button from '../../lib/Button/Button'
import './SocialIcon.css'
import { useSpring, animated } from 'react-spring'

type SocialIconProps = {
    name: string
    url: string
    color?: string
    width?: number
}

const SocialIcon: FC<SocialIconProps> = props => {
    const { name, width = 50, color = '#fff' } = props
    const [isHovered, setIsHovered] = React.useState(false)
    const [animatedColor, setAnimatedColor] = React.useState(color)

    const handleClick = () => {
        if (props.url)
            window.open(props.url, '_blank', 'noopener,noreferrer')
    }

    useSpring({
        color: isHovered ? '#fff' : color,
        config: { duration: 60 },
        onChange: (p) => {
            setAnimatedColor(p.value.color)
        }
    })

    return (
        <div className='SocialIcon'>
            <Hover onHovered={(v) => setIsHovered(v)}>
                <Button onClick={handleClick}>
                    <SocialIconLib network={name} bgColor={animatedColor} style={{ height: width, width: width }} />
                </Button>
            </Hover>
        </div >
    )
}

export default SocialIcon