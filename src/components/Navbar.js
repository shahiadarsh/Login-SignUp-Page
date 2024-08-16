import React from "react";
import logo from "../assets/Logo.svg"
import { Link } from "react-router-dom";
import toast from "react-hot-toast";


const Navbar = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;

    return (
        <div className="flex gap-3 justify-between w-11/12 max-w-[1160px] items-center py-4 mx-auto">
                <Link to="/">
                    <img src={logo} alt="logo" width={160} height={32} loading="lazy"/>
                </Link>


                <nav>
                    <ul className="flex gap-x-6 text-richblack-100">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/">About</Link>
                        </li>
                        <li>
                            <Link to="/">Contact</Link>
                        </li>

                    </ul>
                </nav>

                {/* login signup logout signin */}

                <div className="flex gap-x-4 items-center ">
                    { !isLoggedIn &&
                        <Link to="/login">
                            <button className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] 
                            rounded-[8px] border border-richblack-700">
                                Login
                            </button>
                        </Link>
                    }
                    {  !isLoggedIn &&
                        <Link to="/signup">
                            <button className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] 
                            rounded-[8px] border border-richblack-700">
                                Sign Up
                            </button>
                        </Link>
                    }
                    {   isLoggedIn &&
                        <Link to="/">
                            <button onClick={() => {
                                setIsLoggedIn(false);
                                toast.success("Logged Out")
                            }} className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] 
                            rounded-[8px] border border-richblack-700">
                                Logout
                            </button>
                        </Link>
                    }
                    {  isLoggedIn &&
                        <Link to="/dashboard">
                            <button className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] 
                            rounded-[8px] border border-richblack-700">
                                DashBoard
                            </button>
                        </Link>
                    }

                </div>
        </div>
    )
}



export default Navbar;