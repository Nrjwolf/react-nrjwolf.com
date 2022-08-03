import { AspectRatio, Text } from '@chakra-ui/react'
import React, { FC } from 'react'

type YoutubeVideoProps = {
    children?: React.ReactNode,
    maxWidth?: number,
    id: string
}

const YoutubeVideo: FC<YoutubeVideoProps> = props => {
    const { maxWidth = 800, id } = props
    return (
        <AspectRatio maxW={maxWidth} ratio={16 / 10} marginTop={2} marginBottom={2}>
            <iframe
                src={`https://www.youtube.com/embed/${props.id}`}
                allowFullScreen
            />
        </AspectRatio>
    )
}

export default YoutubeVideo