import React, { useState } from 'react'
import './adsPage.css'
import adsBackground from '../../assets/ads_background.svg'
import CheckForm from './ads_page_Components/forms/checkFrom/CheckForm'
import RequestAdForm from './ads_page_Components/forms/requestAdForm/RequestAdForm'
export default function AdsPage() {
  const [step, setStep] = useState(1)
  return (
    <main className='ads-page'>
        <img src={adsBackground}  />

        <div className="form-container">
          
          <div className="steps">
            
            <div className="step">
              <p style={step >= 1 ? {backgroundColor: 'var(--purple)', color: 'white'} : {backgroundColor: '#ededed'} }>1</p>
            </div>
          <div className="step-line" style={{backgroundColor: step >= 2 ? 'var(--purple)' : '#ededed'}}></div>
            <div className="step">
              <p style={step >= 2 ? {backgroundColor: 'var(--purple)', color: 'white'} : {backgroundColor: '#ededed'} }>2</p>
            </div>

          </div>

          <div className="line"></div>
        
        
          {/* forms */}
          {/* <CheckForm setStep={setStep}/>  */}
          
            <RequestAdForm />
          
        
        </div>

    </main>
  )
}
