import React from "react"
import "./Content.css"

const Content = (props) => {
    return (
        <div className="dash-content d-flex flex-column" style={{alignItems:"flex-start"}}>
            <h2>{props.title}</h2>
            <hr className="solid mt-40"></hr>
            <div className="props-content mt-40">{props.children}</div>
        </div>
    )
}

export default Content
