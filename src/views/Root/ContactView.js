import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import "./Views.css";

const ContactView = () => {
  return (
    <div className="contactView__container">
      <div className="contactView__container--navbar">
        <NavBar text1="Powrót" text2="O mnie" text3="Galeria" color="white"/>
      </div>
      <div className="contactView__container--wrapper">
        <div className="contactView__container__wrapper--header">
        

          <div className="contactView__container__wrapper--contactsWrapper">
            <div className="contactView__container__wrapper__contactsWrapper--contactElement">
            <a href='tel:+48505146677'>
            <i className="icon-mobile-alt" style={{ fontSize: "80px"}} /> 
            </a>
            </div>
            <div className="contactView__container__wrapper__contactsWrapper--contactElement">
            <a href='mailto: natalia.natalia@nat'>
              <i className="icon-mail" style={{ fontSize: "50px"}} /> 
              </a>
            </div>
            <div className="contactView__container__wrapper__contactsWrapper--contactElement">
              <a href='https://www.facebook.com/natalia.strzelec.3'>
            <i className="icon-facebook-rect" style={{ fontSize: "50px"}} /> 
            </a>
            </div>
            <div className="contactView__container__wrapper__contactsWrapper--contactElement">
              <a href='https://instagram.com/pieskie.fotografie?utm_medium=copy_link'>
              <i className="icon-instagram" style={{ fontSize: "60px"}} /> 
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactView;
