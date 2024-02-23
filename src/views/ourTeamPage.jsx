import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import MainNavbar from '../components/MainNavbar';
import "../style/views/Team.scoped.scss";
import lancelot from "../assets/portrait-lancelot.jpg"
import lokman from "../assets/pp-placeholder.jpg"

function OurTeamPage() {

  const [showFullLancelot, setShowFullLancelot] = useState(window.innerWidth > 750);
  const [showFullLokman, setShowFullLokman] = useState(window.innerWidth > 750);
  const [showFullLokman2, setShowFullLokman2] = useState(window.innerWidth > 750);

  // Toggle functions for each team member
  const toggleLancelotContent = () => {
    setShowFullLancelot(!showFullLancelot);
  };

  const toggleLokmanContent = () => {
    setShowFullLokman(!showFullLokman);
  };

  const toggleLokman2Content = () => {
    setShowFullLokman2(!showFullLokman2);
  };

  return (
    <div className='teamContainer'>
      <MainNavbar/>
      <h1>OUR TEAM</h1>
      <div className='teamCardsContainer'>
        <div className="lancelot">
          <img src={lokman} alt="portrait-Lancelot" className='imgProfile'/>
          <div className='text'>
            <h3>Lancelot CARRAU</h3>
            {showFullLancelot && (
            <p>Hello! I'm Lancelot, a globe-trotting web developer. From living on a boat to immersing myself in Japan's tech culture, I bring a world of experience to digital solutions. One year into professional web development, I'm dedicated to crafting sites that navigate as smoothly as my adventures across the seas.</p>
            )}
            <button onClick={toggleLancelotContent} className={showFullLancelot ? 'show-less' : 'read-more'}>{showFullLancelot ? 'Show Less' : 'Read Bio'}</button>
          </div>
        </div>
        <div className="lokman">
          <div className='text'>
            <h3>Lokman RAMDANI</h3>
            <p>Hello! I'm Lokman, a web developer with a zest for digital art and technology. At 22, after a literary baccalaureate in Montpellier and a language course in Tokyo, I dove into web development, freelanced as a digital illustrator, and worked on various web projects using React.js and Vue.js. My adventures led me to co-found Gadget Lab. When I'm not coding or sketching, I'm sharing my passion on social media or exploring new destinations. Join me at Gadget Lab, where creativity meets innovation.</p>
          </div>
          <img src={lokman} alt="portrait-Lokman" className='imgProfile'/>
        </div>
        <div className="lokman2">
          <img src={lokman} alt="portrait-Lokman" className='imgProfile'/>
          <div className='text'>
            <h3>Lokman RAMDANI</h3>
            {showFullLokman && (
            <p>Hello! I'm Lokman, a web developer with a zest for digital art and technology. At 22, after a literary baccalaureate in Montpellier and a language course in Tokyo, I dove into web development, freelanced as a digital illustrator, and worked on various web projects using React.js and Vue.js. My adventures led me to co-found Gadget Lab. When I'm not coding or sketching, I'm sharing my passion on social media or exploring new destinations. Join me at Gadget Lab, where creativity meets innovation.</p>
            )}
            <button onClick={toggleLokmanContent} className={showFullLokman ? 'show-less' : 'read-more'}>{showFullLokman ? 'Show Less' : 'Read Bio'}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurTeamPage;
