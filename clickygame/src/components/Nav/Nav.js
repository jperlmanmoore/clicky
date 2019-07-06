import React from "react";
import "./style.css";

const Nav = props => {
    return (
        <div className="navbar">
            <p><span>Score: {props.score}</span> || <span> High Score: {props.highScore}</span></p>
        </div>
    );
};

export default Nav