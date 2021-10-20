import React from 'react'
import "./FirstMain.css"
function FirstMain(props) {
    return (
        <div>
            <div className="image__first">
                <img className="image" src={props.img} alt={props.image} />
                <h3>{props.name}</h3>
            </div>
        </div>
    )
}

export default FirstMain
