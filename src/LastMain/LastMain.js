import React from 'react'
import "./LastMain.css"
function LastMain(props) {
    return (
        <div>
            <img className="foto" src={props.picture} alt={props.picture_name} />
            <h2>{props.desc}</h2>
            <p>{props.description}</p>
        </div>
    )
}

export default LastMain
