import React, { useEffect } from "react";
import CoursePromo from "./CoursePromo";
import FeaturedCourses from "./FeaturedCourses";
import OfferBanner from "./OfferBanner";
import CourseCard from "./CourseCard";
import CourseBanner from "./CourseBanner";
import Faq from "./Faq";

function Home() {
  useEffect(() => {
    document.title = "Online Cooking Class | Home";
  }, []);
  return (
    <div className="min-h-screen bg-[#FFF7F0]">
      <CoursePromo />
      <FeaturedCourses />
      <CourseCard />
      <OfferBanner />
      <Faq />
      <CourseBanner />
    </div>
  );
}

export default Home;
