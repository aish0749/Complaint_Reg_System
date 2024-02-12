import React from "react";
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";
import "../App.css";
const SignUp = () => {
  return (
    <>
      <nav>
        <img src={logo} alt="logo" height="80px" width="80px" />
        <h1>Complaint System</h1>
        <div class="nav">
          <Link to="/getStarted" className="btn">
            Back
          </Link>
          <Link to="/" className="btn">
            Home
          </Link>
        </div>
      </nav>
      <div class="user_login">
        <div class="heading">
          <h2>Sign Up</h2>
          <h3>Enter the following details to create a new account</h3>
        </div>
        <div class="form">
          <label for="name">Name : </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Siddhant"
            autocomplete="on"
            required
          />
          <label for="email">Email ID : </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="xyz@gmail.com"
            autocomplete="on"
            required
          />
          <label for="password">Password : </label>
          <input type="password" name="password" id="password" required />
          <label for="passwordConfirm">Confirm Password : </label>
          <input
            type="password"
            name="passwordConfirm"
            id="passwordConfirm"
            required
          />
          <button class="btn">Sign Up</button>
        </div>
        <p>Already a user ? <Link to="userLogin">Login</Link></p>
      </div>
    </>
  );
};

export default SignUp;
