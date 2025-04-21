import { useState } from "react"
import { LoginForm } from "../../components/Forms/LoginForm";
import { RegisterForm } from "../../components/Forms/RegisterForm";
import { login, register } from "../../utils/authUtils";
import { useNavigate } from "react-router-dom";

export const UserAuthView = () => {
    const [formType, setFormType] = useState("login");
    const navigate = useNavigate();

    const handleLogin = (email, password) => {
        const res = login(email, password);
        if (res) {
            navigate("/habits", { replace: true });
        } else {
            console.log("show error");
        }
    }

    const handleRegister = (email, password) => {
        const res = register(email, password);
        if (res) {
            console.log("error: user already exists");
        } else {
            navigate("/habits", { replace: true });
        }
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