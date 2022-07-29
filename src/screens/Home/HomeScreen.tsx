import React, { FC, useEffect } from 'react'
import AppBackground from "../../components/app/Background/AppBackground"
import CenterHorizontally from '../../components/app/CenterHorizontally/CenterHorizontally'
import FullscreenCenter from '../../components/app/FullscreenCenter/FullscreenCenter'
import { CircleLoading } from '../../components/lib/CircleLoading/CircleLoading'
import appConfig from '../../configs/app.config'
import { get } from '../../utils/request'
import Header from './Header/Header'
import HomeScreenColumn from './HomeScreenColumn'
import { Project, Projects } from './Projects/projectsTypes'
import Footer from '../../components/app/Footer/Footer'
import ProjectsList from './Projects/ProjectList/ProjectList'

type HomeScreenProps = {
    children?: React.ReactNode
}

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

    if (isLoading) {
        return (
            <AppBackground>
                <FullscreenCenter>
                    <CircleLoading />
                </FullscreenCenter>
            </AppBackground>
        )
    }

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