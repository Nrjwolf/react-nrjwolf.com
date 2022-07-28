import React, { FC } from 'react'
import AppBackground from "../../components/app/Background/Background"

type HomeProps = {
    children?: React.ReactNode
}

const Home: FC<HomeProps> = props => {
    return (
        <AppBackground>
            Lol
        </AppBackground>
    )
}

export default Home