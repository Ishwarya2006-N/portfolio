import React from 'react'
import './Navbar.css'
import {Link} from 'react-scroll';
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="name">
            <h2>Ishwarya</h2>
        </div>
        <div className="sec">
            <Link to='about' smooth={true} offset={-90} duration={500} spy={true} activeClass="active"><h4>About</h4></Link>
            <Link to='projects' smooth={true} offset={-90} duration={500} spy={true} activeClass="active"><h4>Projects</h4></Link>
            <Link to='skills' smooth={true} offset={-90} duration={500} spy={true} activeClass="active"><h4>Skills</h4></Link>
            <Link to='contact' smooth={true} offset={-90} duration={500} spy={true} activeClass="active"><h4>Leave a Message !</h4></Link>
        </div>
    </div>
  )
}

export default Navbar