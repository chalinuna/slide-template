import React, { useState } from "react";
import { ReactComponent as Hamburger } from '../../assets/icons/menu.svg'
import { ReactComponent as Brand } from '../../assets/logo/logo.svg'
import "../../Component/myNavbar/mynavbar.css"
import { HashLink } from 'react-router-hash-link';

function MyNavbar() {

    const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }



    return(
      <div>
          <nav className="navbar">
          <div className="container">
            <div className="logo">
              <Brand />
            </div>            
            <div className="menu-icon" onClick={handleShowNavbar}>
              <Hamburger />
            </div>
            <div className={`nav-elements  ${showNavbar && 'active'}`}>
              <ul>
                <li>
                <HashLink smooth to="#">Home</HashLink>
                </li>
                <li>
                  <HashLink smooth to="#skills">Skills</HashLink>
                </li>
                <li>
                <HashLink smooth to="#projects">Projects</HashLink>
                </li>
                <li>
                <HashLink smooth to="#about">Profile</HashLink>
                </li>
                <li>
                <HashLink smooth to="#contact">Contact</HashLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>   

        

    </div>
    )
}

export default MyNavbar;