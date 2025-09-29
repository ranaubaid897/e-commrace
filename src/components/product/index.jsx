import React from "react";
import "./index.css";
import Rating from "@mui/material/Rating";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Link } from "react-router-dom";
import productImg from "../../assets/images/product.png";

const Product = () => {   
  return (
  <div className="product-card">
    <div className="img-box">
      <img src={productImg} alt="Snack" />
    </div>

    <span className="category">Snack</span>

    <Link className="product-title" to="#">
      Seeds of Change Organic Quinoa, Brown, & Red Rice
    </Link>

    <div className="box">
      <Rating
        name="half-rating-read"
        defaultValue={2.5}
        precision={0.5}
        readOnly
      />
      <span className="rating">(4.5)</span>
    </div>

    <span className="brand">
      By <Link className="brand-link" to="#">NextFood</Link>
    </span>

    <div className="but-box d-flex justify-content-between align-items-center">
      <span className="price">
        $28.85 <span className="old-price">$33.68</span>
      </span>
      <button className="add-btn">
        <AddShoppingCartIcon /> Add
      </button>
    </div>
  </div>
);

};

export default Product;
