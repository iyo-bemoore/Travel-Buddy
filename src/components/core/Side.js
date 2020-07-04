import React from "react";
import sprite from "../../images/sprite.svg";
const Side = () => {
  return (
    <nav className="sidebar">
      <ul className="side-nav">
        <li class="side-nav__item side-nav__item--active">
          <a href="#" class="side-nav__link">
            <svg class="side-nav__icon">
              <use href={sprite + "#icon-home"}></use>
            </svg>
            <span>Hotel</span>
          </a>
        </li>
        <li class="side-nav__item">
          <a href="#" class="side-nav__link">
            <svg class="side-nav__icon">
              <use href={sprite + "#icon-aircraft-take-off"}></use>
            </svg>
            <span>Flight</span>
          </a>
        </li>
        <li class="side-nav__item">
          <a href="#" class="side-nav__link">
            <svg class="side-nav__icon">
              <use href={sprite + "#icon-key"}></use>
            </svg>
            <span>Car rental</span>
          </a>
        </li>
        <li class="side-nav__item">
          <a href="#" class="side-nav__link">
            <svg class="side-nav__icon">
              <use href={sprite + "#icon-map"}></use>
            </svg>
            <span>Tours</span>
          </a>
        </li>
      </ul>
      <div class="legal">&copy; 2020 Travel Buddy. All rights reserved.</div>
    </nav>
  );
};

export default Side;
