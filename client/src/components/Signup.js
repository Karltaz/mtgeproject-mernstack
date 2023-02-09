

import React, { useState, useEffect } from "react";
import "./App.css";
import { Link, useNavigate } from "react-router-dom";
import isEmail from 'validator/lib/isEmail';
import isEmpty from 'validator/lib/isEmpty';
import equals from 'validator/lib/equals';
import { showErrorMsg } from "../helpers/message";
import { showSuccessMsg } from "../helpers/message";
import { showLoading } from "../helpers/loading";
import { signup } from "../api/auth";
import { isAuthenticated } from "../helpers/auth";



const Signup = () => {

    let navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated() && isAuthenticated().role === 1) {
            navigate("/admin/dashboard");

        } else if (isAuthenticated() && isAuthenticated().role === 0) {
            navigate("/user/dashboard");
        }


    })

    // Events Handler
    const handleChange = (evt) => {
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value,
            errorMsg: "",
            successMsg: ""
        })
    }
    const handleSubmit = (evt) => {
        evt.preventDefault();

        //    client side validation 

        if (isEmpty(username) || isEmpty(email) || isEmpty(password) || isEmpty(password2)) {
            setFormData({
                ...formData, errorMsg: " All fields are required"
            })
        } else if (!isEmail(email)) {
            setFormData({
                ...formData, errorMsg: " Invalid email"
            })
        }
        else if (!equals(password, password2)) {
            setFormData({
                ...formData, errorMsg: "Passwords do not match"
            })
        }
        else {
            const { username, email, password } = formData;
            const data = { username, email, password };

            setFormData({ ...formData, loading: true });

            signup(data)
                .then((response) => {
                    console.log(" Axios signup success", response);
                    setFormData({
                        username: "",
                        email: "",
                        password: "",
                        password2: "",
                        loading: false,
                        successMsg: response.data.successMessage

                    })


                })
                .catch((err) => {
                    console.log("Axios signup error:", err);
                    setFormData({
                        ...formData, loading: false,
                        errorMsg: err.response.data.errorMessage
                    })

                })
        }
    }
    // setup component state

    const [formData, setFormData] = useState({
        username: "cassongm",
        email: "c.assongmo@mt-ge.com",
        password: "abc123",
        password2: "abc123",
        successMsg: false,
        errorMsg: false,
        loading: false
    });
    //   destructure state
    const {
        username,
        email,
        password,
        password2,
        successMsg,
        errorMsg,
        loading

    } = formData;
    // create a signup form that will help the users to register to our website 

    const showSignupForm = () => (

        <form className="signup-form" onSubmit={handleSubmit} noValidate>





            {/*    username */}

            <div className="input-group mb-3 ">
                <span className="input-group-text">
                    <i className="fa-solid fa-user"></i>
                </span>

                <input
                    name="username"
                    value={username}
                    className="form-control"
                    placeholder="Username"
                    type="text"
                    onChange={handleChange}
                />
            </div>

            {/*    email */}

            <div className="input-group mb-3 ">
                <span className="input-group-text">
                    <i className="fa-solid fa-envelope"></i>
                </span>

                <input
                    name="email"
                    value={email}
                    className="form-control"
                    placeholder="Email address"
                    type="email"
                    onChange={handleChange}
                />
            </div>

            {/*    password */}

            <div className="input-group mb-3">
                <span className="input-group-text">
                    <i className="fa-solid fa-lock"></i>

                </span>

                <input
                    name="password"
                    value={password}
                    className="form-control"
                    placeholder=" Create password"
                    type="password"
                    onChange={handleChange}
                />
            </div>


            {/*    password2 */}

            <div className="input-group mb-3">
                <span className="input-group-text">
                    <i className="fa-solid fa-lock"></i>
                </span>

                <input
                    name="password2"
                    value={password2}
                    className="form-control"
                    placeholder="Confirm password"
                    type="password"
                    onChange={handleChange}
                />
            </div>

            {/* signup button */}
            <div className="d-grid gap-2 col-6 mx-auto " >
                <button type="submit" className="btn btn-danger btn-block ">
                    Register

                </button>
            </div>
            {/* already have account ? */}
            <p className="text-center text-white">
                Have an account ? <Link to="/login">Log in </Link>
            </p>

        </form>


    );

    // Render the  signup form in the frontend

    return (
        <div className="signup-container">
            <div className="row  px-4 vh-100">
                <div className="col-md-5 mx-auto align-self-center ">
                    {errorMsg && showErrorMsg(errorMsg)}
                    {successMsg && showSuccessMsg(successMsg)}
                    {loading && <div className="text-center pb-4">{showLoading()} </div>}


                    {showSignupForm()}
                </div>
            </div>

        </div>
    );

}

export default Signup;