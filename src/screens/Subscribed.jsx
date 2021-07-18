import React from "react"
import "./Subscribed.css"

const Subscribed = (props) => {
    return (
        <div className="subscribed-content d-flex align-items-center just-content-center flex-column">
            <img
                src="https://www.pikpng.com/pngl/b/220-2209451_ivysaur-gen-ivysaur-gen-1-sprite-clipart.png"
                alt="bulbasaur-gen1"
            />
            <div className="d-flex align-items-center just-content-center flex-column" style={{zIndex:2}}>
                <h1>Obrigado,</h1>
                <h1>Jhelison!</h1>
                <div className="subtitle mt-20">
                    <span>
                        Não se procupe, você recebera no email
                        jhelisong@gmail.com as melhores promoções do mercado!
                    </span>
                </div>
                <div className="price-card-button bg-blue2 mt-20 d-flex just-content-center align-items-center">
                    <span className="price-sub">Voltar</span>
                </div>
            </div>
        </div>
    )
}

export default Subscribed
