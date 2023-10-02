import React, {useState} from "react";
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import '../styles/register.css'
import TypingAnimation from "react-typed";

function RegisterComponent() {
    const linkStyle = {
        margin: "1rem",
        textDecoration: "none",
        color: 'blue'
    };

    const [inputFields,
        setInputFields] = useState({firstName: "", lastName: "", email: "", password: "", repeatPassword: ""});

    const [errors,
        setError] = useState({firstNameError: "", lastNameError: "", emailError: "", passwordError: "", repeatPasswordError: ""});

    function validate(name, value) {
        const nameRegex = /^[A-Za-z]{2,}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}[\]:;<>,.?/~]).{8,}$/;

        if (name == "firstName") {
            !nameRegex.test(value)
                ? setError({
                    ...errors,
                    ["firstNameError"]: "First name is invalid."
                })
                : setError({
                    ...errors,
                    ["firstNameError"]: ""
                })
        } else if (name == "lastName") {
            !nameRegex.test(value)
                ? setError({
                    ...errors,
                    ["lastNameError"]: "Last name is invalid."
                })
                : setError({
                    ...errors,
                    ["lastNameError"]: ""
                })
        } else if (name == "email") {
            !emailRegex.test(value)
                ? setError({
                    ...errors,
                    ["emailError"]: "Email is invalid."
                })
                : setError({
                    ...errors,
                    ["emailError"]: ""
                })
        } else if (name == "password") {
            !passwordRegex.test(value)
                ? setError({
                    ...errors,
                    ["passwordError"]: "Password is invalid: Minimum 8 characters with at least one uppercase letter, on" +
                            "e lowercase letter, one digit and one special character.                    "
                })
                : setError({
                    ...errors,
                    ["passwordError"]: ""
                })
        } else if (name == "repeatPassword") {
            value != inputFields.password
                ? setError({
                    ...errors,
                    ["repeatPasswordError"]: "Passwords do not match."
                })
                : setError({
                    ...errors,
                    ["repeatPasswordError"]: ""
                })
        };
    };

    const handleChange = (e) => {
        setInputFields({
            ...inputFields,
            [e.target.name]: e.target.value
        });

        validate(e.target.name, e.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputFields);
    };

    return (
        <div className="main-container">
            <div className="head-container">
                <h1 className="head">Sign up</h1>
                <Link to="/login" style={linkStyle}>
                    <TypingAnimation
                        className="head2"
                        strings={["Already have an account ? Login here."]}
                        typeSpeed={50}
                        startDelay={1000}
                        showCursor={true}/>
                </Link>
            </div>
            <div className="form-container">
                <form className="form" onSubmit={handleSubmit}>
                    <input
                        className="form-input"
                        value={inputFields.firstName}
                        onChange={handleChange}
                        placeholder="First name"
                        type="text"
                        name="firstName"
                        required
                        style={{
                        borderColor: errors.firstNameError != ""
                            ? "red"
                            : "white",
                        border: errors.firstNameError != ""
                            ? "3px solid red"
                            : "white"
                    }}/>

                    <div
                        style={{
                        display: errors.firstNameError != ""
                            ? "block"
                            : "none",
                        color: "red",
                        textAlign: "center",
                        marginBottom: "0.7rem"
                    }}>{errors.firstNameError}</div>

                    <input
                        className="form-input"
                        value={inputFields.lastName}
                        onChange={handleChange}
                        placeholder="Last name"
                        type="text"
                        name="lastName"
                        required
                        style={{
                        borderColor: errors.lastNameError != ""
                            ? "red"
                            : "white",
                        border: errors.lastNameError != ""
                            ? "3px solid red"
                            : "white"
                    }}/>

                    <div
                        style={{
                        display: errors.lastNameError != ""
                            ? "block"
                            : "none",
                        color: "red",
                        textAlign: "center",
                        marginBottom: "0.7rem"
                    }}>{errors.lastNameError}</div>

                    <input
                        className="form-input"
                        value={inputFields.email}
                        onChange={handleChange}
                        placeholder="Email address"
                        type="email"
                        name="email"
                        required
                        style={{
                        borderColor: errors.emailError != ""
                            ? "red"
                            : "white",
                        border: errors.emailError != ""
                            ? "3px solid red"
                            : "white"
                    }}/>

                    <div
                        style={{
                        display: errors.emailError != ""
                            ? "block"
                            : "none",
                        color: "red",
                        textAlign: "center",
                        marginBottom: "0.7rem"
                    }}>{errors.emailError}</div>

                    <input
                        className="form-input"
                        value={inputFields.password}
                        onChange={handleChange}
                        placeholder="Password"
                        type="password"
                        name="password"
                        required
                        style={{
                        borderColor: errors.passwordError != ""
                            ? "red"
                            : "white",
                        border: errors.passwordError != ""
                            ? "3px solid red"
                            : "white"
                    }}/>

                    <div
                        style={{
                        display: errors.passwordError != ""
                            ? "block"
                            : "none",
                        color: "red",
                        textAlign: "center",
                        marginBottom: "0.7rem"
                    }}>{errors.passwordError}</div>

                    <input
                        className="form-input"
                        value={inputFields.repeatPassword}
                        onChange={handleChange}
                        placeholder="Repeat password"
                        type="password"
                        name="repeatPassword"
                        required
                        style={{
                        borderColor: errors.repeatPasswordError != ""
                            ? "red"
                            : "white",
                        border: errors.repeatPasswordError != ""
                            ? "3px solid red"
                            : "white"
                    }}/>

                    <div
                        style={{
                        display: errors.repeatPasswordError != ""
                            ? "block"
                            : "none",
                        color: "red",
                        textAlign: "center",
                        marginBottom: "0.7rem"
                    }}>{errors.repeatPasswordError}</div>

                    <div className="button-container">
                        <button type="submit" className="submit-button">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegisterComponent;