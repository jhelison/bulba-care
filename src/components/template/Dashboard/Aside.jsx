import React, {useEffect} from "react"
import "./Aside.css"

import { CgPokemon } from "react-icons/cg"
import { FiUser } from "react-icons/fi"
import { FiBox } from "react-icons/fi"
import { useHistory, useLocation } from "react-router-dom"

const Aside = (props) => {
    const history = useHistory()
    const location = useLocation()

    useEffect(() => {
        removeAllSelect()
        updateSelectByUrl()
    }, [location])

    const removeAllSelect = () => {
        let elements = document.getElementsByClassName("dash-aside-button")
        for (var i = 0; i < elements.length; i++) {
            elements.item(i).classList.remove("dash-aside-button-selected")
        }
    }

    const updateSelectByUrl = () => {
        if (location.pathname == "/dashboard") {
            const ele = document.getElementById("aside-home")
            ele.classList.toggle("dash-aside-button-selected")
        } else if (location.pathname.startsWith("/dashboard/products")) {
            const ele = document.getElementById("aside-products")
            ele.classList.toggle("dash-aside-button-selected")
        }
    }

    return (
        <div className="dash-aside">
            <div className="dash-logo d-flex just-content-center align-items-center">
                <CgPokemon size={60} />
            </div>

            <div className="dash-aside-buttons-container d-flex flex-column align-items-center just-content-space-bet">
                <div>
                    <div className="d-flex just-content-center align-items-center flex-column mt-40" onClick={() => history.push('/dashboard')}>
                        <div className="dash-aside-button dash-aside-button-selected d-flex just-content-center align-items-center" id="aside-home">
                            <FiUser size={50} />
                        </div>
                        <span className="aside-b-label mt-5">Clientes</span>
                    </div>

                    <div className="d-flex just-content-center align-items-center flex-column mt-20"  onClick={() => history.push('/dashboard/products')}>
                        <div className="dash-aside-button d-flex just-content-center align-items-center" id="aside-products">
                            <FiBox size={50} />
                        </div>
                        <span className="aside-b-label mt-5">Produtos</span>
                    </div>
                </div>

                <div className="user-button d-flex just-content-center align-items-center mb-20">
                    <img
                        src="https://avatars.dicebear.com/api/identicon/:seed.svg"
                        alt="user-img"
                    />
                </div>
            </div>
        </div>
    )
}

export default Aside
