import React, { FC, useEffect } from 'react'
import AppBackground from "../../components/app/Background/AppBackground"
import CenterHorizontally from '../../components/app/CenterHorizontally/CenterHorizontally'
import { get } from '../../utils/request'
import Header from './Header/Header'
import HomeScreenColumn from './HomeScreenColumn'
import { Project, Projects } from './Projects/projectsTypes'
import Footer from '../../components/app/Footer/Footer'
import ProjectsList from './Projects/ProjectList/ProjectList'
import { useSpring, animated } from 'react-spring'
import appConfig from '../../configs/app.config'
import { Badge, Box, Center, Flex, Grid, GridItem, Image, Square, Stack, StackDivider, Text, VStack } from '@chakra-ui/react'
import ImageShadow from '../../components/lib/ImageShadow/ImageShadow'

type HomeScreenProps = {
    children?: React.ReactNode
}

const TIME = {
    FADE_IN_PROJECTS: 1000,
} as const

const HomeScreen: FC<HomeScreenProps> = props => {
    const [isLoading, setIsLoading] = React.useState(true)
    const [projects, setProjects] = React.useState<Project[]>([])

    useEffect(() => {
        const init = async () => {
            const projects: Projects = await get(appConfig.requests.getProjects)
            setProjects(projects.nrjwolf_com_projects)
            setIsLoading(false)
        }

        init()
    }, [])

    const projectsList = () => {
        if (isLoading) {
            return <></>
        }
        else {
            return (
                <>
                    <ProjectsList projects={projects} />

                </>
            )
        }
    }

    return (
        <AppBackground>
            <Center>
                <Flex color='white'>
                    <Box flex='1' minHeight={'100vh'} p={6}>
                        <Box marginTop={5} marginBottom={5}>
                            <Header />
                        </Box>
                        {projectsList()}
                        <Footer />
                    </Box>
                </Flex>
            </Center>
        </AppBackground >
    )
}

export default HomeScreen