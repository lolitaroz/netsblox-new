/* Copyright G. Hemingway, @2024 - All rights reserved */
"use strict";

import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LandingPage from "./components/landing_page.js";
import NavBar from "./components/navbar.js";
import "../index.css";
import Projects from "./components/projects.js";
import { Footer } from "./components/footer.js";
import PhoneIOT from "./components/phoneiot.js";
import CurriculumPage from "./components/curriculum_page.js";
import MultiplayerPage from "./components/multiplayer.js";
import PyBloxPage from "./components/pyblox.js";
import RoboScapePage from "./components/roboscape.js";
import LearnPage from "./components/learn_page.js";
import Beatblox from "./components/beatblox.js";

/***
 * Main application entry point
 * @returns {JSX.Element}
 * @constructor
 */
const MyApp = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <BrowserRouter>
      <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/phoneiot" element={<PhoneIOT />} />
        <Route path="/curriculum" element={<CurriculumPage />} />
        <Route path="/multiplayer" element={<MultiplayerPage />} />
        <Route path="/pyblox" element={<PyBloxPage />} />
        <Route path="/roboscape" element={<RoboScapePage />} />
        <Route path="/learn" element={<LearnPage />} />
        <Route path="/beatblox" element={<Beatblox />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

const root = createRoot(document.getElementById("mainDiv"));
root.render(<MyApp />);
