import React, { useState } from "react";
import FormGroup from '../../../../../components/formGroup/FormGroup';
import "./checkForm.css";

export default function CheckForm({setStep, setFormData, formData}) {
  const [hourPrice, setHourPrice] = useState(150);
  const [error, setError] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    
    // get the day
    if(id === "date"){
     const selectedDate = new Date(value);
     const dayOfWeek = new Intl.DateTimeFormat("ar", { weekday: "long" }).format(selectedDate);
     
     setFormData((prevData) => ({
       ...prevData,
       [id]: value,
       day: dayOfWeek
     }))
    }
    
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const validateForm = (formData, setError) => {
    if(formData.first_name === "" || formData.last_name === "" || formData.company_name === "" || formData.email === "" || formData.phone === "" || formData.date === "" ){
    
      if(formData.first_name === ""){
        setError((prev)=>({...prev, first_name:"* يجب كتابة الاسم الاول"}))
      }
      if(formData.last_name === ""){
        setError((prev)=>({...prev, last_name:"* يجب كتابة الاسم الاخير"}))
      }
      if(formData.company_name === ""){
        setError((prev)=>({...prev, company_name:"* يجب كتابة اسم الشركة"}))
      }
      if(formData.email === ""){
        setError((prev)=>({...prev, email:"* يجب كتابة البريد الالكتروني"}))
      }
      if(formData.phone === ""){
        setError((prev)=>({...prev, phone:"* يجب كتابة رقم الجوال"}))
      }
      if(formData.date === ""){
        setError((prev)=>({...prev, date:"* يجب كتابة التاريخ"}))
      }

      return false;
  }else{
    return true
  }
    
  }

  const handleSubmit = (e) => {
    // validation
    e.preventDefault();
    console.log(formData);

    const valid = validateForm(formData, setError);

    if(valid){
      setStep(()=> 2)
      setError({})
    }


  }
    
  return (
    <form className="check-form" onSubmit={(e) => handleSubmit(e)}>
      <div className="form-title">
        <h1>تحقق من الوقت المتاح</h1>
      </div>

        <div className="row">
            <FormGroup label="الاسم الاول" type="text" value={formData.first_name} id="first_name" error={error.first_name}  onChange={(e)=>handleChange(e)}/>
            <FormGroup label="الاسم الاخير" type="text" value={formData.last_name} id="last_name" error={error.last_name}   onChange={(e)=>handleChange(e)}/>

        </div>

        <FormGroup label="اسم الشركة" type="text" value={formData.company_name} id="company_name" error={error.company_name}  onChange={(e)=>handleChange(e)}/>

        <div className="row">
            <FormGroup label="البريد الالكتروني" value={formData.email} type="email" id="email" error={error.email}  onChange={(e)=>handleChange(e)}/>
            <FormGroup label="رقم الجوال" type="text" value={formData.phone} id="phone" error={error.phone}  onChange={(e)=>handleChange(e)}/>
        </div>

        <div className="row">
            <FormGroup label="تاريخ الاعلان" type="date" value={formData.date} id="date" error={error.date}  onChange={(e)=>handleChange(e)}/>
            <FormGroup label="اليوم" type="text" id="day" disabled={true}  value={formData.day}/>
        </div>

        <FormGroup
            label="سعر الساعة لليوم المحدد"
            type="text"
            id="price"
            disabled={true} 
            onChange={(e)=>handleChange(e)}
            value={hourPrice}
        />

         <button className="check-btn" >تحقق من الاوقات</button>
    </form>
  );
}
