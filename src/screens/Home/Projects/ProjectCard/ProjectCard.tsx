import React, { FC, useContext } from 'react'
import { Skeleton, Flex, Spacer, Center, Square, Box, Grid, GridItem, Image } from '@chakra-ui/react'
import { getDirectusImage } from '../../../../utils/getDirectusImage'
import Button from '../../../../components/lib/Button/Button'
import ImageShadow from '../../../../components/lib/ImageShadow/ImageShadow'
import Text from '../../../../components/app/Text/Text'
import Hover from '../../../../components/lib/Animations/HoverBump/HoverBump'
import Line from '../../../../components/lib/Line/Line'
import { Project } from '../projectsTypes'
import { useSpring, animated } from 'react-spring'
import { AppContext } from '../../../../context/AppContext'

type ProjectCardProps = {
    info: Project,
    index: number,
}

const imgWidth = 700
const imgHeigth = 200
const delayFadeInTime = 250
const fadeInTime = 150
const fadeInTimeImage = 1000

const ProjectCard: FC<ProjectCardProps> = props => {
    const appContext = useContext(AppContext)
    const fontColor = appContext?.fontColor
    const highlightColor = appContext?.highlightColor

    const info = props.info
    const imageUrl = getDirectusImage(info.preview, imgWidth, imgHeigth)
    const [isImgLoaded, setIsImgLoaded] = React.useState(false)

    const onClick = () => {
        window.open(info.url, '_blank', 'noopener,noreferrer')
    }

    const onImageLoaded = () => {
        setIsImgLoaded(true)
    }

    const appearAnimationProps = useSpring({
        from: { opacity: 0, x: 0 },
        to: { opacity: 1, x: 0 },
        config: {
            duration: fadeInTime,
            tension: 400,    // How much tension is on the spring
            mass: 2,         // The mass of the spring
            velocity: 5      // The initial speed of the movement
        },
        delay: props.index * delayFadeInTime,
    })

    return (
        <animated.div style={{ ...appearAnimationProps }}>

            <Box maxW={imgWidth} marginBottom={5}>
                <Button onClick={onClick}>
                    <Hover scaleTo={1.01}>
                        <Skeleton isLoaded={isImgLoaded}>
                            <ImageShadow src={imageUrl} onLoad={onImageLoaded} />
                        </Skeleton>
                    </Hover>
                    <Text style='bold' size={14} color={fontColor}>
                        {info.title}
                    </Text>
                    <Text style='light' size={8} color={fontColor}>
                        {info.description}
                    </Text>
                </Button>
                <Line />
            </Box>

        </animated.div>
    )
}

export default ProjectCard