import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";

export default function ImageSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="image-slider-container">
      <Slider {...settings}>
        <div>
          <img src={`https://api.spicezgold.com/download/file_1734524878924_1721277298204_banner.jpg`} alt="random1" />
        </div>
        <div>
          <img src={`https://api.spicezgold.com/download/file_1734524971122_NewProject(8).jpg`} alt="random2" />
        </div>
        <div>
          <img src={`https://api.spicezgold.com/download/file_1734524930884_NewProject(6).jpg`} alt="random3" />
        </div>
        <div>
          <img src={`https://api.spicezgold.com/download/file_1734524985581_NewProject(11).jpg`} alt="random4" />
        </div>
      </Slider>
    </div>
  );
}
