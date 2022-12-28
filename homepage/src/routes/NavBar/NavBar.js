import React from "react";
import "./NavBar.css";
import logo from "./Components/NITT Logo - White 1.png"

const NavBar=()=>{
return(
  <div className="navbar">
  <div className="navbar-left">
  <div className="logo">
    <img className="logo-img" src={logo} alt="logo"/>
  </div>
  <div className="title-text">NITT Placement Portal</div>
  </div>
   <ul>
  <li>Home</li>
  <li>Academics</li>
  <li>Past recruiters</li>
  <li>Contact us</li>
</ul>
    </div>
  
);
};
export default NavBar;