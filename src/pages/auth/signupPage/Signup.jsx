import React, { useState } from 'react'
import './signup.css'
import FormGroup from "../../../components/formGroup/FormGroup";
import { Link } from 'react-router-dom'
export default function Signup() {
  const [error, setError] = useState({})
  const [success, setSuccess] = useState(false)
  const [signupData, setSignupData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    companyNumber: '',
    email: '',
    phone: '',
    password: '',
    passwordConfirmation: '',

  })

  const handleChange = (e) => {
    const { id, value } = e.target
    setSignupData((prevData) => ({
      ...prevData,
      [id]: value
    }))
  }

  const validateForm = (formData, setError) => {
    const errors = {};

    // Check for empty fields
    for (const key in signupData) {
      if (!signupData[key]) {
        errors[key] = 'الرجاء ملء هذا الحقل';
      }
    }

    // Check email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (signupData.email && !emailRegex.test(signupData.email)) {
      errors.email = 'البريد الإلكتروني غير صحيح';
    }

    // Check password length
    if (signupData.password.length < 6) {
      errors.password = 'يجب أن تكون كلمة المرور على الأقل 6 أحرف';
    }

    // Check password confirmation
    if (signupData.password !== signupData.passwordConfirmation) {
      errors.passwordConfirmation = 'كلمة المرور غير متطابقة';
    }

    setError(errors);

    return Object.keys(errors).length === 0;

  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const valid = validateForm(signupData, setError)
    
    if(valid){
      setSuccess(true)
      setError({})
    }

  }
  return (
    <main className="wrapper">
    <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
      <div className="form-title">
        <h1>انشاء حساب</h1>
      </div>

    {/* show a success message if the user created account successfully */}
    {success &&
      <div className="success-message">
        <p>تم انشاء الحساب نجاح ✅</p>
      </div>
      }

      <div className="row">
        <FormGroup label={'الاسم الاول'} value={signupData.firstName} error={error.firstName} onChange={(e) => handleChange(e)} type="text" id="firstName" />
        <FormGroup label={'الاسم الاخير'} value={signupData.lastName} error={error.lastName} onChange={(e) => handleChange(e)} type="text" id="lastName" />

      </div>

      <div className="row">
        <FormGroup label={'اسم الشركة'} value={signupData.companyName} error={error.companyName} onChange={(e) => handleChange(e)} type="text" id="companyName" />
        <FormGroup label={'رقم السجل التجاري'} value={signupData.companyNumber} error={error.companyNumber} onChange={(e) => handleChange(e)} type="number" id="companyNumber" />
      </div>

      <div className="row">
        <FormGroup label={'البريد الالكتروني'} value={signupData.email} error={error.email} onChange={(e) => handleChange(e)} type="email" id="email" />
        <FormGroup label={'رقم الجوال'} value={signupData.phone} error={error.phone} onChange={(e) => handleChange(e)} type="text" id="phone" />
      </div>

      <div className="row">
        <FormGroup label={"كلمة المرور"} value={signupData.password} error={error.password} onChange={(e) => handleChange(e)} type="password" id="password" />
        <FormGroup label={"تأكيد كلمة المرور"} value={signupData.passwordConfirmation} error={error.passwordConfirmation} onChange={(e) => handleChange(e)} type="password" id="passwordConfirmation" />
      </div>

      <button className='create-account-btn'>انشاء حساب</button>
      <Link to="/Login" >تسجيل دخول </Link>
    </form>
  </main>
  )
}
