import React, { useEffect } from 'react';
import CourseDesBanner from '../components/CourseDesBanner';
import CourseCurriculum from '../components/CourseCurriculum';
import Testimonials from '../components/Testimonials';
import CourseBanner from '../components/CourseBanner';
import RecipeCard from '../components/RecipeCard';
import bannerImage from '../assets/images/bakkery2.png';

const CourseDescription = () => {
    useEffect(() => {
        document.title = "Online Cooking Class | Course Description";
    }, []);
    return (
        <div className="w-full flex flex-col items-center bg-[#fff7f0] px-4 text-center">
            <CourseDesBanner />
            <CourseCurriculum />
            <RecipeCard />
            <Testimonials />
            <div className="relative w-full max-w-5xl mt-6">
                <img
                    src={bannerImage}
                    alt="Bakery Banner"
                    className="w-full rounded-xl object-cover"
                />
            </div>
            <CourseBanner />

        </div>
    );
};

export default CourseDescription;