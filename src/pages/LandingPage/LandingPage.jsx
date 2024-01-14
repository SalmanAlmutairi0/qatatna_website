import React from 'react'
import Hero from '../../components/hero/Hero'
import OurServices from '../../components/ourServices/OurServices'
import BenefitsSection from '../../components/benefitsSection/benefitsSection'
import MobileSection from '../../components/mobileSection/MobileSection'
import DownloadSection from '../../components/downloadSection/DownloadSection'


export default function LandingPage() {
  return <>
        <Hero />
        <OurServices />
        <BenefitsSection />
        <MobileSection />
        <DownloadSection />
  
  </>
}
