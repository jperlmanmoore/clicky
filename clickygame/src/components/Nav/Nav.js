import React from "react";
import "./style.css";

const Nav = props => {
    return (
        <div className="navbar">
            <p className="score"> Score: {props.currentScore} </p> 
            
            <p className="highScore"> High Score: {props.highScore} </p>
            <p>{props.youWin}</p>
            
        </div>
    );
};

export default Nav