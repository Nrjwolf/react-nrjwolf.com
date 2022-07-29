import React, { FC, useEffect } from 'react'
import AppBackground from "../../components/app/Background/AppBackground"
import CenterHorizontally from '../../components/app/CenterHorizontally/CenterHorizontally'
import FullscreenCenter from '../../components/app/FullscreenCenter/FullscreenCenter'
import { CircleLoading } from '../../components/lib/CircleLoading/CircleLoading'
import appConfig from '../../configs/app.config'
import { get } from '../../utils/request'
import Header from '../Home/Header/Header'
import ProjectCard from './ProjectCard/ProjectCard'
import ProjectsScreenColumn from './ProjectsScreenColumn'
import { Project, Projects } from './projectsTypes'
import Footer from '../../components/app/Footer/Footer'

type ProjectScreenProps = {
    children?: React.ReactNode
}

const ProjectsList = (projects: Project[]) => {
    const projectsList = projects.filter(x => x.status == 'published').map((project, i) => {
        return (
            <React.Fragment key={i}>
                <ProjectCard info={project} />
            </React.Fragment>
        )
    })
    return (
        <div style={{ marginTop: 10 }}>
            {projectsList}
        </div>
    )
}

const ProjectScreen: FC<ProjectScreenProps> = props => {
    const [isLoading, setIsLoading] = React.useState(true)
    const [isFadeInProjects, setIsFadeInProjects] = React.useState(false)
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
                <ProjectsScreenColumn>
                    <Header />
                    {ProjectsList(projects)}
                    <Footer />
                </ProjectsScreenColumn>
            </CenterHorizontally>
        </AppBackground >
    )
}

export default ProjectScreen