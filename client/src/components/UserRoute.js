import React from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../helpers/auth";



const UserRoute = ({ children }) => {

    return (
        isAuthenticated() && isAuthenticated().role === 0 ? (
            children
        ) : (
            <Navigate to="/login" />
        )
    );

}

export default UserRoute;