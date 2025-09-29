import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css"; // 👈 import custom CSS

export default function CatSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 6,
    slidesToScroll: 2,
    arrows: true,
  };

  const items = [
    { img: "https://api.spicezgold.com/download/file_1734525204708_fash.png", text: "Fashion", color: "#ffebee" },
    { img: "https://api.spicezgold.com/download/file_1734525218436_ele.png", text: "Electronics", color: "#e3f2fd" },
    { img: "https://api.spicezgold.com/download/file_1734525231018_bag.png", text: "Bags", color: "#f1f8e9" },
    { img: "https://api.spicezgold.com/download/file_1734525239704_foot.png", text: "Footwear", color: "#fff3e0" },
    { img: "https://api.spicezgold.com/download/file_1734525248057_gro.png", text: "Groceries", color: "#ede7f6" },
    { img: "https://api.spicezgold.com/download/file_1734525255799_beauty.png", text: "Beauty", color: "#fce4ec" },
    { img: "https://api.spicezgold.com/download/file_1734525275367_well.png", text: "Wellness", color: "#e0f7fa" },
    { img: "https://api.spicezgold.com/download/file_1734525286186_jw.png", text: "Jewellery", color: "#f9fbe7" },
  ];

  return (
    <div className="container-fluid mt-5 cat-slider-container">
      <h3 className="mb-4">Featured Categories</h3>
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index} className="text-center p-2">
            {/* Colored circle background */}
            <div
              style={{
                backgroundColor: item.color,
                width: "140px",
                height: "140px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto",
              }}
            >
              <img
                src={item.img}
                alt={item.text}
                style={{
                  width: "80px",
                  height: "80px",
                  objectFit: "contain",
                }}
              />
            </div>
            <p className="mt-2 fw-bold">{item.text}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}
