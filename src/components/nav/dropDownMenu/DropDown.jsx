import React from 'react'
import './dropDown.css'
import { Link } from 'react-router-dom'
export default function DropDown() {
  return (
    <div className="drop-down-menu">
        <div className="profile-img">
          <img src="https://i.ibb.co/0m7wYgK/IMG-20220615-WA0000.jpg" alt="profile image" />
        </div>

        <div className="drop-down-content">
          <p className='real-name'>سلمان المطيري</p>
          <p className='user-name'>Salamn_Almutaoro@</p>
          <ul className="drop-down-list ">
            <li>
                <Link to={'/profile'} >
                    الملف الشخصي
                </Link>    
            </li>
            <li >
                <Link to={'/orders'} >
                    طلباتي  
                </Link>
            </li>

            <li className='logout ' >
                <button>تسجيل الخروج</button>
            </li>
          </ul>
        </div>

    </div>
  )
}
