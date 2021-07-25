import React from "react"
import './DashLogin.css'

const DashLogin = (props) => {
    return (
        <div className="subscribed-content d-flex align-items-center just-content-center flex-column">
            <img
                src="https://www.pikpng.com/pngl/b/220-2209451_ivysaur-gen-ivysaur-gen-1-sprite-clipart.png"
                alt="bulbasaur-gen1"
            />

            <div  className="bg-white d-flex align-items-center just-content-center flex-column login-content" style={{zIndex:2}}>
                <h2 className="mt-10">Dashboard de vendas</h2>
                <input
                    className="custom-input mt-10"
                    placeholder="Usuário"
                    maxLength={30}
                ></input>
                <input
                    className="custom-input mt-10"
                    placeholder="Senha"
                    type="password"
                ></input>
                <div
                    className="price-card-button bg-blue2 mt-10 d-flex just-content-center align-items-center"
                >
                    <span className="price-sub">Acessar</span>
                </div>

                <span className="price-sub mt-10">Para demonstração, insira qualquer senha.</span>
            </div>
        </div>
    )
}

export default DashLogin
