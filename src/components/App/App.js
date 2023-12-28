import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Component Imports
import Nav from '../Nav/Nav';
import LandingPage from '../LandingPage/LandingPage';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Work from '../Work/Work';
import Footer from '../Footer/Footer';

//todo: Get nav bar working
function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Route path="/LandingPage" component={LandingPage} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/work" component={Work} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
