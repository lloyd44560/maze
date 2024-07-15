import React from "react";
import {Link } from 'react-router-dom';

const MainMenu = () =>{



    return(
        <div className="main-menu">
            <h1> Maze Game </h1>
            <div className="menu-buttons">
                <Link to="/play">
                    <button className="menu-button">Play</button>
                </Link>
                <Link to="/instructions">
                    <button className="menu-button">Instructions</button>
                </Link>
                <Link to="/about">
                    <button className="menu-button">About</button>
                </Link>

            </div>
        </div>



    )
}

export default MainMenu;