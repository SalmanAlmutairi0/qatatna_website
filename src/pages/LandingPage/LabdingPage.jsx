import React from 'react'
import Navbar from '../../components/nav/Navbar'
import Hero from '../../components/hero/Hero'
import OurServices from '../../components/ourServices/OurServices'
import BenefitsSection from '../../components/benefitsSection/benefitsSection'
import MobileSection from '../../components/mobileSection/MobileSection'
import DownloadSection from '../../components/downloadSection/DownloadSection'
import Footer from '../../components/footer/Footer'
import { Element } from 'react-scroll';

export default function LabdingPage() {
  return <>
  
        <Navbar />

        <Element name='home'><Hero /></Element>
       
        <Element name='OurServices'><OurServices /></Element>

        <Element name='benefitsSection'><BenefitsSection /></Element>
        
        <MobileSection />
        
        <Element name='download'><DownloadSection /></Element>
        
        <Element name='contact'><Footer /></Element>

  
  </>
}
