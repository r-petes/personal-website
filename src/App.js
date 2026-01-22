import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from "react";
import {  HashRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import CV from './pages/CV';
import NavigationBar from './components/Navbar';
import Footer from './components/Footer';

import { ParallaxProvider } from 'react-scroll-parallax';


function App() {
  return (
    <ParallaxProvider>
      <NavigationBar/>
      <main className="min-h-screen safe-bottom">
      <Router>
          <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/about-me" element={<AboutMe />}></Route>
          <Route path="/cv" element={<CV />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          </Routes>
        </Router>
       </main>
        <Footer />

        </ParallaxProvider>
  );
}

export default App;
