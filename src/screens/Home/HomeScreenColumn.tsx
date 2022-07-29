import React, { FC } from 'react'
import { useWindowSize } from '../../utils/useWindowSize'

type HomeScreenColumnProps = {
    children?: React.ReactNode
}

const maxWidth = 760

const HomeScreenColumn: FC<HomeScreenColumnProps> = props => {
    const windowSize = useWindowSize()

    let width = windowSize.width ?? maxWidth
    if (width > maxWidth) width = maxWidth

    return (
        <div style={{
            display: 'flex',
            width: `${width}px`,
            minHeight: '100vh',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '50px',
        }}>
            {props.children}
        </div>
    )
}

export default HomeScreenColumn