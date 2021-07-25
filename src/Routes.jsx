import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"


import Subscribed from "./screens/Subscribed"

import Header from "./components/template/Header"
import Main from "./screens/Main"
import Footer from "./components/template/Footer"
import DashLogin from "./screens/DashLogin"
import Dashboard from "./screens/Dashboard"

const Routes = (props) => {
    return (
        <Switch>
            <Route exact path="/" component={MainComponent} />
            <Route path="/subscribed" component={Subscribed} />
            <Route path="/login" component={DashLogin} />
            <Route path="/dashboard" component={Dashboard} />
            <Redirect from="*" to="/" />
        </Switch>
    )
}

const MainComponent = () => {
    return (
        <div className="App">
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

export default Routes