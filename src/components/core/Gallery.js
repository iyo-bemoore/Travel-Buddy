import React from "react";
import Beach from "../../images/beach.png";
import Beach1 from "../../images/beach1.png";
import Mountain from "../../images/mountain.png";
const Gallery = () => {
  return (
    <div className="gallery">
      {" "}
      <figure class="gallery__item">
        <img src={Beach} alt="Amazing Hotel" class="gallery__photo" />
      </figure>
      <figure class="gallery__item">
        <img src={Beach1} alt="Amazing Hotel" class="gallery__photo" />
      </figure>
      <figure class="gallery__item">
        <img src={Mountain} alt="Amazing Hotel" class="gallery__photo" />
      </figure>
    </div>
  );
};

export default Gallery;
