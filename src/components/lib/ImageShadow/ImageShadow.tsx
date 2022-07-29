import { Image } from '@chakra-ui/react'
import { FC, useEffect, useRef } from 'react'
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
            <Image src={props.src} width={props.width} height={props.height} onLoad={(v) => {
                props.onLoad && props.onLoad()
            }} />
        </span>
    )
}

export default ImageShadow
