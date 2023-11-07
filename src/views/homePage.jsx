import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import stylesHome from "../style/Home.module.css";


function HomePage() {

  return (
    <div className={stylesHome.test}>
        <p>TEST</p>
    </div>
  );
}

export default HomePage;
