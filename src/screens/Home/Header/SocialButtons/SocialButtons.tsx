import React, { FC } from 'react'
import SocialIcon from '../../../../components/app/SocialIcon/SocialIcon'
import './SocialButtons.css'

type SocialButtonsProps = {
    children?: React.ReactNode
    color?: string
}

const SocialButtons: FC<SocialButtonsProps> = props => {
    const socialIconsWidth = 30
    const color = props.color

    return (
        <div className='SocialButtons'>
            <SocialIcon url='https://github.com/nrjwolf' name='github' width={socialIconsWidth} color={color} />
            <SocialIcon url='https://t.me/nrjwolf' name='telegram' width={socialIconsWidth} color={color} />
            <SocialIcon url='mailto:nrjwolf@gmail.com' name='email' width={socialIconsWidth} color={color} />
            <SocialIcon url='https://www.linkedin.com/in/nrjwolf/' name='linkedin' width={socialIconsWidth} color={color} />
        </div>
    )
}

export default SocialButtons