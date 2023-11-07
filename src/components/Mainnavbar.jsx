import React from 'react';
import { Link } from 'react-router-dom';


const MainNavbar = () => {
    return (
        <nav className="main-navbar">
            <div id="basic-navbar-nav" className="navbar-collapse">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">
                            <span className="english-text">Home</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/services">
                            <span className="english-text">Services</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/team">
                            <span className="english-text">Our team</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">
                            <span className="english-text">Contact</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default MainNavbar;
