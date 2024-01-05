import React from 'react'
import './downloadSection.css'
import downloadBackground from '../../assets/download_background.svg'
import appleIcon from '../../assets/icons/AppleLogo.png'
import googleIcon from '../../assets/icons/GooglePlay.png'
export default function DownloadSection() {
  return (
    <section id='download-section'>
        <img className='download-background' src={downloadBackground}/>

        <div className="download-container">
            <h4>تنزيل الان</h4>
            <h1>متاح لجميع الأجهزة</h1>

            <div className="download-btns">
                <button className='google-play'>Google Play <img className='icon' src={googleIcon} alt="google play icon" /> </button>
                <button className='app-store'>  App Store <img className='icon' src={appleIcon} alt="apple store icon" /></button>
            </div>
        </div>
    </section>
  )
}
