import React, { useState, useEffect, useRef } from 'react';
import Button from '@mui/material/Button';
import './index.css';

const Index = ({ NamAction, menuItems = [] }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} style={{ position: 'relative', display: 'inline-block' }}>
      <Button
        style={{ color: 'black' }}
        variant="text"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        {NamAction}
      </Button>

      {showDropdown && menuItems.length > 0 && (
        <div className="drop-dwon-account">
          <ul>
            {menuItems.map((item, index) => (
              <li key={index}>
                <Button variant="text" onClick={() => setShowDropdown(false)}>
                  {item}
                </Button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Index;
