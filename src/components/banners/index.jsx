import React from "react";
import "./index.css";

// Import images into variables
import Banner1 from "../../assets/images/Screenshot (71).png";
import Banner2 from "../../assets/images/Screenshot (72).png";
import Banner3 from "../../assets/images/Screenshot first.png";

export default function BannerRow() {
  return (
    <div className="container-fluid my-4">
      <div className="row g-3"> {/* g-3 = gap between cols */}
        <div className="col-md-4">
          <img
            src={Banner1}   // ✅ use imported variable
            alt="Banner 1"
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-4">
          <img
            src={Banner3}
            alt="Banner 2"
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-4">
          <img
            src={Banner3}
            alt="Banner 3"
            className="img-fluid rounded shadow"
          />
        </div>
      </div>
    </div>
  );
}
