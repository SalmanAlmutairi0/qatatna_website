import React, { useState } from 'react'
import './requestAdFrom.css'
import FormGroup from '../../../../../components/formGroup/FormGroup'
export default function RequestAdForm({setFormData, formData, adDate,  price, adDay}) {
    const [error, setError] = useState({})
    console.log(adDate);
    const handleChange = (e) => {
        const { id, value } = e.target;
        
        // get the total price based on the hours
        if(id === 'hours'){
            setFormData((prevData) => ({
              ...prevData,
              [id]: value,
              totalPrice: parseInt(value) * price,
            }));
        }

       
        setFormData((prevData) => ({
          ...prevData,
          [id]: value,
        }));
    }

    const validateForm = (formData, setError) => {
        if(formData.hours === "" || formData.adType === "" || formData.image === ""){
            if(formData.hours === ""){
                setError((prev)=>({...prev, hours:"* يجب كتابة عدد الساعات"}))
            }else{
                setError((prev)=>({...prev, hours:""}))
            }
            if(formData.adType === ""){
                setError((prev)=>({...prev, adType:"* يجب كتابة نوع الاعلان"}))
            }else{
                setError((prev)=>({...prev, adType:""}))
            }
            if(formData.image === ""){
                setError((prev)=>({...prev, image:"* يجب اختيار صورة الاعلان"}))
            }else{
                setError((prev)=>({...prev, image:""}))
            }
        
            return false
        }else{
            return true
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        const valid = validateForm(formData, setError);

        if(valid){
            setError({})
            console.log(formData);
        }
    }
    
  return (
    <form className='request-ad-form' onSubmit={(e) => handleSubmit(e)}>
        <div className="form-title">
            <h1>طلب اعلان</h1>
        </div>
        <div className="remaining-hours-container">
            <p >عدد الساعات المتاحة ليوم <span>{adDay}</span> الموافق <span>{adDate}</span></p>

            <h3 className='remaining-hours'>الساعات المتبقية <span>10</span> ساعات</h3>
        </div>

        <div className="row">
            <FormGroup label="عدد الساعات المراد حجزها" type="number" value={formData.hours} id="hours" error={error.hours} onChange={(e) => handleChange(e)} />
            <FormGroup label="تصنيف الاعلان" type="text" id="adType" value={formData.adType} error={error.adType} onChange={(e) => handleChange(e)} />
        </div>

        <div className="row">
           <FormGroup label="صورة الاعلان" type="file" id="image"  value={formData.image} error={error.image}  onChange={(e) => handleChange(e)}/>
            <FormGroup label="المبلغ الاجمالي" type="text" id="totalPrice" disabled={true} value={formData.totalPrice}  onChange={(e) => handleChange(e)}/>
        </div>

        <button className="request-btn">ادفع</button>
    </form>
  )
}
