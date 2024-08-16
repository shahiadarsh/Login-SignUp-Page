import React from "react";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({isLoggedIn,children}) => {
    // if(isLoggedIn==true){
    //      {children}
    // }
    // else{
    //     { <Navigate to="/login" />}
    // }
    return (
        <div>
            {isLoggedIn ? children : <Navigate to="/login" />}
        </div>
    )
}


export default PrivateRoute;