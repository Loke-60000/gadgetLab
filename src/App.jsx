import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import MainNavbar from './components/MainNavbar';
import HomePage from './views/homePage';
import OurTeamPage from './views/ourTeamPage';
import ServicePage from './views/servicesPage';
import ContactPage from './views/contactPage';
import PortfolioPage from './views/portfolioPage';
import MainFooter from './components/MainFooter';
import ScrollToTop from "./scrollToTop";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/team" element={<OurTeamPage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
