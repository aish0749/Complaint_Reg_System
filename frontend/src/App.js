import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Start from "./pages/Start";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";
import SignUp from "./pages/SignUp";
import UserLogin from "./pages/UserLogin";
import AdminLogin from "./pages/AdminLogin"
function App() {
  return (
  <div className="App">
    <Router>
    
    <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/getStarted" element={<Start />} exact />
            <Route path="/aboutUs" element={<About />} exact />
            <Route path="/signUp" element={<SignUp />} exact />
            <Route path="/userLogin" element={<UserLogin />} exact />
            <Route path="/adminLogin" element={<AdminLogin />} exact />


            <Route path="*" element={<PageNotFound />} />
          </Routes>
    </Router>
    </div>
  );
}

export default App;
