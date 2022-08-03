import { Flex, Image, Text } from '@chakra-ui/react'
import React, { FC, useContext, useState } from 'react'
import Hover from '../../lib/Animations/HoverBump/HoverBump'
import Button from '../../lib/Button/Button'
import Shadow from '../../lib/Shadow/Shadow'
import FlipOnClick from '../../lib/Animations/FlipOnClick/FlipOnClick'
import SocialButtons from '../SocialButtons/SocialButtons'
import { AppContext } from '../../../other/AppContext'

type HeaderProps = {
    children?: React.ReactNode,
    onClick?: () => void
}

const Header: FC<HeaderProps> = props => {
    const appContext = useContext(AppContext)
    const fontColor = appContext?.fontColor
    const highlightColor = appContext?.highlightColor

    return (
        <Flex paddingTop={5} alignItems='center' direction={'column'}>
            <Button onClick={() => { props.onClick?.() }}>
                <Hover>
                    <Shadow>
                        <FlipOnClick>
                            <Image src='/images/nrjwolf-logo.png' width={100} />
                        </FlipOnClick>
                    </Shadow>
                </Hover>
            </Button>
            <Text align='center' fontSize={20} fontWeight='600'>IT Developer</Text>
            <SocialButtons color={fontColor} highlightColor={highlightColor} />
        </Flex>
    )
}

export default Header