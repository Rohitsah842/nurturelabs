import React, { useState } from 'react'
import "./Navbar.css"
function Navbar() {

    return (
        <div className="navbar navbar_mob-v">
            <div className="nameIcon nameIcon_mob-v">
                <span className="menubar menubar_mob-v menubartoggle" ><span class="material-icons ">menu</span></span>
                <img src="https://www.termmonitor.com/images/navMainLogo.svg" alt="icon" />
            </div>
            <div className="NavbarManu NavbarMenu_mob-v">
                <h1>Keyword</h1>
                <div className="searchBar">
                    <input type="text" />
                    <button className="btn">SUBMIT <span class="material-icons icon">arrow_forward</span></button>
                    <img src="https://image.shutterstock.com/image-vector/user-icon-260nw-523867123.jpg" alt="image" className="img" />
                </div>
            </div>
        </div>
    )
}

export default Navbar
