import React, { useEffect, useState } from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import { Twirl as Hamburger } from 'hamburger-react'
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        // when the mobile navbar is open prevent the user from scrolling 
        document.body.style.overflow = isOpen ? 'hidden' : 'auto'

        return () => {
            // Cleanup function to reset body overflow when the component unmounts
            document.body.style.overflow = 'auto'
        }
    },[isOpen])
    
  return (
    <nav>
        <div className="nav-container">
            <img src={logo} alt="" />

            <div className="nav-items" style={{left: isOpen ? '0' : '100%'}}>
                {/* Navigation items */}
                <ul className="nav-list" >
                    <li className="nav-item">الرئيسية</li>
                    <li className="nav-item">مميزات</li>
                    <li className="nav-item">من نحن ؟</li>
                    <li className="nav-item">تواصل معنا</li>
                    <li className='nav-item mobile-button'><button>اعلن معنا</button></li>
                    
                </ul>
            </div>

            <button className='nav-button nav-item'>اعلن معنا</button>

            <div className="burger-menu">
                <Hamburger size={28} color='#fff' onToggle={() => setIsOpen(!isOpen)} />
            </div>

        </div>

       
    </nav>
  )
}
