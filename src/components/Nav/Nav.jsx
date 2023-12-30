import './Nav.css'
import { Link } from 'react-router-dom';


function Nav() {
  return (
    <>
    <div id='NavBarLinks'>
      <Link to="/">RAFAEL</Link>
      <Link to="/Work">PROJECTS</Link>
      <Link to="/Contact">CONTACT</Link>
    </div>
    </>
  );
}

export default Nav;