import React, { FC } from 'react'

type ButtonProps = {
    children: React.ReactNode
    onClick: () => void
}

const Button: FC<ButtonProps> = props => {
    const [isHovered, setIsHovered] = React.useState(false)

    const mouseHover = (value: boolean) => {
        setIsHovered(value)
    }

    return (
        <span
            onMouseEnter={() => mouseHover(true)}
            onMouseLeave={() => mouseHover(false)}
            onClick={props.onClick}
            style={{
                cursor: isHovered ? 'pointer' : 'default',
            }}
        >
            {props.children}
        </span>
    )
}

export default Button