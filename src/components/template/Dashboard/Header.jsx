import React from 'react'
import { useHistory } from 'react-router-dom'
import './Header.css'

const Header = (props) => {
    let history = useHistory()


    return (
        <div className="dashboard-header d-flex just-content-space-bet align-items-center">
            <h3>{"Bem vindo, " + props.username}</h3>
            <h3>Bulba day care</h3>
            <div className="exit-button d-flex just-content-center align-items-center" onClick={() => history.push('/login')}>
                <h3 className="color-red">Sair</h3>
            </div>
        </div>
    )
}

export default Header