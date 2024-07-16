import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact.js';
import NavigationBar from './components/Navbar';

function App() {
  return (
      <Router>
      <NavigationBar/>
          <Routes> 
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/about-me" element={<AboutMe />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </Router>
  );
}

export default App;
