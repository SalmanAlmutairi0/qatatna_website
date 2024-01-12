import React from 'react'
import './formgroup.css'

export default function FormGroup({label, type, id, disabled, onChange, value, error}) {
  return (
    <div className="form-group">
        <label className="form-label" htmlFor={id}>
          {label}
        </label>

        <input type={type} id={id} value={value}  disabled={disabled} onChange={onChange}/>
        <p className="form-error">{error}</p>
      </div>
  )
}
