import React from "react";
import CoursePromo from "../components/CoursePromo";
import FeaturedCourses from "../components/FeaturedCourses";
import OfferBanner from "../components/OfferBanner";
import CourseCard from "../components/CourseCard";
import CourseBanner from "../components/CourseBanner";
import Faq from "../components/Faq";

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
