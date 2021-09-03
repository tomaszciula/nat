import React from "react";
import {  Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = ({text1, text2, text3, color}) => {

  return (
    <div>
      <ul className="wrapper">
        <li>
          {text1==="O mnie" ? <Link to="/about">{text1}</Link> : <Link to="/">{text1}</Link>}
        </li>
        <li>
        {text2==="Galeria" ? <Link to="/gallery">{text2}</Link> : <Link to="/about">{text2}</Link>}
        </li>
        <li>
          {text3==="Kontakt" ? <Link to="/contact">{text3}</Link> : <Link to="/gallery">{text3}</Link>}
        </li>
      </ul>

   
      </div>
  );
}

export default NavBar;



