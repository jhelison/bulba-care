import React, { useEffect } from 'react'

import Header from '../components/template/Dashboard/Header'
import Aside from '../components/template/Dashboard/Aside'
import Products from './Dashboard/Products/Products'
import Customers from './Dashboard/Customers'
import { Route, Switch, useHistory, useRouteMatch } from 'react-router-dom'


const Dashboard = (props) => {
    let { path, url } = useRouteMatch()
    let history = useHistory()

    useEffect(() => {
        const username = localStorage.getItem('username')
        if(!username){
            history.push('/login')
        }
    }, [])

    return (
        <React.Fragment>
            <Header username={localStorage.getItem('username')}/>
            <Aside />
            <Switch>
                <Route exact path={`${path}`} component={Customers}/>
                <Route path={`${path}/products`} component={Products}/>
            </Switch>
        </React.Fragment>
    )
}

export default Dashboard