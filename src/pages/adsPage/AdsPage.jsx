import React, { useState } from 'react'
import './adsPage.css'
import adsBackground from '../../assets/ads_background.svg'
import CheckForm from './ads_page_Components/forms/checkFrom/CheckForm'
import RequestAdForm from './ads_page_Components/forms/requestAdForm/RequestAdForm'
import arrowBack from '../../assets/icons/arrow_back.png'
import Steps from './ads_page_Components/steps/Steps'
export default function AdsPage() {
  const [step, setStep] = useState(1)
  const [checkFormData, setCheckFormData] = useState({
    first_name: "",
    last_name: "",
    company_name: "",
    email: "",
    phone: "",
    date: "",
    day: "",
    price: "",
  });

  return (
    <main className='ads-page'>
        <img src={adsBackground}  />

        <div className="form-container">

          {step == 2 && 
            <div className="arrow-back" onClick={() => setStep(1)}>
              <img src={arrowBack} alt="" />
            </div>
          }
          
        <Steps step={step} />

          <div className="line"></div>
        
          {/* forms */}
          <div className="forms">
          {step === 1 ? <CheckForm setStep={setStep} setFormData={setCheckFormData} formData={checkFormData}/>  : <RequestAdForm  />}

          </div>
          
          
          
        
        </div>

    </main>
  )
}
