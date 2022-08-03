import React, { FC, useContext } from 'react'
import { Skeleton, Box, Image, Text } from '@chakra-ui/react'
import Button from '../../../../components/lib/Button/Button'
import Hover from '../../../../components/lib/Animations/HoverBump/HoverBump'
import Line from '../../../../components/lib/Line/Line'
import { Project } from '../projectsTypes'
import { useSpring, animated } from 'react-spring'
import Shadow from '../../../../components/lib/Shadow/Shadow'
import { AppContext } from '../../../../other/AppContext'

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

            <Box maxW={imgWidth} marginBottom={0}>
                <Button onClick={onClick}>
                    <Shadow>
                        <Box maxW={imgWidth} overflow='hidden' maxH={imgHeigth} display='flex' justifyContent='center' alignItems='center'>
                            <Hover scaleTo={1.01}>
                                <Image src={info.preview_image} onLoad={onImageLoaded} />
                            </Hover>
                        </Box>
                    </Shadow>
                </Button>

                <Text fontWeight={800} fontSize={[20, 20, 30]}>
                    {info.title}
                </Text>

                <Text fontWeight={300} fontSize={[15, 15, 20]}>
                    {info.description}
                </Text>

                <Line />
            </Box>

        </animated.div >
    )
}

export default ProjectCard