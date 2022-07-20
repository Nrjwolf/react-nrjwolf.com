import React, { FC } from 'react'
import './Background.css'

type AppBackgroundProps = {
    children: React.ReactNode
}

const AppBackground: FC<AppBackgroundProps> = props => {
    return (
        <div className='Background'>
            {props.children}
        </div>
    )
}

export default AppBackground