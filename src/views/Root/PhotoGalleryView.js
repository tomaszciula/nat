import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import photo1 from "../../components/assets/Group 1.svg";
import photo2 from "../../components/assets/Group 2.svg";
import photo3 from "../../components/assets/Group 3.svg";

function PhotoGalleryView() {
  return (
    <>
    <div className='PhotoGalleryView__container'>
      <div className='PhotoGalleryView__container--navbar'>
      <NavBar text1="Powrót" text2="O mnie" text3="Kontakt" />
      </div>
      <div className="photoGalleryView__container">
        <Link to="/gallery/gallery1">
          <div className="photoGalleryView__container--div">
            <img src={photo1} alt="" />
            <span>Pieski ze schroniska</span>
          </div>
        </Link>
        <Link to="/gallery/gallery2">
          <div className="photoGalleryView__container--div">
            <img src={photo2} alt="" />
            <span>Pieski z domów</span>
          </div>
        </Link>
        <Link to="/gallery/gallery3">
          <div className="photoGalleryView__container--div">
            <img src={photo3} alt="" />
            <span>Inne pieski</span>
          </div>
        </Link>
      </div>
      </div>
    </>
  );
}

export default PhotoGalleryView;
