import React, { useState } from "react";
import "./login.css";
import FormGroup from "../../../components/formGroup/FormGroup";
import { Link } from "react-router-dom";
export default function Login() {
    const [error, setError] = useState({})
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });
    const handleChange = (e) => {
        const { id, value } = e.target;

        setLoginData((prevData) => ({
            ...prevData,
            [id]: value,

        }))

    }

    const validateForm = (formData, setError) => {
        if(formData.email === "" || formData.password === ""){
            if(formData.email === ""){
                setError((prev)=>({...prev, email:"* يجب كتابة البريد الالكتروني"}))
            }else{
                setError((prev)=>({...prev, email:""}))
            }
            if(formData.password === ""){
                setError((prev)=>({...prev, password:"* يجب كتابة كلمة المرور"}))
            }else{
                setError((prev)=>({...prev, password:""}))
            }
            return false
        }else{
            return true
        }
        
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        const valid = validateForm(loginData, setError);
        if(valid){
            setError({})
            setLoginData({email: "", password: ""})
            console.log(loginData);
        }

    }

  return (
    <main className="wrapper">
      <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
        <div className="form-title">
          <h1>تسجيل الدخول</h1>
        </div>

        <FormGroup label={"البريد الالكتروني"} type="email" id="email" error={error.email} value={loginData.email} onChange={(e) => handleChange(e)}/>
        <FormGroup label={"كلمة المرور"} type="password" id="password" error={error.password} value={loginData.password} onChange={(e) => handleChange(e)}/>

        <div className="forget-password">
            <Link to="#"> نسيت كلمة المرور؟</Link>
        </div>
        <button className="login-btn">تسجيل الدخول</button>

        <Link to="/Signup" >انشاء حساب</Link>
      </form>
    </main>
  );
}
