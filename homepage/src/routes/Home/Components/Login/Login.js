import React from "react";
import "./Login.css";


const Login=()=>{
    return (
        <div className="background">

            <div className="login-box">
                <div className="login">Login</div><br/>
                <button className="student-btn" value="Student">Students</button><br/>
                <button className="recruiter-btn" value="Recruiter">Recruiters</button>
            </div>
            <div className="we-care-box">
                <span className="we-care">We Care</span> <br></br>
                <span className="for-your">For Your Hire!</span>
            </div>
            
        </div>

    );
}

export default Login;