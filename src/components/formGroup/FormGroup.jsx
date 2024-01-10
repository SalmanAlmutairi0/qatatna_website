import React from 'react'
import './formgroup.css'

export default function FormGroup({label, type, id, disabled}) {
  return (
    <div className="form-group">
        <label className="form-label" htmlFor={id}>
          {label}
        </label>

        <input type={type} id={id} required  disabled={disabled} />

      </div>
  )
}
