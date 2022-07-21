import React, { FC } from 'react'
import FadeIn from '../../lib/Animations/FadeIn/FadeIn'
import Hover from '../../lib/Animations/Hover/Hover'
import ImageShadow from '../../lib/ImageShadow/ImageShadow'

type ImageLogoProps = {
    src: string
    width?: string | number
    height?: string | number
}

const ImageLogo: FC<ImageLogoProps> = props => {
    return (
        <div>
            <Hover>
                <FadeIn>
                    <ImageShadow src={props.src} width={props.width} height={props.height} />
                </FadeIn>
            </Hover>
        </div>
    )
}

export default ImageLogo