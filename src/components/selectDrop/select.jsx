import React, { useState } from "react";
import "../selectDrop/select.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ClickAwayListener from "@mui/material/ClickAwayListener";

const Select = ({ items = [], defaultItem = "" }) => {
  const [show, setShow] = useState(false);
  const [selectindex, setSelectIndex] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [selectedItem, setSelectedItem] = useState(defaultItem);

  // handle Enter key press in input
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setShow(false);
    }
  };

  const closeSelect = (index, name) => {
    setSelectIndex(index);
    setSelectedItem(name);
    setShow(false);
    setInputValue(""); // reset search after selection
  };

  // Filter items by input value
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <ClickAwayListener onClickAway={() => setShow(false)}>
      <div className="selectDrop cursor">
        {/* Toggle button */}
        <span className="big-fount" onClick={() => setShow(!show)}>
          {selectedItem} <KeyboardArrowDownIcon className="arrowIcon" />
        </span>

        {show && (
          <div className="selectDdrop">
            <div className="searchFild">
              <input
                type="text"
                placeholder="Search..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                autoFocus
              />

              <ul className="dropList">
                {filteredItems.length > 0 ? (
                  filteredItems.map((item, index) => (
                    <li
                      key={index}
                      onClick={() => closeSelect(index, item)}
                      className={selectindex === index ? "active" : ""}
                    >
                      {item}
                    </li>
                  ))
                ) : (
                  <li className="no-result">No results found</li>
                )}
              </ul>
            </div>
          </div>
        )}
      </div>
    </ClickAwayListener>
  );
};

export default Select;
