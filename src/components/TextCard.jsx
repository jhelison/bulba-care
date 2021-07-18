import React from 'react'
import './TextCard.css'

import { CgPokemon } from 'react-icons/cg'

const TextCard = (props) => {
    return (
        <div className={"text-card d-flex align-items-center " + props.className}>
            <div className="text-card-icon-box d-flex just-content-center align-items-center">
                <CgPokemon size={60}/>
            </div>
            <span className="ml-10">{props.text}</span>
        </div>
    )
}

export default TextCard