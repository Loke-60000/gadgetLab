import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import MainNavbar from './components/MainNavbar';
import HomePage from './views/homePage';
import OurTeamPage from './views/ourTeamPage';
import ServicePage from './views/servicesPages';
import ContactPage from './views/ContactPage';
import MainFooter from './components/MainFooter';

function App() {
  return (
    <div className="App">
      <Router>
        <MainNavbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/team" element={<OurTeamPage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
      <MainFooter/>
    </div>
  );
}

export default App;
