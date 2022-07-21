import React, { FC } from 'react'
import FadeIn from '../../lib/Animations/FadeIn/FadeIn'
import Hover from '../../lib/Animations/HoverBump/HoverBump'
import ImageShadow from '../../lib/ImageShadow/ImageShadow'
import './ImageLogo.css'

type ImageLogoProps = {
    src: string
    width?: string | number
    height?: string | number
}

const ImageLogo: FC<ImageLogoProps> = props => {
    return (
        <div className='ImageLogo'>
            <Hover>
                <FadeIn>
                    <ImageShadow src={props.src} width={props.width} height={props.height} />
                </FadeIn>
            </Hover>
        </div>
    )
}

export default ImageLogo