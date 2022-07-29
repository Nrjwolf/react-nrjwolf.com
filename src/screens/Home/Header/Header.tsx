import React, { FC, useContext, useState } from 'react'
import ImageLogo from '../../../components/app/ImageLogo/ImageLogo'
import Text from "../../../components/app/Text/Text"
import { AppContext } from '../../../context/AppContext'
import SocialButtons from './SocialButtons/SocialButtons'
import { useNavigate } from 'react-router-dom'
import FadeIn from '../../../components/lib/Animations/FadeIn/FadeIn'
import { useSpring, animated } from 'react-spring'
import delay from '../../../utils/delay'
import { ROUTES } from '../../../utils/Navigation/Navigation'
import CenterHorizontally from '../../../components/app/CenterHorizontally/CenterHorizontally'
import Column from '../../../components/app/Column/Column'

type HeaderProps = {
    children?: React.ReactNode,
}

const TIMING = {
    FADE_IN_LOGO: 1000,
    FADE_OUT_ON_CLICK: 250,
    NAVIGATE_TO_PROJECTS_DELAY: 260,
}

const Header: FC<HeaderProps> = props => {
    const navigation = useNavigate()
    const [isClickedOnLogo, setIsClickedOnLogo] = useState(false)
    const appContext = useContext(AppContext)
    const fontColor = appContext?.fontColor
    const highlightColor = appContext?.highlightColor

    const animationFadeOutProps = useSpring({
        opacity: isClickedOnLogo ? 0 : 1,
        config: { duration: TIMING.FADE_OUT_ON_CLICK },
    })


    return (
        <>

            <ImageLogo src='images/nrjwolf-logo.png' width={100} />

            <animated.div style={animationFadeOutProps}>

                <div style={{ padding: '10px' }}>
                    <CenterHorizontally>
                        <Text style='bold' color={fontColor}>
                            {`IT Developer`}
                        </Text>
                    </CenterHorizontally>
                </div>

                <SocialButtons color={fontColor} highlightColor={highlightColor} />

            </animated.div>
        </>
    )
}

export default Header