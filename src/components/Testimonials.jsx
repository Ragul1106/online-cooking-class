import React, { useState, useEffect } from "react";

import image1 from '../assets/images/Ellipse5.png';
import image2 from '../assets/images/Ellipse6.png';
import image3 from '../assets/images/Ellipse7.png';
import image4 from '../assets/images/Ellipse8.png';

const testimonials = [
    {
        image: image1,
        quote: "CHEF MADE IT FUN, EVEN FOR A TOTAL BEGINNER LIKE ME!",
        author: "CARLOS D",
    },
    {
        image: image2,
        quote: "I LEFT WITH NEW SKILLS AND A FULL BELLY. HIGHLY RECOMMEND!",
        author: "JASON R",
    },
    {
        image: image3,
        quote: "LEARNED SO MUCH IN A SHORT TIME, LOVED EVERY MINUTE!",
        author: "EMILY T",
    },
    {
        image: image4,
        quote: "PERFECT FOR BEGINNERS AND FOOD LOVERS!",
        author: "SANDRA M",
    },
];

const TestimonialCarousel = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % testimonials.length);
        }, 2000);
        return () => clearInterval(timer);
    }, []);

    const { image, quote, author } = testimonials[index];

    return (
        <div className="w-full bg-[#fff7f0] py-12 px-4">
            <div className="relative max-w-3xl mx-auto bg-[#fdf1dd] rounded-xl p-6 sm:p-10 pt-16 text-center shadow-md">

                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 ">
                    <img
                        src={image}
                        alt={author}
                        className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-4 border-white shadow-md "
                    />
                </div>

                <p className="text-lg sm:text-xl font-bold text-black mb-4 mt-12 ">"{quote}"</p>

                <div className="text-right">
                    <p className="text-base font-bold text-black">– {author}</p>
                </div>
            </div>


        </div>
    );
};

export default TestimonialCarousel;
