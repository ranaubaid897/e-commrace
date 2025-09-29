import React, { useState } from "react";
import "./nav.css";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import GridViewIcon from '@mui/icons-material/GridView';
import Button from '@mui/material/Button';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import { Link } from "react-router-dom";
import ClickAwayListener from '@mui/material/ClickAwayListener';

const Nav = () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  return (
    <div className="nav">
      <div className="container-fluid py-2 border">
        <div className="row" style={{ display: "flex", alignItems: "center", position: "relative" }}>

          {/* Categories */}
          <div className="col-md-2">
            <div className="categorries">
              <Link to="/categories">
                <Button>
                  <GridViewIcon className="icon1" />
                  Browse All Categories
                  <ArrowDropDownIcon className="icon" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Main Menu */}
          <div className="col-md-7 pt-3">
            <ul className="nav-list">
              <li><Link to="/"><Button>Home</Button></Link></li>
              <li><Link to="/about"><Button>About</Button></Link></li>
              <li><Link to="/shop"><Button>Shop</Button></Link></li>
              <li><Link to="/vendors"><Button>Vendors</Button></Link></li>
              <ClickAwayListener onClickAway={() => setShow2(false)}>
                <li>
                  <Link><Button onClick={() => setShow2(!show2)}>Mega Menu <ArrowDropDownIcon /></Button></Link>

                  {show2 && <div>
                    <div className="container-fluid mega-style">

                      <div className="row">
                        {/* Column 1 */}
                        {/* Column 1 */}
                        <div className="col py-3" style={{ paddingLeft: "40px" }}>
                          <h4>Fruit & Vegetables</h4>
                          <ul>
                            <li><Link to="/meat-poultry"><Button onClick={() => setShow2(!show2)}>Meat & Poultry</Button></Link></li>
                            <li><Link to="/fresh-vegetables"><Button onClick={() => setShow2(!show2)}>Fresh Vegetables</Button></Link></li>
                            <li><Link to="/herbs-seasonings"><Button onClick={() => setShow2(!show2)}>Herbs & Seasonings</Button></Link></li>
                            <li><Link to="/cuts-sprouts"><Button onClick={() => setShow2(!show2)}>Cuts & Sprouts</Button></Link></li>
                            <li><Link to="/exotic-fruits-veggies"><Button onClick={() => setShow2(!show2)}>Exotic Fruits & Veggies</Button></Link></li>
                            <li><Link to="/packaged-produce"><Button onClick={() => setShow2(!show2)}>Packaged Produce</Button></Link></li>
                          </ul>
                        </div>

                        {/* Column 2 */}
                        <div className="col py-3">
                          <h4>Breakfast & Dairy</h4>
                          <ul>
                            <li><Link to="/milk-flavoured-milk"><Button onClick={() => setShow2(!show2)}>Milk & Flavoured Milk</Button></Link></li>
                            <li><Link to="/butter-margarine"><Button onClick={() => setShow2(!show2)}>Butter and Margarine</Button></Link></li>
                            <li><Link to="/eggs-substitutes"><Button onClick={() => setShow2(!show2)}>Eggs Substitutes</Button></Link></li>
                            <li><Link to="/marmalades"><Button onClick={() => setShow2(!show2)}>Marmalades</Button></Link></li>
                            <li><Link to="/sour-cream"><Button onClick={() => setShow2(!show2)}>Sour Cream</Button></Link></li>
                            <li><Link to="/cheese"><Button onClick={() => setShow2(!show2)}>Cheese</Button></Link></li>
                          </ul>
                        </div>

                        {/* Column 3 */}
                        <div className="col py-3">
                          <h4>Meat & Seafood</h4>
                          <ul>
                            <li><Link to="/breakfast-sausage"><Button onClick={() => setShow2(!show2)}>Breakfast Sausage</Button></Link></li>
                            <li><Link to="/dinner-sausage"><Button onClick={() => setShow2(!show2)}>Dinner Sausage</Button></Link></li>
                            <li><Link to="/chicken"><Button onClick={() => setShow2(!show2)}>Chicken</Button></Link></li>
                            <li><Link to="/sliced-deli-meat"><Button onClick={() => setShow2(!show2)}>Sliced Deli Meat</Button></Link></li>
                            <li><Link to="/wild-caught-fillets"><Button onClick={() => setShow2(!show2)}>Wild Caught Fillets</Button></Link></li>
                            <li><Link to="/crab-shellfish"><Button onClick={() => setShow2(!show2)}>Crab and Shellfish</Button></Link></li>
                          </ul>
                        </div>


                        {/* Column 4 (Image) */}
                        <div className="col">
                          <img
                            className="img-fluid rounded"
                            src="https://img.freepik.com/free-vector/online-shopping-concept-illustration_114360-2340.jpg"
                            alt="Shopping"
                          />
                        </div>
                      </div>




                    </div>
                  </div>
                  }
                </li>
              </ClickAwayListener>

              <li><Link to="/blogs"><Button>Blogs</Button></Link></li>

              {/* ✅ Wrap dropdown with ClickAwayListener */}
              <ClickAwayListener onClickAway={() => setShow(false)}>
                <li className="black">
                  <Button onClick={() => setShow(!show)}>
                    Pages <ArrowDropDownIcon />
                  </Button>

                  {show && (
                    <div className="sub-pages">
                      <ul>
                        <li>
                          <Link to="/about">
                            <Button onClick={() => setShow(!show)}>About Us</Button>
                          </Link>
                        </li>
                        <li>
                          <Link to="/contact">
                            <Button onClick={() => setShow(!show)}>Contact</Button>
                          </Link>
                        </li>
                        <li>
                          <Link to="/my-account">
                            <Button onClick={() => setShow(!show)}>My Account</Button>
                          </Link>
                        </li>
                        <li>
                          <Link to="/login">
                            <Button onClick={() => setShow(!show)}>Login</Button>
                          </Link>
                        </li>
                        <li>
                          <Link to="/register">
                            <Button onClick={() => setShow(!show)}>Register</Button>
                          </Link>
                        </li>
                        <li>
                          <Link to="/forget">
                            <Button onClick={() => setShow(!show)}>Forgot Password</Button>
                          </Link>
                        </li>
                        <li>
                          <Link to="/purchace">
                            <Button onClick={() => setShow(!show)}>Purchase Guide</Button>
                          </Link>
                        </li>
                        <li>
                          <Link to="/privacy">
                            <Button onClick={() => setShow(!show)}>Privacy Policy</Button>
                          </Link>
                        </li>
                        <li>
                          <Link to="/terms">
                            <Button onClick={() => setShow(!show)}>Terms of Service</Button>
                          </Link>
                        </li>
                      </ul>

                    </div>
                  )}
                </li>
              </ClickAwayListener>

              <li><Link to="/contact"><Button>Contact</Button></Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-3">
            <div className="side-icon" style={{ justifyContent: "flex-end" }}>
              <SupportAgentIcon className="icon" />
              <div className="number">
                <div className="num"><span>+1 234 567 890</span></div>
                <p>Support 24/7</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Nav;
