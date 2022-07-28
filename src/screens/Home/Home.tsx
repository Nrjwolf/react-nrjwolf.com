import React, { FC } from 'react'
import AppBackground from "../../components/app/Background/AppBackground"
import FullscreenCenter from '../../components/app/FullscreenCenter/FullscreenCenter'
import Header from './Header/Header'

type HomeProps = {
    children?: React.ReactNode
}

const Home: FC<HomeProps> = props => {
    return (
        <AppBackground>
            <FullscreenCenter>
                <Header />
            </FullscreenCenter >
        </AppBackground>
    )
}

export default Home