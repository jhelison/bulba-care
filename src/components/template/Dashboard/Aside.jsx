import React from "react"
import "./Aside.css"

import { CgPokemon } from "react-icons/cg"
import { FiUser } from "react-icons/fi"
import { FiBox } from "react-icons/fi"

const Aside = (props) => {
    return (
        <div className="dash-aside">
            <div className="dash-logo d-flex just-content-center align-items-center">
                <CgPokemon size={60} />
            </div>

            <div className="dash-aside-buttons-container d-flex flex-column align-items-center just-content-space-bet">
                <div>
                    <div className="d-flex just-content-center align-items-center flex-column mt-40">
                        <div className="dash-aside-button dash-aside-button-selected d-flex just-content-center align-items-center">
                            <FiUser size={50} />
                        </div>
                        <span className="aside-b-label mt-5">Clientes</span>
                    </div>

                    <div className="d-flex just-content-center align-items-center flex-column mt-20">
                        <div className="dash-aside-button d-flex just-content-center align-items-center">
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
