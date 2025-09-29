import React, { useEffect, useState } from 'react';
import '../header/header.css';
import Logo from "../../assets/images/logo.png";
import SearchIcon from '@mui/icons-material/Search';
import Select from '../selectDrop/select.jsx';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from '@mui/material/Button';
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Nav from '../nav/nav.jsx';
import Index from '../Account-box/index.jsx';

const Header = () => {
    const categories = [
        "All Categories",
        "Milks and Dairies",
        "Wines & Drinks",
        "Clothing & beauty",
        "Pet Foods & Toy",
        "Fresh Seafood",
        "Fast food",
        "Baking material",
        "Vegetables",
        "Fresh Fruit",
        "Bread and Juices"
    ];

    const [countries, setCountries] = useState([]);


    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all?fields=name")
            .then(res => {
                if (!res.ok) throw new Error("Network response was not ok");
                return res.json();
            })
            .then(data => {
                const countryNames = data.map(c => c.name.common).sort();
                setCountries(countryNames);
            })
            .catch(error => {
                console.error("Error fetching countries:", error);
                setCountries(["Failed to load countries"]);
            });
    }, []);

    return (
        <>
            <header>
                <div className='container-fluid'>
                    <div className="row">
                        {/* Logo */}
                        <div className="col-lg-2">
                            <img src={Logo} className="img-fluid" style={{ padding: "0px 21px" }} alt="logo" />
                        </div>

                        {/* Search */}
                        <div className="col-lg-5">
                            <div className="header-serch d-flex align-items-center">
                                <Select items={categories} defaultItem="All Categories" />
                                <div className="serch">
                                    <input type="text" placeholder='Search for item...' />
                                    <SearchIcon className="searchIcon cursor" />
                                </div>
                            </div>
                        </div>

                        {/* Right menu */}
                        <div className="col-lg-5">
                            <div style={{ display: "flex", alignItems: "center", padding: "0px 20px" }}>
                                <Select items={countries} defaultItem="Select Country" />

                                <div>
                                    <ul className="menu-list">
                                        {/* Wishlist */}
                                        <li className="menu-item">
                                            <a href="#"><FavoriteIcon /> Wishlist</a>
                                            <span className="badge">0</span>
                                        </li>

                                        {/* Cart */}
                                        <li className="menu-item">
                                            <a href="#"><ShoppingCartIcon />Cart</a>
                                            <span className="badge">0</span>
                                        </li>

                                        {/* Account */}
                                        <li className="menu-item account">



                                            <Index
                                                NamAction="Account"
                                                menuItems={[
                                                    "My Account",
                                                    "Order Tracking",
                                                    "My Wishlist",
                                                    "Setting",
                                                    "Sign Out"
                                                ]}
                                            />


                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Navigation */}
            <Nav style={{ zIndex: 999 }} />
        </>
    );
};

export default Header;
