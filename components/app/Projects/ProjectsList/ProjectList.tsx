import { Box } from "@chakra-ui/react"
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
            <Box marginTop={10} marginBottom={10}>
                <React.Fragment key={i}>
                    <ProjectCard info={project} index={i} />
                </React.Fragment>
            </Box>
        )
    })
    return (
        <>
            {projectsList}
        </>
    )
}

export default ProjectsList