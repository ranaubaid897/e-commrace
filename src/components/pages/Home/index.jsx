import React from "react";
import ImageSlider from "./slide/index.jsx";
import CatSlider from "../../catSlider/index.jsx";
import BannerRow from "../../banners/index.jsx";
import "./index.css";
import Product from "../../product/index.jsx";
import TopSelling from "../../top-selling/index.jsx";

const Home = () => {
  return (
    <>
      <ImageSlider />
      <CatSlider />
      <BannerRow />

      <div className="container-fluid py-5 px-5">
        <div className="row py-3">
          <div className="col-lg-4">
            <h3>Popular Products</h3>
          </div>
          <div className="col-lg-8 txt">
            <ul>
              <li><a href="">All</a></li>
              <li><a href="">Milk & Dairies</a></li>
              <li><a href="">Coffes & Teas</a></li>
              <li><a href="">Pet Foods</a></li>
              <li><a href="">Meats</a></li>
              <li><a href="">Vegitables</a></li>
              <li><a href="">Fruits</a></li>
            </ul>
          </div>
        </div>
        <div className="row g-4">
          <div className="col-12 col-sm-6 col-lg-3">
            <Product />
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <Product />
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <Product />
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <Product />
          </div>

                   <div className="col-12 col-sm-6 col-lg-3">
            <Product />
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <Product />
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <Product />
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <Product />
          </div>




          


          
        </div>

        
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-3">
            <TopSelling title="Top Selling"/>
          </div>
           <div className="col-sm-3">
            <TopSelling title="Trending Products"/>
          </div>
           <div className="col-sm-3">
            <TopSelling title="Recently Added"/>
          </div>
           <div className="col-sm-3">
            <TopSelling title="Top Rated"/>
          </div>
        </div>
      </div>

    </>
  );
};

export default Home;