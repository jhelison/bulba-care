import React, { useEffect, useState } from "react"
import './DashLogin.css'

import { useHistory } from "react-router"

const DashLogin = (props) => {
    const [name, setName] = useState("")
    const [password, setpassword] = useState("")

    let history = useHistory()

    useEffect(() => {
        localStorage.clear()
    }, [])

    const makeLogin = () => {
        if(!name.trim()){
            window.alert("Nome não preenchido")
            return
        }
        localStorage.setItem('username', name)
        history.push('./dashboard')
    }

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
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                ></input>
                <input
                    className="custom-input mt-10"
                    placeholder="Senha"
                    type="password"
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                ></input>
                <div
                    className="price-card-button bg-blue2 mt-10 d-flex just-content-center align-items-center"
                    onClick={makeLogin}
                >
                    <span className="price-sub">Acessar</span>
                </div>

                <span className="price-sub mt-10">Para demonstração, insira qualquer senha.</span>
            </div>
        </div>
    )
}

export default DashLogin
