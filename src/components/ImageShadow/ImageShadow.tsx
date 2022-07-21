import { FC } from 'react'
import './ImageShadow.css'

type ImageShadowProps = {
    src: string
    width?: string | number
    height?: string | number
}

const ImageShadow: FC<ImageShadowProps> = props => {
    return (
        <span className='shadowed' >
            <img src={props.src} width={props.width} height={props.height} />
        </span>
    )
}

export default ImageShadow
