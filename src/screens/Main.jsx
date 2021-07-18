import React from "react"
import "./Main.css"

import TextCard from "../components/TextCard"

import daycare from '../assets/day-care.png'

const Main = (props) => {
    return (
        <div className="main-content d-flex just-content-center align-items-center flex-column">
            <div className="landing-card">
                <h1>Bulba day care</h1>
                <div className="subtitle mt-20">
                    <span>Estamos prontos para lhe atender!</span>
                </div>
                <div>
                    <TextCard className="mt-20" text="23 anos de experiencia" />
                    <TextCard
                        className="mt-20"
                        text="Atendemos de Kantō a Johto"
                    />
                    <TextCard
                        className="mt-20"
                        text="Melhores preços do mercado"
                    />
                </div>
                <img src={daycare} alt="daycare"/>
            </div>

            <div className="d-flex align-items-center just-content-center flex-column message-price-width mt-80">
                <h2>Pronto para começar com a Bulba Day Care?</h2>
                <span className="mt-40">Escolha o melhor valor que combina com você</span>
            </div>

            <div className="mt-40 d-flex just-content-center align-items-center">
                <div className="price-card-s d-flex align-items-center flex-column">
                    <h4 className="mt-20">Bulbassauro</h4>
                    <div className="price-card-img-bg mt-40 d-flex just-content-center align-items-center">
                        <img src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/bulbasaur.png" alt="bulbasaur-color"/>
                    </div>
                    <PriceTag className="mt-20"/>
                </div>
                <div className="price-card-l">

                </div>
                <div className="price-card-s">

                </div>
            </div>
            
        </div>
    )
}

const PriceTag = (props) => {
    return (
        <div className={" " + props.className}>
            <h1>3000</h1>
        </div>
        
    )
}

export default Main
