import React from 'react'
import './requestAdFrom.css'
import FormGroup from '../../../../../components/formGroup/FormGroup'
export default function RequestAdForm() {
  return (
    <form className='request-ad-form'>
        <div className="form-title">
            <h1>طلب اعلان</h1>
        </div>
        <div className="remaining-hours-container">
            <p >عدد الساعات المتاحة ليوم <span>الخميس</span> الموافق <span>3/2/2022</span></p>

            <h3 className='remaining-hours'>الساعات المتبقية <span>10</span> ساعات</h3>
        </div>

        <div className="row">
            <FormGroup label="عدد الساعات المراد حجزها" type="number" id="hours" />
            <FormGroup label="تصنيف الاعلان" type="text" id="adType" />
        </div>

        <div className="row">
           <FormGroup label="تاريخ الاعلان" type="date" id="date" disabled={true} />
            <FormGroup label="المبلغ الاجمالي" type="text" id="price" disabled={true} />
        </div>

        <button className="request-btn">ادفع</button>
    </form>
  )
}
