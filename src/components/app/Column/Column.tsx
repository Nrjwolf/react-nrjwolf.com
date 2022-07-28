import React, { FC } from 'react'
import './Column.css'

type ColumnProps = {
    children?: React.ReactNode
}

const Column: FC<ColumnProps> = props => {
    return (
        <div className='Column'>
            {props.children}
        </div>
    )
}

export default Column