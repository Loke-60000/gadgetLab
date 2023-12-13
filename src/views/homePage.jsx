import React, { useState, useEffect, useRef } from 'react';
import { HashRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom';
import "../style/views/Home.scoped.scss";
import banner from "../assets/cover_gadget_lab.png"
import wave from "../assets/wave3.png"
import clouds from "../assets/nuages.png"
import services from "../assets/services2.png"
import team from "../assets/team2.png"
import contact from "../assets/contact2.png"
import portfolio from "../assets/portfolio2.png"
import arrow from "../assets/arrow-down.svg"
import FadeIn from 'react-fade-in/lib/FadeIn';


function HomePage() {
  
  const [isVisible, setIsVisible] = useState(false);
  const introRef = useRef(null);

  const scrollToIntroduction = () => {
    introRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  // useEffect(() => {
  //   setIsVisible(true); // Trigger the fade-in effect on component mount
  // }, []);

  // const FadeInComponent = () => {
  
  // };

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null, // relative to the viewport
        threshold: 0.1, // 10% of the element should be visible
      }
    );

    if (introRef.current) {
      observer.observe(introRef.current);
    }

    return () => {
      if (introRef.current) {
        observer.unobserve(introRef.current);
      }
    };
  }, [introRef]);


  return (
    <div className='homeContainer'>
      {/* <img src={clouds} className='clouds' /> */}
      <img src={banner} alt="gadget_lab_banner" className='banner' />
      <div className="waveContainer">
          <div className="wave wave1" style={{ backgroundImage: `url(${wave})` }}></div>
          <div className="wave wave2" style={{ backgroundImage: `url(${wave})` }}></div>
          <div className="wave wave3" style={{ backgroundImage: `url(${wave})` }}></div>
          <div className="wave wave4" style={{ backgroundImage: `url(${wave})` }}></div>
      </div>
      <div>
        <button className='buttonScroll' onClick={scrollToIntroduction}>
          <img src={arrow} alt="scroll-button" />
        </button>
      </div>
      <FadeIn visible={isVisible} transitionDuration={1500}>
      <div className="introduction" ref={introRef}>
        <h2>Welcome to Gadget Lab!</h2>
        <p>The digital forge where innovation meets function. Founded by a duo of avid web developers, we specialize in crafting cutting-edge web experiences using React. Our passion project is developing bespoke AI solutions that we aim to seamlessly integrate into future websites, apps, and beyond. Join us as we redefine the intersection of technology and human-centric design.</p>
      </div>
      </FadeIn>
      <FadeIn visible={isVisible} delay={500} transitionDuration={2500}>
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
      </FadeIn>
    </div>
  );
}

export default HomePage;
