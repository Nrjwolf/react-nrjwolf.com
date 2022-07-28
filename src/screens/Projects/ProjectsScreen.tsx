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
import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import Column from '../../components/app/Column/Column'
import { ROUTES } from '../../utils/Navigation/Navigation'

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

    const projectsList = projects.filter(x => x.status == 'published').map(project => {
        return (
            <ProjectCard info={project} />
        )
    })

    console.log(projects)

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

                    <Header navigateOnClick={false} />
                    <div style={{ marginTop: 10 }}>
                        {projectsList}
                    </div>

                </ProjectsScreenColumn>

            </CenterHorizontally>
        </AppBackground >
    )
}

export default ProjectScreen