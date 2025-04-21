import { useState } from "react"
import { LoginForm } from "../../components/Forms/LoginForm";
import { RegisterForm } from "../../components/Forms/RegisterForm";

export const UserAuthView = () => {
    const [formType, setFormType] = useState("login");

    const handleLogin = () => {
        console.log("logging in...");
    }

    const handleRegister = () => {
        console.log("registering...");
    }

    const handleFormSelection = (e) => {
        const selectedForm = e.target.textContent.toLowerCase();
        setFormType(selectedForm);
    }

    return (
        <div>
            <h1>{formType === "login" ? "Login" : "Register"}</h1>
            {formType === "login" ? <LoginForm submitFunc={handleLogin}></LoginForm> : <RegisterForm submitFunc={handleRegister}></RegisterForm>}
            <button onClick={handleFormSelection}>{formType === "login" ? "Register" : "Login"}</button>
        </div>
    )
}