import React from "react";
import Gallery from 'react-photo-gallery'
import photo1 from "../assets/photo1.jpg";
import photo2 from "../assets/photo2.jpg";
import photo3 from "../assets/photo3.jpg";
import photo4 from "../assets/photo4.jpg";
import "./MainPagePhotos.css";

const photos = [
  {
    src: "https://images92.fotosik.pl/534/7fb943f759703a01.jpg",
    width: 1,
    height: 1,
  },
  {
    src: "https://images92.fotosik.pl/534/ae97869b65c1058a.jpg",
    width: 4,
    height: 3,
  },
  {
    src: "https://images89.fotosik.pl/533/82b34a5fa63071ef.jpg",
    width: 4,
    height: 3,
  },
  {
    src: "https://images89.fotosik.pl/533/b6ad848259150e3b.jpg",
    width: 4,
    height: 3,
  },
  {
    src: "https://images91.fotosik.pl/532/01532ee450366688.jpg",
    width: 4,
    height: 3,
  },
  {
    src: "https://images89.fotosik.pl/533/7a299dde7a1ebdc7.jpg",
    width: 4,
    height: 3,
  },
];
function MainPagePhotos() {
  return (
    <div className="photoContainer">
    <Gallery photos={photos} />
    </div>
    /*
    <div className="photoContainer">
      <div className="grid">
        <img src={photo1} alt='' className="img__photo1" />
      </div>
      <div className="grid">
        <img src={photo2} alt='' className="img__photo2" />
      </div>
      <div className="grid">
        <img src={photo3} alt='' className="img__photo3" />
      </div>
      <div className="grid"></div>
      <div className="grid">
        <img src={photo4} alt='' className="img__photo4" />
      </div>
      <div className="grid">6</div>
    </div>
    */
  );
}

export default MainPagePhotos;
