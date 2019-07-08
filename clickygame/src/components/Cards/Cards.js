import React from "react"
import "./style.css"

function Cards(props) {
    return (
        <div className="cardContainter">
            <div className="card">
                <div 
                className="img-container" 
                >
                    <img
                        alt={props.alt}
                        id={props.id}
                        src={props.img}
                        onClick={ () => {console.log("img onclick: " + JSON.stringify(props)); props.handleClick(props.keyx);} }
                    />
                </div>
                <div className="content">
                    <h3>{props.title}</h3>
                </div>
            </div>
        </div>
    )
}

export default Cards