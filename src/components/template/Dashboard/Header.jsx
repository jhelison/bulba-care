import React from 'react'
import './Header.css'

const Header = (props) => {
    return (
        <header className="dash-header d-flex just-content-space-bet align-items-center">
            <h3>Bem vindo, Usuario</h3>
            <h3>Bulba day care</h3>
            <div className="exit-button d-flex just-content-center align-items-center">
                <h3 className="color-red">Sair</h3>
            </div>
        </header>
    )
}

export default Header