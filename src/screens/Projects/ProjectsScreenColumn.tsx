import React, { FC } from 'react'

type ProjectsScreenColumnProps = {
    children?: React.ReactNode
}

const ProjectsScreenColumn: FC<ProjectsScreenColumnProps> = props => {
    return (
        <div style={{
            display: 'flex',
            width: '45%',
            minHeight: '100vh',
            flexDirection: 'column',
        }}>
            {props.children}
        </div>
    )
}

export default ProjectsScreenColumn