import React from 'react'
import Navbar from '../../components/nav/Navbar'
import Hero from '../../components/hero/Hero'
import OurServices from '../../components/ourServices/OurServices'
import BenefitsSection from '../../components/benefitsSection/benefitsSection'
import MobileSection from '../../components/mobileSection/MobileSection'
import DownloadSection from '../../components/downloadSection/DownloadSection'
import Footer from '../../components/footer/footer'

export default function LabdingPage() {
  return <>
        <Navbar />
        <Hero />
        <OurServices />
        <BenefitsSection />
        <MobileSection />
        <DownloadSection />
        <Footer />
  
  </>
}
