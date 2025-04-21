import { useState } from "react";

export const RegisterForm = () => {
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
        submitFunc();
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
                <button>Register</button>
            </form>
    )
}