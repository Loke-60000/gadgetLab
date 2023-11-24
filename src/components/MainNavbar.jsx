import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../style/components/MainNavbar.scoped.scss";

const MainNavbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav>
            <div className="navbar">
                <button onClick={toggleMobileMenu} className={`navbar-toggler ${isMobileMenuOpen ? 'toggled' : ''}`}>
                    <span className="toggler-bar"></span>
                    <span className="toggler-bar"></span>
                    <span className="toggler-bar"></span>
                </button>

                <div id="basic-navbar-nav" className={`navbarCollapse ${isMobileMenuOpen ? 'show' : ''}`}>
                    <ul className='navbarNav'>
                        <li className='navItem'>
                            <Link to="/" className='navLink home'>Home</Link>
                        </li>
                        <li className='navItem'>
                            <Link to="/services" className='navLink'>Services</Link>
                        </li>
                        <li className='navItem'>
                            <Link to="/portfolio" className='navLink'>Portfolio</Link>
                        </li>
                        <li className='navItem'>
                            <Link to="/team" className='navLink'>Our team</Link>
                        </li>
                        <li className='navItem'>
                            <Link to="/contact" className='navLink contact'>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default MainNavbar;
