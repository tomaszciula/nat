import React from "react";
import NavBar from "../../components/NavBar/NavBar";
function AboutMeView() {
  return (
    <>
    <div className='aboutMe__container'>
    <div className='aboutMe__container--navbar'>
    <NavBar text1='Powrót' text2='Galeria' text3='Kontakt' />
    </div>
    <h1>O mnie</h1>;
    </div>
</>
  )
}

export default AboutMeView;
