import React from "react";
import signupImg from "../assets/signup.png"
import Templates from "../components/Templates";


const SignUp = ({setIsLoggedIn}) => {
    return (
        <div>

            <Templates
                title="Welcome Back"
                desc1="Build skill for Today, Tomorrow and beyond"
                desc2="Education is future-proof your career"
                image={signupImg}
                formtype="signup"
                setIsLoggedIn={setIsLoggedIn}
            />

        </div>
    )
}



export default SignUp;