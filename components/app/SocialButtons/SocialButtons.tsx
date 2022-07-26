import { Flex } from '@chakra-ui/react'
import React, { FC } from 'react'
import SocialIcon from '../SocialIcon/SocialIcon'

type SocialButtonsProps = {
    children?: React.ReactNode
    color?: string
    highlightColor?: string
}

const SocialButtons: FC<SocialButtonsProps> = props => {
    const socialIconsWidth = 30
    const color = props.color
    const highlightColor = props.highlightColor

    return (
        <Flex>
            <SocialIcon url='https://github.com/nrjwolf' name='github' width={socialIconsWidth} color={color} highlightColor={highlightColor} />
            <SocialIcon url='https://t.me/nrjwolf' name='telegram' width={socialIconsWidth} color={color} highlightColor={highlightColor} />
            <SocialIcon url='mailto:nrjwolf@gmail.com' name='email' width={socialIconsWidth} color={color} highlightColor={highlightColor} />
            <SocialIcon url='https://www.linkedin.com/in/nrjwolf/' name='linkedin' width={socialIconsWidth} color={color} highlightColor={highlightColor} />
        </Flex>
    )
}

export default SocialButtons