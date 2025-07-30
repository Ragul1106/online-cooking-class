import React from 'react'
import FeaturedCourses from '../components/FeaturedCourses';
import OfferBanner from '../components/OfferBanner';
import CourseCard from '../components/CourseCard';
import CourseBanner from '../components/CourseBanner';

function Courses() {
  return (
    <div className="min-h-screen bg-[#fff7f1] ">
        <FeaturedCourses />
        <CourseCard />
        <OfferBanner />
        <CourseBanner />
    </div>
  )
}

export default Courses