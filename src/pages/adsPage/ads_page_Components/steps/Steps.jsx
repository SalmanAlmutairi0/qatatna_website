import React from 'react'
import './steps.css'
export default function Steps({step}) {
  return (
    <div className="steps">

    <div className="step">
      <p style={step >= 1 ? {backgroundColor: 'var(--purple)', color: 'white'} : {backgroundColor: '#ededed'} }>1</p>
    </div>
  <div className="step-line" style={{backgroundColor: step >= 2 ? 'var(--purple)' : '#ededed'}}></div>
    <div className="step">
      <p style={step >= 2 ? {backgroundColor: 'var(--purple)', color: 'white'} : {backgroundColor: '#ededed'} }>2</p>
    </div>

  </div>
  )
}
