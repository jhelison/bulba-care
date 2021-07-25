import React from 'react'
import './Header.css'

import { useHistory } from 'react-router'

const Header = (props) => {
    let history = useHistory()

    return (
        <header className="d-flex just-content-space-bet align-items-center">
            <h3>Bulba day care</h3>
            <div className="d-flex just-content-center align-items-center">
                <div onClick={() => history.push('/login')} className="header-buttons ml-20"><h3>Sou vendedor</h3></div>
            </div>
        </header>
    )
}

export default Header