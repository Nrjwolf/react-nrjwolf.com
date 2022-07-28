import React, { FC } from 'react'

type LineProps = {
}

const Line: FC<LineProps> = props => {
    return (
        <div style={{ width: '100%', height: '0.5px', background: '#4a4c50' }} />
    )
}

export default Line