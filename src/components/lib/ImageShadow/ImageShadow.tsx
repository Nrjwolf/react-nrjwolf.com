import { FC } from 'react'
import './ImageShadow.css'

type ImageShadowProps = {
    src: string
    width?: string | number
    height?: string | number
    onLoad?: () => void
}

const ImageShadow: FC<ImageShadowProps> = props => {
    return (
        <span className='shadowed' >
            <img src={props.src} width={props.width} height={props.height} onLoad={props.onLoad}/>
        </span>
    )
}

export default ImageShadow
