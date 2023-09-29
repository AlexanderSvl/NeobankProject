import React, {useState} from "react";
import '../styles/register.css'

function Register() {
    const [firstName,
        setFirstName] = useState("");
    const [lastName,
        setLastName] = useState("");
    const [email,
        setEmail] = useState("");
    const [password,
        setPassword] = useState("");

    return (
        <div className="main-container">
            <div className="head-container">
                <h1 className="head">Sign up</h1>
            </div>
            <div className="form-container">
                <form className="register-form">
                    <input
                        className="register-form-input"
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                        placeholder="First name"
                        type="text"
                        name="firstName"
                        required/>
                    <input
                        className="register-form-input"
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                        placeholder="Last name"
                        type="text"
                        name="lastName"
                        required/>
                    <input
                        className="register-form-input"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Email address"
                        type="email"
                        name="email"
                        required/>
                    <input
                        className="register-form-input"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder="Password"
                        type="password"
                        name="password"
                        required/>

                    <div className="button-container">
                        <button type="submit" className="submit-button">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register;