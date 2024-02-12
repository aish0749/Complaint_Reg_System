import React from 'react'
import logo from "../assets/logo.jpg";
import { Link } from 'react-router-dom';
import "../App.css";

const UserLogin = () => {
  return (
    <>
        <nav>
        <img src={logo} alt="logo" height="80px" width="80px"/>
        <h1>Complaint System</h1>
        <div class="nav">
            <Link to="/" className='btn'>Home</Link>   
            <Link to="/getStarted" className='btn'>Back</Link>   
        </div>
    </nav>
    <div class="user_login">
        <div class="heading">
            <h2>Login</h2>
            <h3><center>Login with registered user id and password</center></h3>
        </div>
        <div class="form">
            
                
                    <label for="email">Email : </label>
                    <input type="text" name="email" id="email" placeholder="212@HEX1" autocomplete="on" required/>
                
                
                    <label for="password">Password : </label>
                    <input type="password" name="password" id="password"required/>
                
                <button class="btn">Login</button>
            
            
            
            <p>New User ? <Link to="/signUP">Sign Up</Link> now!</p>
        </div>
    </div>
    </>
  )
}

export default UserLogin