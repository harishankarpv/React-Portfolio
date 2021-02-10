import React from 'react'
import { NavLink } from 'react-router-dom'
import avatar from '../img/avatar1.svg'


function Navbar() {
    return (
        <div className="Navbar">
           
            <nav className ="nav">
                <div className="profile">
                    <img src={avatar} alt=""/>
                </div>

                <ul className="nav-items">
                    <li className="nav-item">
                        <NavLink to="/" exact activeClassName="active">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" exact activeClassName="active">
                            About
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/projects" exact activeClassName="active">
                            Projects
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contactme" exact activeClassName="active">
                            Contact Me
                        </NavLink>
                    </li>
                </ul>

                <footer className="footer">
                    <p>
                        @2021 Harishankar P V
                    </p>
                </footer>
                
            </nav>
            
            
        </div>
    )
}

export default Navbar
