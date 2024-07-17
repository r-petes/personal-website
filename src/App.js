import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import NavigationBar from './components/Navbar';
import { ParallaxProvider } from 'react-scroll-parallax';


function App() {
  return (
    <ParallaxProvider>
      <Router>
      <NavigationBar/>
          <Routes> 
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/about-me" element={<AboutMe />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          </Routes>
        </Router>
        </ParallaxProvider>
  );
}

export default App;
