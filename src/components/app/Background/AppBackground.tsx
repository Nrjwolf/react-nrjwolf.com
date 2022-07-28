import React, { FC } from 'react'
import './AppBackground.css'

type AppBackgroundProps = {
    children?: React.ReactNode
}

const AppBackground: FC<AppBackgroundProps> = props => {
    return (
        <div className='Background'>
            {props.children}
        </div>
    )
}

export default AppBackground