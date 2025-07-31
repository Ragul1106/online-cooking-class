import React from 'react'
import CookingPromo from './CookingPromo'
import AboutUs from './AboutUs'
import AboutSection from './AboutSection'
import OfferBanner from './OfferBanner'
import WhatWeOffer from './WhatWeOffer'
import CourseBanner from './CourseBanner'
import OurValues from './OurValues'

function About() {
  return (
    <div className="min-h-screen bg-[#fff7f1] ">
        <CookingPromo />
        <AboutUs />
        <AboutSection />
        <WhatWeOffer />
        <OfferBanner />
        <OurValues />
        <CourseBanner />
    </div>
  )
}

export default About