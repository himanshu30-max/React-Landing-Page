import React from "react";
import {FaFacebook} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";
import {FaGoogle} from "react-icons/fa";


function Footer() {
  return (
    <div id="footer">
      <footer className="footer">
        <div className="l-footer">
          <h1 id="app-land">
            Smart Home       </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.Laboriosam
            atque recusandae in sit sunt molestiae aliquid fugit.
          </p>
        </div>
        <ul className="r-footer">
          <li>
            <h2>Social </h2>
            <ul className="box">
              <li>
                
                <a href="#"> <FaFacebook /> Facebook </a>
              </li>
              <li>
                
                <a href="#"> <FaTwitter/>Twitter </a>
              </li>
              <li>
                
                <a href="#"> <FaLinkedin/>LinkedIn </a>
              </li>
              <li>
                
                <a href="#"><FaGoogle/> Google </a>
              </li>
            </ul>
          </li>
          <li className="features1">
            <h2 id="app-land"><b>Information</b> </h2>
            <ul className="box h-box">
              <li>
                
                <a href="#"> Blog </a>
              </li>
              <li>
                
                <a href="#"> About Us</a>
              </li>
              <li>
                
                <a href="#"> Features </a>
              </li>
              <li>
                
                <a href="#"> Images </a>
              </li>
              <li>
                
                <a href="#"> Reviews </a>
              </li>
              <li>
                
                <a href="#"> Customer Service </a>
              </li>
            </ul>
          </li>
          <li>
            <h2 id="app-land"><b>Legal</b></h2>
            <ul className="box">
              <li>
                
                <a href="#"> Privacy Policy </a>
              </li>
              <li>
                
                <a href="#"> Terms of Use </a>
              </li>
              <li>
                
                <a href="#"> Contract </a>
              </li>
            </ul>
          </li>
        </ul>
        <div className="b-footer">
          <p id="app-land">All rights reserved by © Smart Home 2022 </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
