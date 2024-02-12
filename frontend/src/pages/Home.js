import React from 'react'
import logo from "../assets/logo.jpg";
import image1 from "../assets/image 1.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
    <nav>
        <img src={logo} alt="logo" height="80px" width="80px"/>
        <h1>Complaint System</h1>
        <div class="nav">
            <Link to="/getStarted" className="btn">Get Started</Link>
            
            <Link to="/aboutUs" className="btn">About Us</Link>

        </div>
        
    </nav>
    <div class="container">
        <div class="center">
            <h1>Handling customer complaints is easier now.</h1>
            <img src={image1} alt="Customer_image"/>
        </div>
        
    </div>
    <div class="container2">
        <h2>What is Complaint Management System?</h2>
        <p>Complaint management is the process of handling, managing, responding to, and reporting customer grievances. This process requires a streamlined approach and constant monitoring to ensure faster resolutions.</p>

    </div>
    <div class="container3">
        <h1>Save time, manage effort, and optimize productivity using intuitive Automations</h1>

    </div>
    </>
  );
}

export default Home