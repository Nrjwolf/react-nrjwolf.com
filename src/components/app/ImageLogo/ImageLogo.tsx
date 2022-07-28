import React, { FC } from 'react'
import FadeIn from '../../lib/Animations/FadeIn/FadeIn'
import Hover from '../../lib/Animations/HoverBump/HoverBump'
import Button from '../../lib/Button/Button'
import ImageShadow from '../../lib/ImageShadow/ImageShadow'

import './ImageLogo.css'
import FlipOnClick from '../../lib/Animations/FlipOnClick/FlipOnClick'

type ImageLogoProps = {
    src: string
    width?: string | number
    height?: string | number
    onClick?: () => void
}

const ImageLogo: FC<ImageLogoProps> = props => {

    const onClick = () => {
        if (props.onClick) {
            props.onClick()
        }
    }

    return (
        <FlipOnClick>
            <Button onClick={() => onClick()}>
                <div className='ImageLogo' >
                    <Hover>
                        <ImageShadow src={props.src} width={props.width} height={props.height} />
                    </Hover>
                </div>
            </Button>
        </FlipOnClick>
    )
}

export default ImageLogo