import React from "react"
import "./style.css"

const Cards = props => {
    return (
        <div className="cardContainter">
            <div className="card">
                <div
                    className="img-container"
                >
                    <img
                        alt={props.alt}
                        style={{ backgroundImage: `url(${props.img})` }} />
                </div>
                <div className="content">
                    <h3>{props.title}</h3>
                </div>
            </div>
        </div>
    )
}

export default Cards