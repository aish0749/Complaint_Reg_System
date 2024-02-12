import React from 'react'
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <>
    <nav>
    <img src={logo} alt="logo" height="80px" width="80px"/>
    <h1>Complaint System</h1>
    <div class="nav">
        <Link to="/getStarted" className="btn">Get Started</Link>
        
        <Link to="/" className="btn">Home</Link>

    </div>
    
    </nav>
    <div class="container3">
    <h1>404 Not found :(</h1>

    </div>
    </>
  )
}

export default PageNotFound