import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import LocationPinIcon from '@mui/icons-material/LocationPin';
import HeadsetIcon from '@mui/icons-material/Headset';
import MailIcon from '@mui/icons-material/Mail';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container-fluid">
                <div className="row" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div className="col-md-2">
                        <div className="box d-flex gap-3 align-items-center pad">
                            <div className="img">
                                <img src="https://ecommerce-fullstack-web-app.netlify.app/static/media/icon-1.5b1776e2a1d7ec897722f605a8118984.svg" alt="" />
                            </div>
                            <div className="text">
                                <h5>Best prices & offers</h5>
                                <p>Orders $50 or more</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="box d-flex gap-3 align-items-center pad">
                            <div className="img">
                                <img src="https://ecommerce-fullstack-web-app.netlify.app/static/media/icon-2.622b96aa8375916171721496261f6986.svg" alt="" />
                            </div>
                            <div className="text">
                                <h5>Free delivery</h5>
                                <p>Orders $50 or more</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="box d-flex gap-3 align-items-center pad">
                            <div className="img">
                                <img src="https://ecommerce-fullstack-web-app.netlify.app/static/media/icon-3.a41b48d5c6678b96129a842057548c86.svg" alt="" />
                            </div>
                            <div className="text">
                                <h5>Great daily deal</h5>
                                <p>Orders $50 or more</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="box d-flex gap-3 align-items-center pad">
                            <div className="img">
                                <img src="https://ecommerce-fullstack-web-app.netlify.app/static/media/icon-5.e85986742a6c5c3748db8c239b11dd57.svg" alt="" />
                            </div>
                            <div className="text">
                                <h5>Wide assortment</h5>
                                <p>Orders $50 or more</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="box d-flex gap-3 align-items-center pad">
                            <div className="img">
                                <img src="https://ecommerce-fullstack-web-app.netlify.app/static/media/icon-4.84d7a8a08622e302a2d50459d2cddb62.svg" alt="" />
                            </div>
                            <div className="text">
                                <h5>Easy returns</h5>
                                <p>Orders $50 or more</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid my-5 gap-5">
                <div className="row">
                    <div className="col-md-3">
                        <div className="img">
                            <img src="data:image/jpeg;base64,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" alt="" />
                            <p className="my-5">Awesome grocery store website template</p>
                            <p><LocationPinIcon /> Address: 5171 W Campbell Ave undefined Kent, Utah 53127 United States</p>
                            <p><HeadsetIcon /> Call Us: (+91) - 540-025-124553</p>
                            <p><MailIcon /> Email: sale@Nest.com</p>
                            <p><QueryBuilderIcon /> Hours: 10:00 - 18:00, Mon - Sat</p>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="row">
                            <div className="col box-s">

                                <h4>Company</h4>
                                <ul>
                                    <li>
                                        <Link>About Us</Link>
                                    </li>
                                    <li>
                                        <Link>Delivery Information</Link>
                                    </li>
                                    <li>
                                        <Link>Privacy Policy</Link>
                                    </li>
                                    <li>
                                        <Link>Terms & Conditions</Link>
                                    </li>
                                    <li>
                                        <Link>Contact Us</Link>
                                    </li>
                                    <li>
                                        <Link>Support Center</Link>
                                    </li>
                                    <li>
                                        <Link>Careers</Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="col box-s">

                                <h4>Company</h4>
                                <ul>
                                    <li>
                                        <Link>About Us</Link>
                                    </li>
                                    <li>
                                        <Link>Delivery Information</Link>
                                    </li>
                                    <li>
                                        <Link>Privacy Policy</Link>
                                    </li>
                                    <li>
                                        <Link>Terms & Conditions</Link>
                                    </li>
                                    <li>
                                        <Link>Contact Us</Link>
                                    </li>
                                    <li>
                                        <Link>Support Center</Link>
                                    </li>
                                    <li>
                                        <Link>Careers</Link>
                                    </li>
                                </ul>
                            </div>


                            <div className="col box-s">

                                <h4>Company</h4>
                                <ul>
                                    <li>
                                        <Link>About Us</Link>
                                    </li>
                                    <li>
                                        <Link>Delivery Information</Link>
                                    </li>
                                    <li>
                                        <Link>Privacy Policy</Link>
                                    </li>
                                    <li>
                                        <Link>Terms & Conditions</Link>
                                    </li>
                                    <li>
                                        <Link>Contact Us</Link>
                                    </li>
                                    <li>
                                        <Link>Support Center</Link>
                                    </li>
                                    <li>
                                        <Link>Careers</Link>
                                    </li>
                                </ul>
                            </div>

                            
                            <div className="col box-s">

                                <h4>Company</h4>
                                <ul>
                                    <li>
                                        <Link>About Us</Link>
                                    </li>
                                    <li>
                                        <Link>Delivery Information</Link>
                                    </li>
                                    <li>
                                        <Link>Privacy Policy</Link>
                                    </li>
                                    <li>
                                        <Link>Terms & Conditions</Link>
                                    </li>
                                    <li>
                                        <Link>Contact Us</Link>
                                    </li>
                                    <li>
                                        <Link>Support Center</Link>
                                    </li>
                                    <li>
                                        <Link>Careers</Link>
                                    </li>
                                </ul>
                            </div>

                            
                        </div>
                    </div>

                </div>
            </div>
            <div className="container-fluid">
                <div className="row px-5 d-flex align-items-center">
                    <div className="col-3">
                        <p>© 2024, Ecommerce Template All rights reserved</p>
                    </div>
                    <div className="col-9 d-flex align-items-center justify-content-end deco">
                        <p style={{fontSize: "20px"}}>Follow Us</p>
                        <ul className="d-flex gap-3 ">
                            <li>
                                <Link to="/facebook">
                                    <FacebookIcon />
                                </Link>
                            </li>
                            <li>
                                <Link to="/instagram">
                                    <InstagramIcon />
                                </Link>
                            </li>
                            <li>
                                <Link to="/twitter">
                                    <TwitterIcon />
                                </Link>
                            </li>
                            <li>
                                <Link to="/youtube">
                                    <YouTubeIcon />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer