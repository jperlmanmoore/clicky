import React from "react";
import "./style.css";

const Cards = (props) => {
    return (
        <div className="card">
            <div className="img-container">
                <img 
                    alt={props.description} 
                    src={props.image}
                />
            </div>
            <div className="content">
                <div>
                    <h3>{props.title}</h3>
                </div>

            </div>
        </div>

    )
};

export default Cards