import React from "react"
import "./Main.css"

import TextCard from "../components/TextCard"
import TextCardSmall from "../components/TextCardSmall"

import daycare from "../assets/day-care.png"
import money from "../assets/money.svg"

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
                <img src={daycare} alt="daycare" />
            </div>

            <div className="d-flex align-items-center just-content-center flex-column message-price-width mt-80">
                <h2>Pronto para começar com a Bulba Day Care?</h2>
                <span className="mt-40">
                    Escolha o melhor valor que combina com você
                </span>
            </div>

            {/* Price cards */}
            <div className="mt-40 d-flex just-content-center align-items-center">
                {/* prince-card-1 */}
                <div className="price-card-s d-flex align-items-center flex-column">
                    <h4 className="mt-20">Bulbassauro</h4>

                    <div className="price-card-img-bg bg-gradient mt-20 d-flex just-content-center align-items-center">
                        <img
                            src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/bulbasaur.png"
                            alt="bulbasaur-color"
                        />
                    </div>
                    <PriceTag className="mt-20" price={3200} />

                    <div>
                        <TextCardSmall
                            className="mt-20"
                            small
                            text="Garante 150.000 de experiencia"
                        />
                        <TextCardSmall
                            className="mt-20"
                            small
                            text="30% de chance de breeding"
                        />
                        <TextCardSmall
                            className="mt-20"
                            small
                            text="Media de 3 ivs por status"
                        />
                    </div>

                    <div className="price-card-button bg-blue2 mt-20 d-flex just-content-center align-items-center">
                        <span className="price-sub">Escolher plano</span>
                    </div>
                </div>

                {/* prince-card-2 */}
                <div className="price-card-l d-flex align-items-center flex-column">
                    <h4 className="mt-20">Ivysaur</h4>

                    <div className="price-card-img-bg bg-white mt-40 d-flex just-content-center align-items-center">
                        <img
                            src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/ivysaur.png"
                            alt="bulbasaur-color"
                        />
                    </div>
                    <PriceTag className="mt-20" price={4500} />

                    <div>
                        <TextCardSmall
                            className="mt-20"
                            textDarker
                            small
                            text="Garante 250.000 de experiencia "
                        />
                        <TextCardSmall
                            className="mt-20"
                            textDarker
                            small
                            text="50% de chance de breeding"
                        />
                        <TextCardSmall
                            className="mt-20"
                            textDarker
                            small
                            text="Media de 4 ivs por status"
                        />
                    </div>

                    <div className="price-card-button bg-white mt-20 d-flex just-content-center align-items-center">
                        <span className="price-sub">Escolher plano</span>
                    </div>
                </div>

                {/* prince-card-3 */}
                <div className="price-card-s d-flex align-items-center flex-column">
                    <h4 className="mt-20">Venusaur</h4>

                    <div className="price-card-img-bg bg-gradient mt-20 d-flex just-content-center align-items-center">
                        <img
                            src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/venusaur.png"
                            alt="bulbasaur-color"
                        />
                    </div>
                    <PriceTag className="mt-20" price={6000} />

                    <div>
                        <TextCardSmall
                            className="mt-20"
                            small
                            text="Garante 300.000 de experiencia "
                        />
                        <TextCardSmall
                            className="mt-20"
                            small
                            text="50% de chance de breeding"
                        />
                        <TextCardSmall
                            className="mt-20"
                            small
                            text="Media de 4 ivs por status"
                        />
                    </div>

                    <div className="price-card-button bg-blue2 mt-20 d-flex just-content-center align-items-center">
                        <span className="price-sub">Escolher plano</span>
                    </div>
                </div>
            </div>

            <div className="subscribe-container bg-white d-flex align-items-center flex-column">
                <img
                    src="https://art.pixilart.com/cfc34f3d47feafb.png"
                    alt="bulbasaur-gen1"
                />
                <h2 className="mt-80">Se inscreva!</h2>
                <div className="subtitle mt-10">
                    <span>
                        Não perca nenhuma novidade e promoção!
                    </span>
                </div>
                <input className="custom-input mt-10" placeholder="Nome"></input>
                <input className="custom-input mt-10" placeholder="Email"></input>
                <div className="price-card-button bg-blue2 mt-10 d-flex just-content-center align-items-center">
                    <span className="price-sub">Enviar</span>
                </div>
                
            </div>
        </div>
    )
}

const PriceTag = (props) => {
    return (
        <div className={"price-tag d-flex " + props.className}>
            <img src={money} alt="price-tag" />
            <div>
                <span className=" price-title">{props.price}</span>
                <span className="ml-10 price-sub">/ mês</span>
            </div>
        </div>
    )
}

export default Main
