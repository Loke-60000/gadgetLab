import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import MainNavbar from '../components/MainNavbar';
import "../style/views/Team.scoped.scss";
import lancelot from "../assets/portrait-lancelot.jpeg"

function OurTeamPage() {

  return (
    <div className='teamContainer'>
      <MainNavbar/>
      <h1>Our Team</h1>
      <div className='teamCardsContainer'>
        <div className="lancelot">
          <img src={lancelot} alt="portrait-Lancelot" className='imgProfile'/>
          <div className='text'>
            <h3>Lancelot CARRAU</h3>
            <p>Hello! I'm Lancelot, a globe-trotting web developer. From living on a boat to immersing myself in Japan's tech culture, I bring a world of experience to digital solutions. One year into professional web development, I'm dedicated to crafting sites that navigate as smoothly as my adventures across the seas.</p>
          </div>
        </div>
        <div className="lokman">
          <div className='text'>
            <h3>Lokman RAMDANI</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quisquam atque possimus debitis, nemo officia, at, delectus reprehenderit voluptatibus velit ea ipsa nisi dicta nobis explicabo quasi dolore cumque asperiores fuga! Ipsam non eum ipsa, pariatur in cupiditate aliquam dignissimos cum error eligendi commodi expedita veniam ut, quam iusto omnis!</p>
          </div>
          <img src={lancelot} alt="portrait-Lokman" className='imgProfile'/>
        </div>
        <div className="lokman2">
          <img src={lancelot} alt="portrait-Lokman" className='imgProfile'/>
          <div className='text'>
            <h3>Lokman RAMDANI</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quisquam atque possimus debitis, nemo officia, at, delectus reprehenderit voluptatibus velit ea ipsa nisi dicta nobis explicabo quasi dolore cumque asperiores fuga! Ipsam non eum ipsa, pariatur in cupiditate aliquam dignissimos cum error eligendi commodi expedita veniam ut, quam iusto omnis!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurTeamPage;
