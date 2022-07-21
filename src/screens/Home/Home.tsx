import React, { FC } from 'react'
import AppBackground from "../../components/app/Background/Background"
import Header from './Header/Header'

type HomeProps = {
    children?: React.ReactNode
}

const Home: FC<HomeProps> = props => {
    return (
        <AppBackground>
            <Header />
        </AppBackground>
    )
}

export default Home