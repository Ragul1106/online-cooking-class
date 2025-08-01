import React, { useEffect } from 'react'
import FeaturedCourses from './FeaturedCourses';
import OfferBanner from './OfferBanner';
import CourseCard from './CourseCard';
import CourseBanner from './CourseBanner';

function Courses() {
  useEffect(() => {
          document.title = "Online Cooking Class | Courses";
        }, []);
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