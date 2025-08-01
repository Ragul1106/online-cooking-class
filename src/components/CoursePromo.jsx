import React from "react";
import { useNavigate } from "react-router-dom";
import chefImage from "../assets/images/Group 6.png";

export default function CoursePromo() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col bg-[#FFF7F0] md:flex-row gap-8 md:gap-x-16 p-4 md:p-8 rounded-[30px] max-w-6xl mx-auto">

      <div className="w-full md:basis-[45%] overflow-hidden rounded-[30px]">
        <img
          src={chefImage}
          alt="Chef"
          className="w-full h-full object-cover rounded-[30px]"
        />
      </div>

      <div className="w-full md:basis-[65%] flex items-stretch relative rounded-[20px]">

        <div className="relative flex w-full bg-white border-2 border-[#A7C957] rounded-[20px] overflow-hidden ">

           <div
            className="hidden md:block absolute top-0 left-0 h-full w-[60px] bg-[#A7C957]  z-20"
            style={{ clipPath: "polygon(80% 0, 0 175%, 0 0)" }}
          />

          <div
              className="hidden md:block absolute top-0 right-0 h-full w-[60px] bg-[#A7C957] z-20"
            style={{ clipPath: "polygon(60% 0, 30% 100%, 10000% 110%)" }}
          />

          <div className="flex-1 relative z-10 p-6 md:p-10">
            <h1 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-4 leading-tight text-center">
              TAKE YOUR COOKING SKILLS TO THE NEXT LEVEL WITH MASTER CHEFS
            </h1>
            <p className="text-sm md:text-base font-semibold text-gray-700 mb-6 text-center">
              CULINARY TIPS AND TRICKS STRAIGHT FROM THE EXPERT, ON HOW TO COOK
              SCRUMPTIOUS, INSTAGRAM READY, LIP SMACKING DISHES THAT ARE CLEAN,
              HEALTHY, AND ENERGIZING.
            </p>
            <div className="w-full">
              <button
                onClick={() => navigate("/courses")}
                className="mx-auto block bg-[#b14444] hover:bg-[#d57a66] hover:text-red-300 text-white font-semibold py-2 px-8 rounded-3xl transition duration-300 uppercase tracking-wide text-sm md:text-lg"
              >
                View Courses
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
