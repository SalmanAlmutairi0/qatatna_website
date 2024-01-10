import React, { useEffect, useState } from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import { Twirl as Hamburger } from 'hamburger-react'
import { Link as Scroll } from 'react-scroll'
import {Link } from 'react-router-dom'
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
                    <li className="nav-item">
                    <Scroll to='home' smooth={true} duration={500} onClick={() => setIsOpen(false)}>
                            الرئيسية
                    </Scroll>
                    </li>

                    <li className="nav-item">
                    <Scroll to='OurServices' smooth={true} duration={500} onClick={() => setIsOpen(false)}>
                            خدماتنا
                    </Scroll>
                    </li>

                    <li className="nav-item">
                        <Scroll to='benefitsSection' smooth={true} duration={500} onClick={() => setIsOpen(false)}>
                            كيفية الاستخدام
                        </Scroll>
                       </li>

                    <li className="nav-item">
                    <Scroll to='contact' smooth={true} duration={500} onClick={() => setIsOpen(false)}>
                            تواصل معنا
                    </Scroll>
                    </li>

                    <li className='nav-item mobile-button'><button>اعلن معنا</button></li>
                    
                </ul>
            </div>

                <Link to='request-ads' >
                      <button className='nav-button nav-item'>اعلن معنا</button>
                </Link>

            <div className="burger-menu">
                <Hamburger size={28} color='#fff' onToggle={() => setIsOpen(!isOpen)} />
            </div>

        </div>

       
    </nav>
  )
}
