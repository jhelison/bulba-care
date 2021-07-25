import React from 'react'
import './Content.css'

const Content = (props) => {
    return (
        <div className="dash-content">
            <h2>{props.title}</h2>
            <hr className="solid mt-40"></hr>
            {props.content}
        </div>
    )
}

export default Content