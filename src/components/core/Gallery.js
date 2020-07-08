import React from "react";
import Beach from "../../images/boat.jpg";
import Beach1 from "../../images/boat1.jpg";
import Mountain from "../../images/wind.jpg";
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
