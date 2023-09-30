import React, {useState} from "react";
import '../styles/register.css'

function Register() {
    const [inputFields,
        setInputFields] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        repeatPassword: "",
    });

    const handleChange = (e) => {
        setInputFields({
            ...inputFields,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputFields);
    };

    return (
        <div className="main-container">
            <div className="head-container">
                <h1 className="head">Sign up</h1>
            </div>
            <div className="form-container">
                <form className="register-form" onSubmit={handleSubmit}>
                    <input
                        className="register-form-input"
                        value={inputFields.firstName}
                        onChange={handleChange}
                        placeholder="First name"
                        type="text"
                        name="firstName"
                        required/>
                    <input
                        className="register-form-input"
                        value={inputFields.lastName}
                        onChange={handleChange}
                        placeholder="Last name"
                        type="text"
                        name="lastName"
                        required/>
                    <input
                        className="register-form-input"
                        value={inputFields.email}
                        onChange={handleChange}
                        placeholder="Email address"
                        type="email"
                        name="email"
                        required/>
                    <input
                        className="register-form-input"
                        value={inputFields.password}
                        onChange={handleChange}
                        placeholder="Password"
                        type="password"
                        name="password"
                        required/>
                    <input
                        className="register-form-input"
                        value={inputFields.password}
                        onChange={handleChange}
                        placeholder="Repeat password"
                        type="password"
                        name="repeat-password"
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