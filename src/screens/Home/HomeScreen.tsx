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
                    <Footer />
                </>
            )
        }
    }

    // if (isLoading) {
    return (
        <AppBackground>
            <CenterHorizontally>
                <HomeScreenColumn>
                    <Header />
                    {projectsList()}
                </HomeScreenColumn>
            </CenterHorizontally>
        </AppBackground >
    )
    // }

    return (
        <AppBackground>
            <CenterHorizontally>
                <HomeScreenColumn>
                    <Header />
                    <ProjectsList projects={projects} />
                    <Footer />
                </HomeScreenColumn>
            </CenterHorizontally>
        </AppBackground >
    )
}

export default HomeScreen