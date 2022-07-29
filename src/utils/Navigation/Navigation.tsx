import React, { FC } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom"
import Page404 from '../../components/app/Page404/Page404'
import ProjectsScreen from '../../screens/Projects/ProjectsScreen'

export const ROUTES = {
    HOME: '/',
    PROJECTS: '/',
}

type NavigationProps = {
    children?: React.ReactNode
}

const Navigation: FC<NavigationProps> = props => {
    return (
        <div>
            <Router>
                {props.children}
                <Routes>
                    <Route path={ROUTES.PROJECTS} element={<ProjectsScreen />} />
                    <Route path="*" element={<Page404 />} />
                </Routes>

            </Router>
        </div >
    )
}

export default Navigation