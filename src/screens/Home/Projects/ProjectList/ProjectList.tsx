import React, { FC } from "react"
import ProjectCard from "../ProjectCard/ProjectCard"
import { Project } from "../projectsTypes"

type ProjectsListProps = {
    children?: React.ReactNode,
    projects: Project[]
}

const ProjectsList: FC<ProjectsListProps> = props => {
    const { projects } = props

    const projectsList = projects.filter(x => x.status == 'published').map((project, i) => {
        return (
            <React.Fragment key={i}>
                <ProjectCard info={project} index={i} />
            </React.Fragment>
        )
    })
    return (
        <>
            {projectsList}
        </>
    )
}

export default ProjectsList