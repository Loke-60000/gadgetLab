import React from 'react';
import { Link } from 'react-router-dom';
import StyleMainNavBar from "../style/MainNavbar.module.css";

const MainNavbar = () => {
    return (
        <nav className={StyleMainNavBar.mainNavbar}>
            <div id="basic-navbar-nav" className={StyleMainNavBar.navbarCollapse}>
                <ul className={StyleMainNavBar.navbarNav}>
                    <li className={StyleMainNavBar.navItem}>
                        <Link className={StyleMainNavBar.navLink} to="/">
                            <span className={StyleMainNavBar.englishText}>Home</span>
                        </Link>
                    </li>
                    <li className={StyleMainNavBar.navItem}>
                        <Link className={StyleMainNavBar.navLink} to="/services">
                            <span className={StyleMainNavBar.englishText}>Services</span>
                        </Link>
                    </li>
                    <li className={StyleMainNavBar.navItem}>
                        <Link className={StyleMainNavBar.navLink} to="/team">
                            <span className={StyleMainNavBar.englishText}>Our team</span>
                        </Link>
                    </li>
                    <li className={StyleMainNavBar.navItem}>
                        <Link className={StyleMainNavBar.navLink} to="/contact">
                            <span className={StyleMainNavBar.englishText}>Contact</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default MainNavbar;
