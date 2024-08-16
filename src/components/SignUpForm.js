import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useNavigate } from "react-router-dom";


const SignUpForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();

    const [accountType, setAccountType] = useState("");
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })


    const [showPassword, setShowPassword] = useState(false);

    function changeHandler(event) {
        setFormData((prevData) => (
            {
                ...prevData,
                [event.target.name]: event.target.value,
            }
        ))
    }

    function submitHandler(event) {
            event.preventDefault();
            if(formData.password !== formData.confirmPassword){
                toast.error("Password do not match");
                return;
            }

            setIsLoggedIn(true);
            toast.success("Account Created");

            // const accountData = (formData) =>{
            //     return {
            //         ...formData,
            //     }
            // }

            console.log("Printing the form Data");
            console.log(formData);
            navigate("/dashboard");
            
    }

    return (
        <div>

            {/* Student-Instructor tab */}

            <div className="flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max">
                <button className={`${accountType  === "student" 
                ? "bg-richblack-900 text-richblack-5" : "bg-transparent text-richblack-200"} py-2 px-5 
                    rounded-full transition-all duration-200`}
                 onClick={() => {setAccountType("student")}}>
                    Student
                </button>

                <button  className={`${accountType  === "instructor" 
                ? "bg-richblack-900 text-richblack-5" : "bg-transparent text-richblack-200"} py-2 px-5 
                    rounded-full transition-all duration-200`}
                 onClick={() => {setAccountType("instructor")}}>
                    Instructor
                </button>

            </div>

            <form onSubmit={submitHandler}>

                {/* firstName and lastName */}
                <div className="flex gap-x-4 mt-[20px]">
                    <label className="w-full mt-[20px]">
                        <p className="text-[0.875rem] text-richblack-5 leading-[1.375rem] mb-1">First Name <sup className="text-pink-200">*</sup></p>

                        <input
                            required
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            placeholder="Enter First Name"
                            onChange={changeHandler}
                            className="bg-richblack-800 text-richblack-5 rounded-[0.5rem] w-full p-[12px]"
                        />
                    </label>

                    <label className="w-full mt-[20px]">
                        <p className="text-[0.875rem] text-richblack-5 leading-[1.375rem] mb-1">Last Name <sup className="text-pink-200">*</sup></p>

                        <input
                            required
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            placeholder="Enter Last Name"
                            onChange={changeHandler}
                            className="bg-richblack-800 text-richblack-5 rounded-[0.5rem] w-full p-[12px]"
                        />
                    </label>
                </div>

                {/* email */}
                <div className="mt-[20px]">
                    <label className="w-full">
                        <p className="text-[0.875rem] text-richblack-5 leading-[1.375rem] mb-1">Email Address<sup className="text-pink-200">*</sup></p>

                        <input
                            required
                            type="text"
                            name="email"
                            value={formData.email}
                            placeholder="Enter Email Address"
                            onChange={changeHandler}
                            className="bg-richblack-800 text-richblack-5 rounded-[0.5rem] w-full p-[12px]"
                        />
                    </label>
                </div>

                {/* password and confirmPassword */}

                <div className="flex gap-x-4 mt-[20px]">
                    <label className="w-full relative">
                        <p className="text-[0.875rem] text-richblack-5 leading-[1.375rem] mb-1">Create Password <sup className="text-pink-200">*</sup></p>

                        <input
                            required
                            type={showPassword ? ("text") : ("password")}
                            name="password"
                            value={formData.password}
                            placeholder="Enter Password"
                            onChange={changeHandler}
                            className="bg-richblack-800 text-richblack-5 rounded-[0.5rem] w-full p-[12px]"
                        />

                        <span className="absolute right-3 top-[38px] cursor-pointer"
                         onClick={() => setShowPassword((prev) => !prev)}>
                            {
                                showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>) : (<AiOutlineEye fontSize={24} fill="#AFB2BF"/>)
                            }
                        </span>
                    </label>


                    <label className="w-full relative">
                        <p className="text-[0.875rem] text-richblack-5 leading-[1.375rem] mb-1">Confirm Password <sup className="text-pink-200">*</sup></p>

                        <input
                            required
                            type={showConfirmPassword ? ("text") : ("password")}
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            placeholder="Enter Confirm Password"
                            onChange={changeHandler}
                            className="bg-richblack-800 text-richblack-5 rounded-[0.5rem] w-full p-[12px]"
                        />

                        
                        <span className="absolute right-3 top-[40px] cursor-pointer" 
                        onClick={() => setShowConfirmPassword((prev) => !prev)}>
                            {
                                showConfirmPassword ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>) : (<AiOutlineEye fontSize={24} fill="#AFB2BF"/>)
                            }
                        </span>
                    </label>


                </div>


                <button className="bg-yellow-50  rounded-[8px] font-medium
                 text-richblack-900 px-[12px] py-[8px] mt-6 w-full">Create Account</button>
            </form>

            

        </div>
    )
}



export default SignUpForm;