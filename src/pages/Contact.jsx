import React from 'react'
import ContactForm from '../components/ContactForm'
import CourseBanner from '../components/CourseBanner'

function Contact() {
  return (
     <div className="min-h-screen bg-[#fff7f1] ">
        <ContactForm />
        <CourseBanner />
     </div>
  )
}

export default Contact