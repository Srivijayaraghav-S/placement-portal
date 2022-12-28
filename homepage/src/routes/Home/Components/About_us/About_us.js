import React from "react";
import "./About_us.css";

const About_us = () => {
  return (
    <>
      <div>
        <h1>About NITT</h1>
        <br />
        <p className="about-text">
          The National Institute of Technology (formerly known as Regional
          Engineering College) Tiruchirappalli, situated in the heart of Tamil
          Nadu on the banks of river Cauvery, was started as a joint and
          co-operative venture of Government of India and Government of Tamil
          Nadu during 1964 with a view to catering to the needs of man-power in
          technology for the Country.
          <br />
          <br />
          With students drawn from all the States of our Country and faculty
          recruited through open advertisement throughout the Country, the
          Institution has an all India character. Ever since its establishment,
          the institution has registered speedy progress and it now offers Under
          Graduate Courses in ten branches and Post Graduate Courses in twenty
          one disciplines of Science, Engineering & Technology besides Ph.D. in
          all the departments.
        </p>
      </div>
      <div className="why-recruit">
           <p className="why-title"> Why recruit at NITT</p> 
           <div className="why-flex-col">
           <div className="why-flex-cols">8 <br/><span className="small-text">ranking</span></div>
           <div className="why-flex-cols">220+ <br/><span className="small-text">companies</span></div>
            <div className="why-flex-cols">Elite<br/> <span className="small-text">alumni</span></div>
            </div>
      </div>
    </>
  );
};

export default About_us;