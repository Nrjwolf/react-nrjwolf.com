import React, { FC } from 'react'
import './CenterHorizontally.css'

type CenterHorizontallyProps = {
    children?: React.ReactNode
}

const CenterHorizontally: FC<CenterHorizontallyProps> = props => {
    return (
        <div className='CenterHorizontally'>
            {props.children}
        </div>
    )
}

export default CenterHorizontally