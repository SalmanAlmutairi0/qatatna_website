import React from 'react'
import './formGroup.css'
export default function FormGroup({label, type, id}) {
  return (
    <div className="form-group">
        <label className="form-label" htmlFor={id}>
          {label}
        </label>

        <input type={type} id={id} />

      </div>
  )
}
