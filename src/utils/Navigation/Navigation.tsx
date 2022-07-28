import React, { FC } from 'react'
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom"
import Home from '../../screens/Home/Home'
import ProjectsScreen from '../../screens/Projects/ProjectsScreen'

export const ROUTES = {
    HOME: '/',
    PROJECTS: '/projects',
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
                    <Route path={ROUTES.HOME} element={<Home />} />
                    <Route path={ROUTES.PROJECTS} element={<ProjectsScreen />} />
                </Routes>

            </Router>
        </div >
    )
}

export default Navigation