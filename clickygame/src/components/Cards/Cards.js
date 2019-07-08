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
                        src={props.img}
                        onClick={ () => props.handleClick(props.id) }
                        // onChange={this.handleChangeObj.bind(this)}
                        onMouseDown={ (props.handleChangeObj(props.id))}
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