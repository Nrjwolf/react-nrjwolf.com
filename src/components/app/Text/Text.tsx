import React, { FC } from 'react'
import './Text.css'

type TextProps = {
    children: React.ReactNode
    color?: string
    style?: 'light' | 'regular' | 'bold'
    size?: number
}

const Text: FC<TextProps> = props => {
    const [isHovered, setIsHovered] = React.useState(false)
    const size = props.size || 10

    let style = 'regular'
    if (props.style) style = props.style
    const className = `font-ubuntu-${style}`
    return (
        <div style={{ fontSize: `calc(${size}px + 1vmin)` }} >
            <span className={className} style={{ ...props }}>
                {props.children}
            </span>
        </div>
    )
}

export default Text