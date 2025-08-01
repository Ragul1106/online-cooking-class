import React from 'react';
import bannerImage from '../assets/images/bakkery2.png';
import BakeryBanner from '../components/BakeryBanner';
import CourseBanner from '../components/CourseBanner';

const BakeryPromo = () => {
    return (
        <div className="w-full flex flex-col items-center bg-[#FFF5ED] px-4 text-center">
            <BakeryBanner />
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

export default BakeryPromo;