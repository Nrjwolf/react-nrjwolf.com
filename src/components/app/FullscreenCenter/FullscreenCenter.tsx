import React, { FC } from 'react'
import './FullscreenCenter.css'

type FullscreenCenterProps = {
    children?: React.ReactNode
}

const FullscreenCenter: FC<FullscreenCenterProps> = props => {
    return (
        <div className='FullscreenCenter'>
            {props.children}
        </div>
    )
}

export default FullscreenCenter