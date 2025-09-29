// 404page/index.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'
const NotFound = () => {
  return (
    <>
    <div className="img-box">
      <img 
        src="https://wpklik.com/wp-content/uploads/2019/03/A-404-Page-Best-Practices-and-Design-Inspiration.jpg" 
        alt="404 Not Found" 
        style={{ maxWidth: "600px", width: "100%", borderRadius: "10px" }}
      />

      </div>

      <div style={{ textAlign: "center" }}>
      <h1 style={{ marginTop: "20px", fontSize: "2rem", color: "#333" }}>
        Oops! Page Not Found
      </h1>
      <p style={{ color: "#777", fontSize: "1.1rem" }}>
        The page you are looking for doesn’t exist or has been moved.
      </p>


      <Link to="/" style={{ 
        display: "inline-block", 
        marginTop: "20px", 
        padding: "10px 20px", 
        backgroundColor: "Green", 
        color: "white", 
        borderRadius: "5px", 
        textDecoration: "none" 
      }}>
        Go Back Home
      </Link>
      </div>
    </>
  )
}

export default NotFound;
