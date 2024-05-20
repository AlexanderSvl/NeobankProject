import React, {useState} from "react";
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import './loginPage.css'
import TypingAnimation from "react-typed";
import { login } from '../../services/authenticationService';
import { useNavigate } from 'react-router-dom';

function LoginComponent() {
    const navigate = useNavigate();

    const linkStyle = {
        margin: "1rem",
        textDecoration: "none",
        color: 'blue'
    };

    const [inputFields,
        setInputFields] = useState({email: "", password: ""});

    const [errors,
        setError] = useState({emailError: "", passwordError: "", isButtonDisabled: false});

    function validate(name, value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}[\]:;<>,.?/~]).{8,}$/;

        if (name == "email") {
            !emailRegex.test(value)
                ? setError({
                    ...errors,
                    emailError: "Email is invalid.",
                    isButtonDisabled: true
                })
                : setError({
                    ...errors,
                    emailError: "",
                    isButtonDisabled: false // propusnata huinq
                })
        } else if (name == "password") {
            !passwordRegex.test(value)
                ? setError({
                    ...errors,
                    passwordError: "Password is invalid: Minimum 8 characters with at least one uppercase letter, on" +
                            "e lowercase letter, one digit and one special character.",
                    isButtonDisabled: true
                })
                : setError({
                    ...errors,
                    passwordError: "",
                    isButtonDisabled: false // propusnata huinq
                })
        };

        if (errors.passwordError == "" && errors.emailError == "") {
            errors.isButtonDisabled = false;
        }
    };

    const handleChange = (e) => {
        setInputFields({
            ...inputFields,
            [e.target.name]: e.target.value
        });

        validate(e.target.name, e.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await login(inputFields.email, inputFields.password, navigate, setError);
    };

    return (
        <div>
            <div className="head-container">
                <h1 className="head">Log in</h1>
                <Link to="/register" style={linkStyle}>
                    <TypingAnimation
                        className="head2"
                        strings={["Don't have an account ? Sign up here."]}
                        typeSpeed={50}
                        startDelay={300}
                        showCursor={true}/>
                </Link>
            </div>
            <div className="form-container">
                <form className="form" onSubmit={handleSubmit}>
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

                    <div className="button-container">
                        {errors.isButtonDisabled
                            ? <button type="button" className="submit-button">Submit</button>
                            : <button type="submit" className="submit-button">Submit</button>
                        }
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginComponent;