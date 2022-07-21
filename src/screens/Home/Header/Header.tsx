import React, { FC, useContext } from 'react'
import ImageLogo from '../../../components/app/ImageLogo/ImageLogo'
import Text from "../../../components/app/Text/Text"
import { AppContext } from '../../../context/AppContext'
import SocialButtons from './SocialButtons/SocialButtons'

type HeaderProps = {
    children?: React.ReactNode
}

const Header: FC<HeaderProps> = props => {
    const appContext = useContext(AppContext)
    const fontColor = appContext?.fontColor

    return (
        <>
            <ImageLogo src='nrjwolf-logo.png' width={100} />

            <div style={{ padding: '5px' }}>
                <Text style='bold' color={fontColor}>
                    IT Developer
                </Text>
            </div>

            <SocialButtons color={fontColor} />
        </>
    )
}

export default Header