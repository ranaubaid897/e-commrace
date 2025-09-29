import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'
import Sidebar from '../../sidebar/index'
import Product from '../../product/index'
import Button from '@mui/material/Button';
import Index from '../../Account-box/index';

const Listing = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="color-box">
                        <div className="wrap">
                            <h3>Snack</h3>
                            <ul>
                                <li>
                                    <Link>Home</Link>
                                </li>
                                <li>
                                    <Link>Shop</Link>
                                </li>
                                <li>
                                    <Link>Snack</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-3 my-3" style={{ padding: "0px" }}>
                    <Sidebar />
                </div>
                <div className="col-md-9 my-3">
                    <div className="row ">
                        <div className='d-flex justify-content-between align-items-center'>
                            <p>We Found <span className='mx-2' style={{ color: "green" }}>29</span>items for you</p>
                            <div className='d-flex align-items-center'>

                                <Index
                                    NamAction="Sort by"
                                    menuItems={[
                                        "Featured",
                                        "Price: Low to High",
                                        "Price: High to Low",
                                        "Newest First"
                                    ]}
                                />


                                <Index
                                    NamAction="Categories"
                                    menuItems={[
                                        "Electronics",
                                        "Fashion",
                                        "Books",
                                        "Toys",
                                        "Sports"
                                    ]}
                                />

                            </div>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Product />
                        </div>
                        <div className="col">
                            <Product />
                        </div>
                        <div className="col">
                            <Product />
                        </div>
                        <div className="col">
                            <Product />
                        </div>
                        <div className="col">
                            <Product />
                        </div>
                        <div className="col">
                            <Product />
                        </div>
                        <div className="col">
                            <Product />
                        </div>
                        <div className="col">
                            <Product />
                        </div>
                        <div className="col">
                            <Product />
                        </div>
                        <div className="col">
                            <Product />
                        </div>
                        <div className="col">
                            <Product />
                        </div>
                        <div className="col">
                            <Product />
                        </div>
                        <div className="col">
                            <Product />
                        </div>
                        <div className="col">
                            <Product />
                        </div>
                        <div className="col">
                            <Product />
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Listing