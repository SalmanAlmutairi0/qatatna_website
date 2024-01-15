import React, { useState } from 'react'
import './profile.css'
import FormGroup from '../../components/formGroup/FormGroup'
import adsBackground from '../../assets/ads_background.svg'
export default function Profile() {
    const [error, setError] = useState({})
    const [updatedProfileData, setUpdatedProfileData] = useState({
        firstName: '',
        lastName: '',
    })

    const handleChange = (e) => {
        const { id, value } = e.target
        setUpdatedProfileData((prevData) => ({
          ...prevData,
          [id]: value
        }))
    }

    const validateForm = (formData, setError) => {

        if(formData.firstName === '' || formData.lastName === ''){
            if(formData.firstName === ''){
                setError((prev)=>({...prev, firstName:"* يجب كتابة الاسم الاول"}))
            }else{
                setError((prev)=>({...prev, firstName:""}))
            }
            if(formData.lastName === ''){
                setError((prev)=>({...prev, lastName:"* يجب كتابة الاسم الاخير"}))
            }else{
                setError((prev)=>({...prev, lastName:""}))
            }
            return false;
        }

        return true
        
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const valid = validateForm(updatedProfileData, setError)
        
        if(valid){
            setError({})
        }
    }
  return (
    <div className="wrapper">
        <img src={adsBackground} className='profile-background'  />
    
    <form className="profile-form" onSubmit={(e) => handleSubmit(e)} >
      <div className="form-title">
        <h1>الملف الشخصي</h1>
      </div>

   

      <div className="row">
        <FormGroup label={"الاسم الاول"} type="text" id="firstName" error={error.firstName} onChange={(e) => handleChange(e)} />
        <FormGroup label={"الاسم الاخير"} type="text" id="lastName" error={error.lastName} onChange={(e) => handleChange(e)}/>
      </div>

      <div className="row">
        <FormGroup label={"اسم الشركة"} type="text" id="companyName" disabled={true}/>
        <FormGroup label={"رقم الشركة"} type="text" id="companyNumber" disabled={true} />
      </div>

      <div className="row">
        <FormGroup label={"البريد الاكتروني"} type="email" id="email" disabled={true}/>
        <FormGroup label={"رقم الهاتف"} type="text" id="phone" disabled={true}/>
      </div>

      <div className="row">

      </div>

      <button className='update-profile-btn'>تحديث الملف الشخصي</button>
    </form>
    </div>
  )
}
