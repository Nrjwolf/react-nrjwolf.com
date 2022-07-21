import React, { FC } from 'react'
import './Text.css'

type TextProps = {
    children: React.ReactNode
    color?: string
    style?: 'light' | 'regular' | 'bold'
}

const Text: FC<TextProps> = props => {
    let style = 'regular'
    if (props.style) style = props.style
    const className = `font-ubuntu-${style}`
    return (
        <span className={className} style={{ color: props.color }}>
            {props.children}
        </span>
    )
}

export default Text