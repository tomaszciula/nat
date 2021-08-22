import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import "./Views.css";

const ContactView = () => {
  return (
    <div className="contactView__container">
      <div className="contactView__container--navbar">
        <NavBar text1="Powrót" text2="O mnie" text3="Galeria" />
      </div>
      <div className="contactView__container--wrapper">
        <div className="contactView__container__wrapper--header">
          <h1>Kontakt do mnie</h1>

          <div className="contactView__container__wrapper--contactsWrapper">
            <div className="contactView__container__wrapper__contactsWrapper--contactElement">
            <i className="icon-mobile-alt" style={{ fontSize: "140px"}} /> 
            <h3>+48 0500 2 900</h3>
            </div>
            <div className="contactView__container__wrapper__contactsWrapper--contactElement">
              <i className="icon-mail" style={{ fontSize: "140px"}} /> 
              <h3>natalianatalia@natalia.nat</h3>
            </div>
            <div className="contactView__container__wrapper__contactsWrapper--contactElement">
              <i className="demo-icon icon-mobile-alt" style={{ fontSize: "80px"}} /> 
              <h3>natalianatalia@natalia.nat</h3>
            </div>
            <div className="contactView__container__wrapper__contactsWrapper--contactElement">
              <i className="icon-facebook-rect" style={{ fontSize: "30px"}} /> 
              <i className="icon-instagram" style={{ fontSize: "30px"}} /> 
              <i className="icon-twitter" style={{ fontSize: "30px"}} /> 
              <i className="icon-tumblr" style={{ fontSize: "30px"}} /> 

              <h3>natalianatalia@natalia.nat</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactView;
