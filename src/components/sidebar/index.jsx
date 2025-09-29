import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Button from '@mui/material/Button';


function valuetext(value) {
    return `${value}°C`;
}

const Index = () => {
    const [value, setValue] = React.useState([20, 37]); // <-- state moved here

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <div className="my-4">
                <div className="m-box">
                    <h4>Categories</h4>

                    {[1, 2, 3, 4].map((item) => (
                        <div
                            key={item}
                            className="d-flex shadow align-items-center my-2 p-2"
                            style={{ border: "1px solid rgba(0, 0, 0, 0.2)" }}
                        >
                            <div className="img">
                                <img
                                    src="https://api.spicezgold.com/download/file_1734525204708_fash.png"
                                    alt=""
                                    width={"40%"}
                                />
                            </div>
                            <div className="next">
                                <p>
                                    <Link to="#">Milk & Dairy</Link>
                                </p>
                            </div>
                            <div className="last" style={{ marginLeft: "auto" }}>
                                <div
                                    className="r-box"
                                    style={{
                                        backgroundColor: "rgb(135, 219, 180)",
                                        color: "white",
                                        padding: "5px",
                                        borderRadius: "100%",
                                    }}
                                >
                                    <span>30</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="border mt-3" style={{ border: "1px solid rgba(0, 0, 0, 0.2)", padding: "10px" }}>
                    <div className="m-boxx my-4">
                        <h4>Filter by price</h4>
                        <Box sx={{ width: 300 }}>
                            <Slider
                                getAriaLabel={() => "Temperature range"}
                                value={value}                     // <-- use state
                                onChange={handleChange}
                                valueLabelDisplay="auto"
                                getAriaValueText={valuetext}
                            />
                        </Box>
                    </div>
                    <div className="lign" style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                        <div>
                            <span>From: </span>
                            <span style={{ color: "green", fontWeight: "bold" }}>{value[0]}</span>
                        </div>
                        <div>
                            <span>From: </span>
                            <span style={{ color: "green", fontWeight: "bold" }}>{value[1]}</span>
                        </div>
                    </div>

                    <div className="color">
                        <h4>Color</h4>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="" />
                            <label class="form-check-label" for=""> Red (36) </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="" />
                            <label class="form-check-label" for=""> Green (57)</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="" />
                            <label class="form-check-label" for=""> Blue (82) </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="" />
                            <label class="form-check-label" for=""> Red (36) </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="" />
                            <label class="form-check-label" for=""> Green (57)</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="" />
                            <label class="form-check-label" for=""> Blue (82) </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="" />
                            <label class="form-check-label" for=""> Red (36) </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="" />
                            <label class="form-check-label" for=""> Green (57)</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="" />
                            <label class="form-check-label" for=""> Blue (82) </label>
                        </div>




                    </div>

                    <div className="color my-5">
                        <h4>Item Condition</h4>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="" />
                            <label class="form-check-label" for=""> Red (36) </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="" />
                            <label class="form-check-label" for=""> Green (57)</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="" />
                            <label class="form-check-label" for=""> Blue (82) </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="" />
                            <label class="form-check-label" for=""> Red (36) </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="" />
                            <label class="form-check-label" for=""> Green (57)</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="" />
                            <label class="form-check-label" for=""> Blue (82) </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="" />
                            <label class="form-check-label" for=""> Red (36) </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="" />
                            <label class="form-check-label" for=""> Green (57)</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="" />
                            <label class="form-check-label" for=""> Blue (82) </label>
                        </div>




                    </div>

                    <Button variant="contained" color="success" style={{ width: "100%" }}>
                        Success
                    </Button>
                </div>
            </div>
        </>
    );
};

export default Index;
