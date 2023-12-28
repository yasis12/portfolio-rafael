import './App.css';
//Component Imports
import NavBar from '../NavBar/NavBar';
import LandingPage from '../LandingPage/LandingPage'
import About from '../About/About';
import Contact from '../Contact/Contact';
import Work from '../Work/Work';
import Footer from '../Footer/Footer';

function App() {
  return (
    <>
      <NavBar />
      <LandingPage />
      <About />
      <Contact />
      <Work />
      <Footer />
    </>
  );
}

export default App;
