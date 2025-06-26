import React, { useState } from 'react';

import './Navbar.css'
import {Link} from 'react-scroll';
import menuicon from '../../assets/menu-icon.png'
const Navbar = () => {
  const [mobilemenu,setmobilemenu]=useState(false);
  const tooglemenu=()=>{
        mobilemenu?(setmobilemenu(false)):setmobilemenu(true)
  }
  return (
    <div className='navbar'>
        <div className="name">
            <h2>Ishwarya</h2>
        </div>
        <div className={`sec ${mobilemenu ? 'show-mobile-menu' : 'hide-mobile-menu'}`}>

            <Link to='about' smooth={true} offset={-90} duration={500} spy={true} activeClass="active"><h4>About</h4></Link>
            <Link to='projects' smooth={true} offset={-90} duration={500} spy={true} activeClass="active"><h4>Projects</h4></Link>
            <Link to='skills' smooth={true} offset={-90} duration={500} spy={true} activeClass="active"><h4>Skills</h4></Link>
            <Link to='contact' smooth={true} offset={-90} duration={500} spy={true} activeClass="active"><h4>Leave a Message !</h4></Link>
           
        </div>
        <img
  src={menuicon}
  alt="menu icon"
  onClick={tooglemenu}
  className="menu-icon"
/>

          
       
    </div>
  )
}

export default Navbar