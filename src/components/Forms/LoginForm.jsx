import { useState } from "react";

export const LoginForm = ({submitFunc}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleChange = (e) => {
        if (e.target.name === "email") {
            setEmail(e.target.value);
        } else {
            setPassword(e.target.value);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email) {
            console.log("please enter your email");
        }
        if (!password) {
            console.log("please enter your password");
        }
        if (email && password) {
            submitFunc(email, password);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
                <fieldset>
                    <label htmlFor="email">Email:</label>
                    <input name="email" type="text" onChange={handleChange} value={email}></input>
                </fieldset>
                <fieldset>
                    <label htmlFor="password">Password:</label>
                    <input name="password" type="password" onChange={handleChange} value={password}></input>
                </fieldset>
                <button>Login</button>
            </form>
    )
}