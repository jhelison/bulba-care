import React from 'react'
import { HashRouter } from "react-router-dom"
import "./App.css"

import Routes from './Routes'
import DashLogin from './screens/DashLogin'

import Header from './components/template/Dashboard/Header'
import Aside from './components/template/Dashboard/Aside'
import Content from './components/template/Dashboard/Content'
import Customers from './screens/Dashboard/Customers'

function App() {
    return (
        <HashRouter>
            <Header />
            <Aside />
            <Customers />
            {/* <DashLogin /> */}
            {/* <Routes /> */}
        </HashRouter>
    )
}

export default App;
