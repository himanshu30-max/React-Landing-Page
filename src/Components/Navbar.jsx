import React, { useState } from 'react';

function Navbar() {

    const [nav,setnav] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 40)
        {
            setnav(true);
        }
        else {
            setnav(false);
        }
    }

    window.addEventListener('scroll',changeBackground);

  return (
    <nav className={nav ? 'nav active' : 'nav'}>
    <a href="#" >
        
        <h2 className='logo'>Smart Home</h2>
    </a>
    <input type="checkbox" className='menu-btn' id="menu-btn" />
    <label className = "menu-icon" for="menu-btn">
        <span className='nav-icon'></span>
    </label>
    <ul className='menu'>
        <li><a href="#" className='active'>Home</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#presentaion">App UI</a></li>
        <li><a href="#contact">Contact Us</a></li>
        <li><a href="#">Download</a></li>
    </ul>
    </nav>
  )
}

export default Navbar;