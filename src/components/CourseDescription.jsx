import React from 'react';
import CourseDesBanner from '../components/CourseDesBanner';
import CourseCurriculum from '../components/CourseCurriculum';
import Testimonials from '../components/Testimonials';
import CourseBanner from '../components/CourseBanner';
import RecipeCard from '../components/RecipeCard';
import FeaturesCard from '../components/FeaturesCard';

const CourseDescription = () => {
    return (
        <div className="w-full flex flex-col items-center bg-[#fff7f0] px-4 text-center">

            <CourseDesBanner />
            <CourseCurriculum />
            <RecipeCard />
            <Testimonials />
            <FeaturesCard />
            <CourseBanner />

        </div>
    );
};

export default CourseDescription;