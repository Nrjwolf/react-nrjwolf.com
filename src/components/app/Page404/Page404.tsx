import React, { FC, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../../utils/Navigation/Navigation'
import AppBackground from '../Background/AppBackground'
import FullscreenCenter from '../FullscreenCenter/FullscreenCenter'
import Text from '../Text/Text'

type Page404Props = {

}

const Page404: FC<Page404Props> = props => {
    const navigation = useNavigate()
    useEffect(() => {
        navigation(ROUTES.HOME)
    }, [])

    return (
        <AppBackground>
            <FullscreenCenter>
                <Text>404</Text>
            </FullscreenCenter >
        </AppBackground>
    )
}

export default Page404
