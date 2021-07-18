import React from 'react'
import './Footer.css'

import {AiFillGithub} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillMail} from 'react-icons/ai'
import {FaFigma} from 'react-icons/fa'

const Footer = (props) => {
    return (
        <footer>
            <div className="d-flex">
                <a className="social-container d-flex just-content-center align-items-center"
                href="https://github.com/jhelison/bulba-care/" target="_blank" rel="noopener noreferrer">
                    <AiFillGithub size={50}/>
                </a>
                <a className="social-container d-flex just-content-center align-items-center ml-20"
                href="https://www.linkedin.com/in/jhelison-uchoa-421ba6120/" target="_blank" rel="noopener noreferrer">
                    <AiFillLinkedin size={50}/>
                </a>
                <a className="social-container d-flex just-content-center align-items-center ml-20"
                href="https://www.figma.com/file/2kaMSBSiuaHP7OZeZzr98d/Landing-Page?node-id=3%3A137" target="_blank" rel="noopener noreferrer">
                    <FaFigma size={50}/>
                </a>
                <a className="social-container d-flex just-content-center align-items-center ml-20"
                href = "mailto: jhelisong@gmail.com">
                    <AiFillMail size={50}/>
                </a>
            </div>
            <h1>Desenvolvido por: Jhelison Gabriel Lima Uchoa</h1>
        </footer>
    )
}

export default Footer