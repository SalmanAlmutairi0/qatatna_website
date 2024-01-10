import React from "react";
import FormGroup from '../../../../../components/formGroup/FormGroup';
import "./checkForm.css";

export default function CheckForm({setStep}) {
    
  return (
    <form className="check-form">
      <div className="form-title">
        <h1>تحقق من الوقت المتاح</h1>
      </div>

        <div className="row">
            <FormGroup label="الاسم الاول" type="text" id="first_name" />
            <FormGroup label="الاسم الاخير" type="text" id="last_name" />
        </div>

        <FormGroup label="اسم الشركة" type="text" id="company_name" />

        <div className="row">
            <FormGroup label="البريد الالكتروني" type="email" id="email" />
            <FormGroup label="رقم الجوال" type="text" id="phone" />
        </div>

        <div className="row">
            <FormGroup label="تاريخ الاعلان" type="date" id="date" />
            <FormGroup label="اليوم" type="text" id="day" disabled={true} />
        </div>

        <FormGroup
            label="سعر الساعة لليوم المحدد"
            type="text"
            id="price"
            disabled={true}
        />

         <button className="check-btn" >تحقق من الاوقات</button>
    </form>
  );
}
