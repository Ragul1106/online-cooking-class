import React from "react";
import CoursePromo from "./CoursePromo";
import FeaturedCourses from "./FeaturedCourses";
import OfferBanner from "./OfferBanner";
import CourseCard from "./CourseCard";
import CourseBanner from "./CourseBanner";
import Faq from "./Faq";

function Home() {
  return (
    <div className="min-h-screen">
      <CoursePromo />
      <FeaturedCourses />
      <OfferBanner />
      <CourseCard />
      <Faq />
      <CourseBanner />
    </div>
  );
}

export default Home;
