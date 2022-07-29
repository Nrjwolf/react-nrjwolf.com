import React, { FC } from 'react'
import { Skeleton } from '@chakra-ui/react'
import { getDirectusImage } from '../../../../utils/getDirectusImage'
import Button from '../../../../components/lib/Button/Button'
import ImageShadow from '../../../../components/lib/ImageShadow/ImageShadow'
import Text from '../../../../components/app/Text/Text'
import Hover from '../../../../components/lib/Animations/HoverBump/HoverBump'
import Line from '../../../../components/lib/Line/Line'
import { Project } from '../projectsTypes'

type ProjectCardProps = {
    info: Project
}

const imgWidth = 700
const imgHeigth = 200

const ProjectCard: FC<ProjectCardProps> = props => {
    const info = props.info
    const imageUrl = getDirectusImage(info.preview, imgWidth, imgHeigth)
    const [isImgLoaded, setIsImgLoaded] = React.useState(false)

    const onClick = () => {
        window.open(info.url, '_blank', 'noopener,noreferrer')
    }

    const onImageLoaded = () => {
        setIsImgLoaded(true)
    }

    return (
        <div style={{
            flexDirection: 'column',
            padding: '20px',
        }}>

            <Skeleton isLoaded={isImgLoaded} height={imgHeigth}>
                <Button onClick={onClick}>
                    <Hover scaleTo={1.01} yTo={-1} duration={100}>
                        <ImageShadow src={imageUrl} width='100%' onLoad={onImageLoaded} />
                    </Hover>
                </Button>
            </Skeleton>

            <Button onClick={onClick}>
                <Text style='bold' size={14}>
                    {info.title}
                </Text>
            </Button>

            <Button onClick={onClick}>
                <div style={{ marginTop: '10px', marginBottom: '5px' }}>
                    <Text style='light' size={8}>
                        {info.description}
                    </Text>
                </div>
            </Button>

            <Line />
        </div>
    )
}

export default ProjectCard