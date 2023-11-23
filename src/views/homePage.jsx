import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom';
import "../style/views/Home.scoped.scss";
import banner from "../assets/cover_gadget_lab.png"
import wave from "../assets/wave2.png"
import clouds from "../assets/nuages.png"
import services from "../assets/services.png"
import team from "../assets/team.png"
import contact from "../assets/contact.png"
import portfolio from "../assets/portfolio.png"


function HomePage() {

  return (
    <div className='homeContainer'>
      <img src={clouds} className='clouds' />
      <img src={banner} alt="gadget_lab_banner" className='banner' />
      <div className="waveContainer">
          <div className="wave wave1" style={{ backgroundImage: `url(${wave})` }}></div>
          <div className="wave wave2" style={{ backgroundImage: `url(${wave})` }}></div>
          <div className="wave wave3" style={{ backgroundImage: `url(${wave})` }}></div>
          <div className="wave wave4" style={{ backgroundImage: `url(${wave})` }}></div>
      </div>
      <div className='page'>
        <Link to="/services" >
          <div className="linkContainer linkServices">
            <img src={services} className='imgLink imgServices' alt="services-button" />
            <h3>SERVICES</h3>
          </div>
        </Link>  
        <Link to="/portfolio" >
          <div className="linkContainer linkPortfolio">
            <img src={portfolio} className='imgLink imgPortfolio' alt="portfolio-button" />
            <h3>PORTFOLIO</h3>
          </div>
        </Link>  
        <Link to="/team" >
          <div className="linkContainer linkTeam">
            <img src={team} className='imgLink imgTeam' alt="our-team-button" />
            <h3>TEAM</h3>
          </div>
        </Link>
        <Link to="/contact" >
          <div className="linkContainer linkContact">
            <img src={contact} className='imgLink imgContact' alt="contact-button" />
            <h3>CONTACT</h3>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
