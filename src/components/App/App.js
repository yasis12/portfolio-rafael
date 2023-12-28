import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Component Imports
import Nav from '../Nav/Nav';
import LandingPage from '../LandingPage/LandingPage';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Work from '../Work/Work';
import Footer from '../Footer/Footer';


function App() {
  return (
    <div className='Page'>
      <Router>
        <div>
          <div className='NavBar'>
            <Nav />
          </div>
          <div className='Routes'>
          <Routes>
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/work" element={<Work />} />
              <Route path="/" element={<LandingPage />} />
            </Routes>
          </div>
          <div className='Footer'>
            <Footer />
          </div>
        </div>
      </Router>
    </div>
   
  );
}

export default App;
