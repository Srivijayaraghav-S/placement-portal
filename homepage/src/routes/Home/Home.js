import React from "react";
import "./Home.css";
import NavBar from "../NavBar/NavBar";
import Login from './Components/Login/Login';
import About_us from "./Components/About_us/About_us";
import Footer from "../Footer/Footer";
import Recruitment from "./Components/Recruitment/Recruitment";

const Home=()=>
{
    return(
        <>
        <NavBar/>
        <Login/>
        <About_us/>
        <Recruitment/>
        <Footer/>
        </>

    );
}

export default Home;