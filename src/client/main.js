/* Copyright G. Hemingway, @2024 - All rights reserved */
'use strict';

import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LandingPage from "./components/landing_page.js";
import NavBar from "./components/navbar.js";
import '../index.css';
import Projects from "./components/projects.js";
import {Footer} from "./components/footer.js";

const defaultUser = {
  username: '',
  first_name: '',
  last_name: '',
  primary_email: '',
  city: '',
  games: [],
};

/***
 * Main application entry point
 * @returns {JSX.Element}
 * @constructor
 */
const MyApp = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <BrowserRouter>
      <NavBar darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

const root = createRoot(document.getElementById('mainDiv'));
root.render(<MyApp />);
