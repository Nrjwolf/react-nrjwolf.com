import React, { FC, useContext } from 'react'
import Text from '../../../components/app/Text/Text'
import Hover from '../../../components/lib/Animations/HoverBump/HoverBump'
import Button from '../../../components/lib/Button/Button'
import ImageShadow from '../../../components/lib/ImageShadow/ImageShadow'
import Line from '../../../components/lib/Line/Line'
import AppContext from '../../../context/AppContext'
import { getDirectusImage } from '../../../utils/getDirectusImage'
import { Project } from '../projectsTypes'

type ProjectCardProps = {
    info: Project
}

const imgWidth = 700
const imgHeigth = 200

const ProjectCard: FC<ProjectCardProps> = props => {
    const info = props.info
    const imageUrl = getDirectusImage(info.preview, imgWidth, imgHeigth)

    const onClick = () => {
        console.log(`click`)
    }

    return (
        <div style={{
            // flex: 1,
            // display: 'flex',
            flexDirection: 'column',
            padding: '20px',
        }}>

            <Button onClick={onClick}>
                <Hover scaleTo={1.01} yTo={-1} duration={100}>
                    <ImageShadow src={imageUrl} width='100%' />
                </Hover>
            </Button>

            <Button onClick={onClick}>
                <Text style='bold'>
                    {info.title}
                </Text>
            </Button>

            <Button onClick={onClick}>
                <Text style='light' size={4}>
                    {info.title}
                </Text>
            </Button>

            <Line/>
        </div>
    )
}

export default ProjectCard