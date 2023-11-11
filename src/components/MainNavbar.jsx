import React from 'react';
import { Link } from 'react-router-dom';
import "../style/components/MainNavbar.scoped.scss";

const MainNavbar = () => {
    return (
        <nav>
            <div id="basic-navbar-nav" className='navbarCollapse'>
                <ul className='navbarNav'>
                    <li className='navItem'>
                        <Link to="/" className='navLink'>
                            <span className='home'>Home</span>
                        </Link>
                    </li>
                    <li className='navItem'>
                        <Link to="/services" className='navLink'>
                            <span>Services</span>
                        </Link>
                    </li>
                    <li className='navItem'>
                        <Link to="/team" className='navLink'>
                            <span>Our team</span>
                        </Link>
                    </li>
                    <li className='navItem'>
                        <Link to="/contact" className='navLink'>
                            <span className='contact'>Contact</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default MainNavbar;
