import React from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../helpers/auth";



const AdminRoute = ({ children }) => {

    return (
        isAuthenticated() && isAuthenticated().role === 1 ? (
            children
        ) : (
            <Navigate to="/login" />
        )
    );

}

export default AdminRoute;
