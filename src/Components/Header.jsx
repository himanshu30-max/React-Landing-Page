import React from 'react';
import Navbar from "./Navbar";

function Header() {
  return (
    <div id='main'>
        <Navbar />
        <div className='name'>
            <h1>Smart Home Application Smart Device For Everyone</h1>
            <p className='details'>Wisdom new and valley answer.Contented it so it dicourse recommended. <span>Smart Application</span></p>
            <a href="#" className='cv-btn'>Download</a>
        </div>
    </div>
  )
}

export default Header;