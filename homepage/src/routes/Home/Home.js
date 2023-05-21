import React from "react";
import "./Home.css";
import NavBar from "../NavBar/NavBar";
import Login from './Components/Login/Login';
import AboutUs from "./Components/AboutUs/About_us";
import Footer from "../Footer/Footer";
import Recruitment from "./Components/Recruitment/Recruitment";

const Home=()=>
{
    return(
        <>
        <NavBar/>
        <Login/>
        <AboutUs/>
        <Recruitment/>
        <Footer/>
        </>

    );
}

export default Home;