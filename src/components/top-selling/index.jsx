import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Download from "../../assets/images/download.jpg";
const TopSelling = (props) => {
    return (
        <>
            <h3 className="style mt-5">
                {props.title}
            </h3>
            <div className="trend-box d-flex gap-3 pt-5">
                <div className="img">
                    <img src={Download} alt="" style={{ width: "80%" }} />
                </div>
                <div className="content">
                    <Link>Nestle Origninal coffee Mate Coffee Creamer</Link>
                    <div className="box">
                        <Rating
                            name="half-rating-read"
                            defaultValue={2.5}
                            precision={0.5}
                            readOnly
                        />
                     
                    </div>

                    <div className="but-box d-flex justify-content-between align-items-center">
                        <span className="price">
                            $28.85 <span className="old-price">$33.68</span>
                        </span>
                    </div>
                </div>
            </div>
            <div className="trend-box d-flex gap-3 pt-5">
                <div className="img">
                    <img src={Download} alt="" style={{ width: "80%" }} />
                </div>
                <div className="content">
                    <Link>Nestle Origninal coffee Mate Coffee Creamer</Link>
                    <div className="box">
                        <Rating
                            name="half-rating-read"
                            defaultValue={2.5}
                            precision={0.5}
                            readOnly
                        />
                     
                    </div>

                    <div className="but-box d-flex justify-content-between align-items-center">
                        <span className="price">
                            $28.85 <span className="old-price">$33.68</span>
                        </span>
                    </div>
                </div>
            </div>
            <div className="trend-box d-flex gap-3 pt-5 mb-5">
                <div className="img">
                    <img src={Download} alt="" style={{ width: "80%" }} />
                </div>
                <div className="content">
                    <Link>Nestle Origninal coffee Mate Coffee Creamer</Link>
                    <div className="box">
                        <Rating
                            name="half-rating-read"
                            defaultValue={2.5}
                            precision={0.5}
                            readOnly
                        />
                     
                    </div>

                    <div className="but-box d-flex justify-content-between align-items-center">
                        <span className="price">
                            $28.85 <span className="old-price">$33.68</span>
                        </span>
                    </div>
                </div>
            </div>

        </>);
};

export default TopSelling;