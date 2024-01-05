import React from "react";
import "./contactUs.css";
import FormGroup from "../formGroup/FormGroup";
export default function ContactUs() {
  return (
    <form className="contact-us-form">
      <div className="form-title">
        <h1>تواصل معنا</h1>
      </div>

      <div className="row">
        <FormGroup label="الاسم الكامل" type="text" id="full_name" />

        <FormGroup label="البريد الاكتروني" type="email" id="email" />
      </div>

      <div className="form-group">
        <label htmlFor="message">الرسالة</label>
        <textarea id="message" rows={4}></textarea>
      </div>

      <div className="submit-wrapr">
        <button type="submit" className="contact-us-btn">
          ارسل
        </button>
        
      </div>
    </form>
  );
}
