import React from "react";
import Templates from "../components/Templates";
import loginImg from "../assets/login.png"


const Login = ({setIsLoggedIn}) => {
    return (
        <div className="h-full w-screen">

            <Templates
            title="Welcome Back"
            desc1="Build skill for Today, Tomorrow and beyond"
            desc2="Education is future-proof your career"
            image={loginImg}
            formtype="login"
            setIsLoggedIn={setIsLoggedIn}
            />

        </div>
    )
}



export default Login;