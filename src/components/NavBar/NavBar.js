import React, { Component } from "react";
import NavBarHeader from "../NavBarHeader/NavBarHeader";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import "./NavBar.css";
import AboutMeView from "../../views/Root/aboutMeView";
import ContactView from "../../views/Root/ContactView";
import PhotoGalleryView from "../../views/Root/PhotoGalleryView";

const NavBar = ({text1, text2, text3}) => {
  return (
    <div>
      <ul className="wrapper">
        <li>
          {text1=="O mnie" ? <Link to="/about">{text1}</Link> : <Link to="/">{text1}</Link>}
        </li>
        <li>
        {text2=="O mnie" ? <Link to="/about">{text2}</Link> : <Link to="/gallery">{text2}</Link>}
        </li>
        <li>
          <Link to="/contact">{text3}</Link>
        </li>
      </ul>

   
      </div>
  );
}

export default NavBar;



