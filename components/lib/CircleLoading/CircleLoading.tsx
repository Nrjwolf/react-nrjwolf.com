import React from 'react'
import ReactLoading from 'react-loading'

interface CircleLoadingProps {
    height?: string
}

export const CircleLoading: React.FC<CircleLoadingProps> = ({ height = '60vh' }) => {
    return (
        <div style={{ display: 'flex', width: '100%', height: height, justifyContent: 'center', alignItems: 'center' }}>
            <ReactLoading type={'spin'} color={'#ffffff'} height={50} width={50} />
        </div>
    )
}