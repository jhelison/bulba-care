import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"


import Subscribed from "./screens/Subscribed"

import Header from "./components/template/Header"
import Main from "./screens/Main"
import Footer from "./components/template/Footer"

const Routes = (props) => {
    return (
        <Switch>
            <Route exact path="/" component={MainComponent} />
            <Route path="/subscribed" component={Subscribed} />
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