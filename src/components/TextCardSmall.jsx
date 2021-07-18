import React from 'react'
import './TextCard.css'

import { CgPokemon } from 'react-icons/cg'

const TextCardSmall = (props) => {
    return (
        <div className={"d-flex align-items-center " + props.className}>
            <div className="text-card-small d-flex just-content-center align-items-center">
                <CgPokemon size={30}/>
            </div>
            <span className={"ml-10 text-card-s-text " + (props.textDarker ? "darker-text " : "")}>{props.text}</span>
        </div>
    )
}

export default TextCardSmall