import React from 'react';
import banner1Image from '../assets/images/banner1.png';
import bannerImage from '../assets/images/bakkery2.png';
import enrollNow from '../assets/images/enrollNow.png';
import text1 from '../assets/images/firsttext.png';
import cheffimg from '../assets/images/Group 48.png';

import Batch from '../assets/images/batch.png';
import video from '../assets/images/video.png';
import spoon from '../assets/images/spoon.png';
import connectivity from '../assets/images/connectivity.png';

import insta from '../assets/images/insta.png';
import book from '../assets/images/author.png';
import expertise from '../assets/images/expertise.png';

const BakeryPromo = () => {
    return (
        <div className="w-full flex flex-col items-center bg-white px-4 text-center">
            {/* Title */}
            <p className="max-w-4xl text-3xl font-bold text-gray-800 mt-6">
                BAKERY BUSINESS ACCELERATOR PROGRAM.
            </p>

            <p className="mt-2 mb-8 max-w-4xl text-2xl font-semibold text-rose-800">
                Program Limited to 50 people Only!
            </p>


            <div className="relative w-full max-w-5xl">
                <div className="relative w-full rounded-xl overflow-hidden">
                    <img
                        src={banner1Image}
                        alt="Bakery Banner"
                        className="w-full rounded-xl object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                </div>

                <img
                    src={text1}
                    className="absolute w-[80%] sm:w-3/4 top-8 left-1/2 transform -translate-x-1/2 z-10"
                    alt="Main Text Overlay"
                />

                <p className="absolute left-8 top-40 text-white font-medium text-sm sm:text-base z-10">
                    Even If You Don't Have Any Prior Experience In Baking!
                </p>

                <div className="absolute left-36 top-52 text-white text-left space-y-4 text-lg sm:text-xl z-10 leading-relaxed">
                    <p className="flex items-center gap-3">
                        <img src={Batch} alt="Batch Icon" className="w-6 h-6" />
                        Batch II Start Date - 31st July 2025
                    </p>
                    <p className="flex items-center gap-3">
                        <img src={video} alt="Video Icon" className="w-6 h-6" />
                        10+ Hrs of Pre-Recorded Video Content
                    </p>
                    <p className="flex items-center gap-3">
                        <img src={spoon} alt="Spoon Icon" className="w-6 h-6" />
                        100+ Baking Recipes
                    </p>
                    <p className="flex items-center gap-3">
                        <img src={connectivity} alt="Connectivity Icon" className="w-6 h-6" />
                        Exclusive Masterclasses
                    </p>
                </div>

                <div className="absolute left-32 top-[25rem] text-white font-bold text-3xl sm:text-3xl z-10">
                    Program Fees: ₹ 1 Lakh | INR <br />
                    <span className="text-white-300 text-xl sm:text-4xl">36,000/-</span>
                </div>

                <button className="absolute left-56 bottom-32 z-20">
                    <img src={enrollNow} className="w-48" alt="Enroll Now" />
                </button>

                <img
                    src={cheffimg}
                    alt="Chef"
                    className="absolute right-6 bottom-28 w-68 h-68 rounded-full border-4 border-white object-cover z-10"
                />

                <p className="absolute bottom-20 left-1/4 transform -translate-x-1/2 text-xs text-red-500 z-10 bg-white px-4 py-1 rounded-full">
                    We're looking for Action Takers. Program open for 50 participants only.
                </p>

                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-20 flex items-center justify-center gap-48">
                    <img src={insta} alt="Instagram Icon" className="w-16 sm:w-36" />
                    <img src={book} alt="Author Icon" className="w-16 sm:w-36" />
                    <img src={expertise} alt="Expertise Icon" className="w-16 sm:w-36" />
                </div>

            </div>


            <div className="relative w-full max-w-5xl mt-6">
                <img
                    src={bannerImage}
                    alt="Bakery Banner"
                    className="w-full rounded-xl object-cover"
                />
            </div>

            <p className="mt-10 max-w-4xl text-lg font-semibold text-gray-800">
                Homemakers to busy executives, budding chefs to food entrepreneurs, grandparents to moms, health conscious people or foodies – there's a course for all.
            </p>

            <button className="mt-6 mb-8 bg-rose-800 text-white px-6 py-3 rounded-full font-semibold transition-all hover:bg-rose-900">
                VIEW COURSES
            </button>
        </div>
    );
};

export default BakeryPromo;
