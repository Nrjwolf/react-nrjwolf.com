import React, { FC } from 'react'
import { SocialIcon as SocialIconLib } from 'react-social-icons'
import Hover from '../../lib/Animations/Hover/Hover'
import HoverColor from '../../lib/Animations/HoverColor/HoverColor'
import Button from '../../lib/Button/Button'
import './SocialIcon.css'

type SocialIconProps = {
    name: string
    url: string
    color?: string
    width?: number
}

const SocialIcon: FC<SocialIconProps> = props => {
    const {
        name,
        width = 50,
        color = '#fff'
    } = props

    const handleClick = () => {
        if (props.url)
            window.open(props.url, '_blank', 'noopener,noreferrer')
    }

    return (
        <span className='SocialIcon'>
            <Hover>
                <Button onClick={handleClick}>
                    <SocialIconLib network={name} bgColor={color} style={{ height: width, width: width }} />
                </Button>
            </Hover>
        </span>
    )
}

export default SocialIcon