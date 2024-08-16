import "./App.css";
import Navbar from "./components/Navbar";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import DashBoard from "./Pages/DashBoard";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute";


function App() {


      const [isLoggedIn, setIsLoggedIn] = useState(false);

      return <div className="h-[700px] w-screen bg-richblack-900 flex flex-col ">
            <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

            <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
                  <Route path="/signup" element={<SignUp setIsLoggedIn={setIsLoggedIn} />} />
                  <Route path="/dashboard" element={
                        <PrivateRoute isLoggedIn={isLoggedIn}>
                              <DashBoard />
                        </PrivateRoute>
                  } />
        </Routes>

      </div>;
}

export default App;
