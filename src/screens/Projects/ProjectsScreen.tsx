import React, { FC, useEffect } from 'react'
import AppBackground from "../../components/app/Background/AppBackground"
import CenterHorizontally from '../../components/app/CenterHorizontally/CenterHorizontally'
import FullscreenCenter from '../../components/app/FullscreenCenter/FullscreenCenter'
import { CircleLoading } from '../../components/lib/CircleLoading/CircleLoading'
import appConfig from '../../configs/app.config'
import { getDirectusImage } from '../../utils/getDirectusImage'
import { get } from '../../utils/request'
import Header from '../Home/Header/Header'
import ProjectCard from './ProjectCard/ProjectCard'
import ProjectsScreenColumn from './ProjectsScreenColumn'
import { Project, Projects } from './projectsTypes'

type ProjectScreenProps = {
    children?: React.ReactNode
}

const ProjectScreen: FC<ProjectScreenProps> = props => {
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

    const projectsList = projects.map(project => <ProjectCard info={project} />)

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

                    {/* <Header /> */}

                    {projectsList}
                    {/* <img style={{}} src={getDirectusImage(projects[1].preview, 600)} alt="" /> */}
                    {/* <img style={{flex: 1, width: '100%', height: '50px'}} src={getDirectusImage(projects[0].preview, 600)} alt="" /> */}
                    {/* <img style={{flex: 1}} src={getDirectusImage(projects[1].preview, 600)} alt="" /> */}



                    {/* Hi my name is */}
                </ProjectsScreenColumn>
            </CenterHorizontally>
        </AppBackground>
    )
}

export default ProjectScreen