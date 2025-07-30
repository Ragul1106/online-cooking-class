import React from 'react';
import CourseBanner from './CourseBanner';
import banner1Image from '../assets/images/cdbanner1.png';
import banner2Image from '../assets/images/cdbanner2.png';
import banner3Image from '../assets/images/cdbanner3.png';
import bannerImage from '../assets/images/bakkery2.png';

import Testimonials from './Testimonials';

import insta from '../assets/images/cdInsta.png';
import book from '../assets/images/cdBook.png';
import expertise from '../assets/images/cdExpertise.png';

const courseDescriptionPage = () => {
    return (
        <div className="w-full flex flex-col items-center bg-[#fff7f0] px-4 text-center">

            <div className="relative w-full max-w-5xl mx-auto px-4 py-12">
                <div className="relative w-full rounded-xl overflow-hidden">
                    <img
                        src={banner1Image}
                        alt="Banner"
                        className="w-full h-auto object-cover rounded-xl"
                    />
                </div>

                <div className="absolute top-20 sm:top-32 md:top-40 left-1/2 transform -translate-x-1/2 w-full text-center px-4 z-10">
                    <div className='flex flex-col items-center '>
                        <h2 className="text-xs sm:text-2xl md:text-3xl w-3/4 font-bold text-black">
                            From Butter Chicken to Singaporean Noodles: Cook India’s Favourite Dishes at Home
                        </h2>
                    </div>
                    <p className="mt-1 sm:mt-6 text-xs sm:text-base sm:max-w-xl text-black-800 font-medium max-w-xs mx-auto">
                        In just 90 days, master the art of cooking 140+ basic to advanced Restaurant and Home styled dishes with step-by-step guidance and recipes!
                    </p>

                    <p className="mt-1 sm:mt-6 text-xs sm:text-xl font-bold text-black">
                        Limited Period Offer – Get 67% OFF
                    </p>
                    <p className="text-gray-500 line-through font-semibold">₹ 6000</p>
                    <p className="text-xs sm:text-2xl text-black font-bold mb-0 sm:mb-6">₹ 1,999</p>

                    <button className="bg-rose-800 hover:bg-red-600 text-white text-xs sm:text-base font-semibold py-1 sm:py-3 px-3 sm:px-6 rounded-full">
                        ENROLL NOW
                    </button>

                    <p className="sm:mt-6 text-xs font-bold sm:text-base text-black-700 max-w-xs sm:max-w-xl mx-auto">
                        Learn the secrets of cooking delicious restaurant and home-style dishes with the Masterchef & ace the art of recreating amazing cuisines at home.
                    </p>
                </div>

                <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-20 flex items-center justify-center gap-14 sm:gap-48">
                    <img src={insta} alt="Instagram Icon" className="w-16 sm:w-36" />
                    <img src={book} alt="Author Icon" className="w-16 sm:w-36" />
                    <img src={expertise} alt="Expertise Icon" className="w-16 sm:w-36" />
                </div>
            </div>

            <h2 className='text-3xl font-bold text-gray-800 mt-6 mb-10'>Course Curriculum</h2>

            <div className="relative w-full max-w-5xl mx-auto rounded-xl overflow-hidden">

                <img
                    src={banner2Image}
                    alt="Course Curriculum"
                    className="w-full h-auto object-cover rounded-xl"
                />

                <div className="absolute top-0 right-0 h-full flex items-center justify-end px-1">
                    <ul className="list-disc list-inside text-left text-black text-xs sm:text-base font-semibold  sm:space-y-4 rounded-xl  sm:p-8 w-[90%] sm:w-[400px] max-h-[90%] overflow-y-auto">
                        <li>Introduction: Restaurant style dishes</li>
                        <li>Master class with master chef</li>
                        <li>Restaurant style dishes: Accompaniments</li>
                        <li>Breads</li>
                        <li>Desserts</li>
                        <li>Main course – non veg</li>
                        <li>Main course – veg</li>
                        <li>Rice</li>
                        <li>Soup – veg</li>
                        <li>Starters non – veg</li>
                        <li>Soup non – veg</li>
                        <li>Starters veg</li>
                        <li>Bonus course: All about US Assessments</li>
                        <li>Thank you</li>
                    </ul>
                </div>
            </div>


            <div className="relative w-full max-w-4xl rounded-xl overflow-hidden">
                <img
                    src={banner3Image}
                    alt="Banner"
                    className="w-full h-auto object-cover rounded-xl"
                />
            </div>

            <h2 className='text-3xl font-bold text-gray-800 mt-6 mb-10'>Course Testimonials</h2>

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

export default courseDescriptionPage;