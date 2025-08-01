import React from "react";
import { useNavigate } from "react-router-dom";
import offerImage from "../assets/images/free_gift.png";

export default function OfferBanner() {
  const navigate = useNavigate();
  return (
    <div className="relative w-full max-w-7xl mx-auto my-10 rounded-2xl overflow-hidden shadow-xl">
      <img
        src={offerImage}
        alt="Cranberries Offer"
        className="w-[100%] h-[60vh]"
      />

      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-start px-6 md:px-12">
        <div className="p-6 md:p-10 rounded-xl max-w-xl text-white">
          <h2 className="text-sm md:text-3xl font-medium text-gray-300">
            LIMITED PERIOD OFFER:
          </h2>
          <h1 className="text-2xl md:text-3xl font-extrabold my-2 text-white">
            FREE GIFT WITH EVERY COURSE
          </h1>
          <hr className="border-gray-500 my-4" />
          <p className="text-sm md:text-2xl text-gray-200 leading-relaxed">
            GET ACCESS TO BONUS COURSE WITH PREMIUM RECIPES AND COOK AMAZING DISHES WITH{" "}
            <span className="font-bold text-white">US CRANBERRIES.</span>
          </p>

        </div>
        <button
          onClick={() => navigate("/course-des")}
          className="absolute left-1/2 transform -translate-x-1/2 bottom-6 bg-[#b14444] hover:bg-[#d57a66] hover:text-red-300 text-white font-semibold py-2 px-5 rounded-full transition duration-300">
          LEARN MORE
        </button>
      </div>

    </div>
  );
}
