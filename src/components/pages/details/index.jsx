import React, { useState } from "react";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Pro from "../../../assets/images/product.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Button } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';


const Details = () => {
  // State for active image
  const [activeWeight, setActiveWeight] = useState(null);
  const [numb, setnub] = useState(1);
  const [active, setactive] = useState(0);

  const weights = ["50kg", "60kg", "80kg", "100kg", "150kg"];
  const [activeImg, setActiveImg] = useState(Pro);

  const thumbnails = [
    Pro,
    "https://api.spicezgold.com/download/file_1734525286186_jw.png",
    "https://api.spicezgold.com/download/file_1734525248057_gro.png",
    "https://api.spicezgold.com/download/file_1734525255799_beauty.png",
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    className: "thumb-slider mt-3",
  };

  return (
    <>
      <div className="container p-5">
        <div className="row">

          <div className="col-md-6">
            {/* Main Product Image */}
            <div className="product-preview">
              <img
                src={activeImg}
                alt="Product"
                className="main-product-img"
              />
            </div>

            {/* Thumbnail Slider */}
            <Slider {...sliderSettings}>
              {thumbnails.map((img, i) => (
                <div
                  key={i}
                  className={`thumb-box ${activeImg === img ? "active-thumb" : ""
                    }`}
                  onClick={() => setActiveImg(img)}
                >
                  <img src={img} alt={`thumb-${i}`} />
                </div>
              ))}
            </Slider>
          </div>

          <div className="col-md-6">
            <p
              style={{
                fontSize: "30px",
                fontWeight: "bold",
                opacity: "0.8",
              }}
            >
              Seeds of Change Organic Quinoa, Brown
            </p>
            <div className="">
              <Rating
                name="half-rating-read"
                defaultValue={2.5}
                precision={0.5}
                readOnly
              />
              <span className="rating">(4.5)</span>
            </div>
            <span className="price">
              $28.85 <span className="old-price">$33.68</span>
            </span>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Minima, ducimus dolorem asperiores vero deleniti reprehenderit
              debitis illum neque.
            </p>
            <div className="stateBox">
              <span>Size/Weight</span>
              {weights.map((w, i) => (
                <Button
                  key={i}
                  onClick={() => setActiveWeight(w)}
                  className={activeWeight === w ? "active-btn" : ""}
                  variant="outlined"
                >
                  {w}
                </Button>
              ))}
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div className="add-sec mt-3">
                <div className="box-s" style={{ border: "1px solid rgba(0, 0, 0, 0.2)", height: "50px", width: "100px", borderRadius: "10px", position: "relative" }}>
                  <input type="number"
                    style={{ width: "99%", height: "99%", border: "none", outline: "none", textAlign: "center", borderRadius: "10px" }}
                    value={numb <= 0 ? 1 : numb}

                  />
                  <KeyboardArrowDownIcon onClick={() => setnub(numb + 1)} style={{ position: "absolute", top: "-1px", right: "-1px", zIndex: "100", opacity: "0.5", marginRight: "5px" }} />
                  <KeyboardArrowUpIcon onClick={() => setnub(numb - 1)} style={{ position: "absolute", bottom: "-1px", right: "-1px", zIndex: "100", opacity: "0.5", marginRight: "5px" }} />
                </div>
              </div>

              <div className="add-sec">
                <Button className="add-btn mt-3 mx-2" style={{ color: "black" }} >Add to Cart</Button>
              </div>
              <div className="heart mt-3 mx-2" style={{ cursor: "pointer", border: "1px solid rgba(0, 0, 0, 0.2)", borderRadius: "10px", padding: "10px" }}>
                <FavoriteBorderIcon />
              </div>
              <div className="heart mt-3 mx-2" style={{ cursor: "pointer", border: "1px solid rgba(0, 0, 0, 0.2)", borderRadius: "10px", padding: "10px" }}>
                <CompareArrowsIcon />
              </div>
            </div>


          </div>
        </div>
      </div>

      {/* Products container */}
      <div className="container p-5 goll ">
        <div className="row">
          <div className="gol">
            <ul>
              <li><Button onClick={() => setactive(0)}>Description</Button></li>
              <li><Button onClick={() => setactive(1)}>Additional Info</Button></li>
              <li><Button onClick={() => setactive(2)}>vendor</Button></li>
              <li><Button onClick={() => setactive(3)}>Reviews</Button></li>
            </ul>
          </div>

          {active === 0 &&
            <>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, animi ratione culpa excepturi ea dolorum laudantium voluptas sed reiciendis iusto veniam sequi aliquam alias, mollitia eum corporis at, eligendi ad.
                Dolores iusto dolor sunt omnis mollitia delectus ipsum ad aspernatur unde ipsam est, nihil temporibus odio officiis. Placeat nobis ipsum commodi neque? Provident ab voluptate eos, molestias quidem ipsum voluptatum.
                Quae, dolores animi! Nesciunt animi est fugiat incidunt excepturi quos expedita dignissimos quas quisquam doloribus dolorum dolores amet unde atque, magni a, in obcaecati facilis cum. Et nesciunt dolorum quo!
                Sed molestias consequuntur laudantium, porro laboriosam id nisi fugit, doloribus soluta recusandae, quam quaerat perspiciatis vitae! Nulla harum modi, distinctio dolor quos voluptate, pariatur perspiciatis adipisci architecto, id reprehenderit corrupti!</p>

              <div className="col-md-2">
                <ul>
                  <li>some text</li>
                  <li>some text</li>
                  <li>some text</li>
                  <li>some text</li>
                  <li>some text</li>
                </ul>
              </div>

              <div className="col-md-10 block pt-2">
                <span>some text</span>
                <span>some text</span>
                <span>some text</span>
                <span>some text</span>
                <span>some text</span>
              </div>
              <h3>here is a some heading</h3>
              <hr />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, animi ratione culpa excepturi ea dolorum laudantium voluptas sed reiciendis iusto veniam sequi aliquam alias, mollitia eum corporis at, eligendi ad.
                Dolores iusto dolor sunt omnis mollitia delectus ipsum ad aspernatur unde ipsam est, nihil temporibus odio officiis. Placeat nobis ipsum commodi neque? Provident ab voluptate eos, molestias quidem ipsum voluptatum.
                Quae, dolores animi! Nesciunt animi est fugiat incidunt excepturi quos expedita dignissimos quas quisquam doloribus dolorum dolores amet unde atque, magni a, in obcaecati facilis cum. Et nesciunt dolorum quo!
                Sed molestias consequuntur laudantium, porro laboriosam id nisi fugit, doloribus soluta recusandae, quam quaerat perspiciatis vitae! Nulla harum modi, distinctio dolor quos voluptate, pariatur perspiciatis adipisci architecto, id reprehenderit corrupti!</p>
            </>

          }

          {active === 1 &&


            <div className="some-content">
              <table>
                <tr>
                  <th>Company</th>
                  <th>Contact</th>
                  <th>Country</th>
                </tr>
                <tr>
                  <td>Alfreds Futterkiste</td>
                  <td>Maria Anders</td>
                  <td>Germany</td>
                </tr>
                <tr>
                  <td>Centro comercial Moctezuma</td>
                  <td>Francisco Chang</td>
                  <td>Mexico</td>
                </tr>
                <tr>
                  <td>Ernst Handel</td>
                  <td>Roland Mendel</td>
                  <td>Austria</td>
                </tr>
                <tr>
                  <td>Island Trading</td>
                  <td>Helen Bennett</td>
                  <td>UK</td>
                </tr>
                <tr>
                  <td>Laughing Bacchus Winecellars</td>
                  <td>Yoshi Tannamuri</td>
                  <td>Canada</td>
                </tr>
                <tr>
                  <td>Magazzini Alimentari Riuniti</td>
                  <td>Giovanni Rovelli</td>
                  <td>Italy</td>
                </tr>
              </table>
            </div>
          }        {active === 2 &&
            <>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, animi ratione culpa excepturi ea dolorum laudantium voluptas sed reiciendis iusto veniam sequi aliquam alias, mollitia eum corporis at, eligendi ad.
                Dolores iusto dolor sunt omnis mollitia delectus ipsum ad aspernatur unde ipsam est, nihil temporibus odio officiis. Placeat nobis ipsum commodi neque? Provident ab voluptate eos, molestias quidem ipsum voluptatum.
                Quae, dolores animi! Nesciunt animi est fugiat incidunt excepturi quos expedita dignissimos quas quisquam doloribus dolorum dolores amet unde atque, magni a, in obcaecati facilis cum. Et nesciunt dolorum quo!
                Sed molestias consequuntur laudantium, porro laboriosam id nisi fugit, doloribus soluta recusandae, quam quaerat perspiciatis vitae! Nulla harum modi, distinctio dolor quos voluptate, pariatur perspiciatis adipisci architecto, id reprehenderit corrupti!</p>

              <div className="col-md-2">
                <ul>
                  <li>some text</li>
                  <li>some text</li>
                  <li>some text</li>
                  <li>some text</li>
                  <li>some text</li>
                </ul>
              </div>

              <div className="col-md-10 block pt-2">
                <span>some text</span>
                <span>some text</span>
                <span>some text</span>
                <span>some text</span>
                <span>some text</span>
              </div>
              <h3>here is a some heading</h3>
              <hr />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, animi ratione culpa excepturi ea dolorum laudantium voluptas sed reiciendis iusto veniam sequi aliquam alias, mollitia eum corporis at, eligendi ad.
                Dolores iusto dolor sunt omnis mollitia delectus ipsum ad aspernatur unde ipsam est, nihil temporibus odio officiis. Placeat nobis ipsum commodi neque? Provident ab voluptate eos, molestias quidem ipsum voluptatum.
                Quae, dolores animi! Nesciunt animi est fugiat incidunt excepturi quos expedita dignissimos quas quisquam doloribus dolorum dolores amet unde atque, magni a, in obcaecati facilis cum. Et nesciunt dolorum quo!
                Sed molestias consequuntur laudantium, porro laboriosam id nisi fugit, doloribus soluta recusandae, quam quaerat perspiciatis vitae! Nulla harum modi, distinctio dolor quos voluptate, pariatur perspiciatis adipisci architecto, id reprehenderit corrupti!</p>
            </>

          }

          {active === 3 &&


            <div className="reviwe row">
              {/* Left Column */}
              <div className="col-md-8">
                <h3>Here is a Some Heading</h3>

                {/* Review Box - repeated */}
                {[1, 2, 3].map((item, index) => (
                  <div
                    key={index}
                    className="p-4 my-2"
                    style={{
                      borderRadius: "10px",
                      border: "1px solid rgba(0, 0, 0, 0.3)",
                    }}
                  >
                    <div className="d-flex justify-content-between">
                      {/* Profile + Date */}
                      <div className="d-flex align-items-center">
                        <img
                          src="https://media.istockphoto.com/id/1353379172/photo/cute-little-african-american-girl-looking-at-camera.jpg?s=612x612&w=0&k=20&c=RCOYytwS2nMGfEb80oyeiCcIiqMQu6wnTluAaxMBye4="
                          alt="profile"
                          style={{
                            borderRadius: "50%",
                            width: "100px",
                            height: "100px",
                            objectFit: "cover",
                          }}
                        />
                        <span
                          style={{
                            opacity: "0.7",
                            paddingLeft: "20px",
                          }}
                        >
                          December 22, 2022 at 12:00 PM
                        </span>
                      </div>

                      {/* Rating */}
                      <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                    </div>

                    {/* Text */}
                    <span
                      style={{
                        color: "green",
                        display: "block",
                        marginTop: "10px",
                      }}
                    >
                      some text
                    </span>

                    <p className="mt-2">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet maxime
                      saepe similique. Voluptatem reiciendis porro fuga exercitationem sint
                      vero laborum, nulla accusantium quia fugiat mollitia a, aspernatur
                      veniam saepe modi.
                    </p>
                  </div>
                ))}

                {/* Add Review Form */}
                <div className="mt-4">
                  <h4>Add a Review</h4>
                  <Rating />

                  <div className="mt-3">
                    <textarea
                      className="form-control"
                      name="comments"
                      placeholder="Write Comments"
                      style={{ height: "200px" }}
                    ></textarea>
                  </div>

                  <div className="row">
                    <div className="col mt-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                      />
                    </div>
                    <div className="col mt-3">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                  </div>

                  <div className="mt-3">
                    <Button variant="contained" color="success">
                      Submit Review
                    </Button>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="col-md-4">
                <h3>Customer Reviews</h3>
                <Rating name="half-rating" defaultValue={4} precision={0.5} />
                <strong>4.8 out of 5</strong>
                <span>5 Star</span>
                <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                  <div class="progress-bar" style="width: 25%">25%</div>
                </div>
              </div>
            </div>



          }







        </div>
      </div>

    </>
  );
};

export default Details;
