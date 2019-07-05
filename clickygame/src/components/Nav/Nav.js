import React from "react";
import "./style.css";

const Nav = (props) => {
    return (
        <nav>
            <ul>
                <li>
                    {/* title link */}
                    <a href='https://github.com/jperlmanmoore/clicky'>{props.title}</a>
                </li>
                <li>
                    {/* win or lose */}
                </li>
                <li>
                    {/* current score */}
                </li>
                <li>
                    {/* high score */}
                </li>

            </ul>
        </nav>
    );
};

export default Nav