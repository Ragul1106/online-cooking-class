import React, { useEffect } from 'react'
import ContactForm from './ContactForm'
import CourseBanner from './CourseBanner'

function Contact() {
   useEffect(() => {
           document.title = "Online Cooking Class | Contact Us";
         }, []);
  return (
     <div className="min-h-screen bg-[#fff7f1] ">
        <ContactForm />
        <CourseBanner />
     </div>
  )
}

export default Contact