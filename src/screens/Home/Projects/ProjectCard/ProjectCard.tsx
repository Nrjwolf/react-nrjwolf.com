import React, { FC } from 'react'
import { Skeleton } from '@chakra-ui/react'
import { getDirectusImage } from '../../../../utils/getDirectusImage'
import Button from '../../../../components/lib/Button/Button'
import ImageShadow from '../../../../components/lib/ImageShadow/ImageShadow'
import Text from '../../../../components/app/Text/Text'
import Hover from '../../../../components/lib/Animations/HoverBump/HoverBump'
import Line from '../../../../components/lib/Line/Line'
import { Project } from '../projectsTypes'
import { useSpring, animated } from 'react-spring'

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
        to: { opacity: 1, x: -10 },
        config: {
            duration: fadeInTime,
            tension: 400,    // How much tension is on the spring
            mass: 2,         // The mass of the spring
            velocity: 5      // The initial speed of the movement
        },
        delay: props.index * delayFadeInTime,
    })

    const fadeInImageAfterLoaded = useSpring({
        opacity: isImgLoaded ? 1 : 0,
        config: { duration: fadeInTimeImage },
    })

    return (
        <animated.div style={{ ...appearAnimationProps }}>
            <div style={{
                flexDirection: 'column',
                padding: '20px',
            }}>

                <Skeleton isLoaded={isImgLoaded} height={imgHeigth} style={{ opacity: isImgLoaded ? 1 : 0.1 }} fadeDuration={0}>
                    <Button onClick={onClick}>
                        <Hover scaleTo={1.01} yTo={-1} duration={100}>

                            <animated.div style={{ ...fadeInImageAfterLoaded }}>
                                <ImageShadow src={imageUrl} width='100%' onLoad={onImageLoaded} />
                            </animated.div>

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
        </animated.div>
    )
}

export default ProjectCard