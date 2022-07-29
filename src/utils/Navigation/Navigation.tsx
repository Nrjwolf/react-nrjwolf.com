import React, { FC } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom"
import Page404 from '../../components/app/Page404/Page404'
import HomeScreen from '../../screens/Home/HomeScreen'

export const ROUTES = {
    HOME: '/',
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
                    <Route path={ROUTES.HOME} element={<HomeScreen />} />
                    <Route path="*" element={<Page404 />} />
                </Routes>

            </Router>
        </div >
    )
}

export default Navigation