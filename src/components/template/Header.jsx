import React from 'react'
import './Header.css'

const Header = (props) => {
    return (
        <header className="d-flex just-content-space-bet align-items-center">
            <h3>Bulba day care</h3>
            <div className="d-flex just-content-center align-items-center">
                <div className="header-buttons header-button-selected"><h3>Home</h3></div>
                <div className="header-buttons ml-20"><h3>Promoções</h3></div>
                <div className="header-buttons ml-20"><h3>Inscreva-se</h3></div>
            </div>
        </header>
    )
}

export default Header