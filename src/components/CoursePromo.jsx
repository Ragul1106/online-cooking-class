import React from "react";
import chefImage from "../assets/images/Group 6.png"; 
import '../App.css';

export default function CoursePromo() {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-x-8 p-4 md:p-8 rounded-[30px] max-w-6xl mx-auto">

      
      {/* Left Image - 30% width on md+ */}
      <div className="w-full md:basis-[45%] overflow-hidden rounded-[30px]">
        <img
          src={chefImage}
          alt="Chef"
          className="w-full h-full object-cover rounded-[30px]"
        />
      </div>

      {/* Right Text - 50% width on md+ */}
      <div className="w-full md:basis-[65%] flex items-stretch border-4 border-lime-500 rounded-[20px]">

        <div className="flex w-full bg-lime-500 rounded-[15px] overflow-hidden">
          
          {/* Left Slanted Lime Bar */}
          <div className="hidden md:block w-6 bg-lime-500 clip-left-slant"></div>



          {/* Center White Content */}
          <div className="flex-1 bg-white p-6 md:p-10 ">
            <h1 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-4 leading-tight flex flex-col justify-center text-center">
              TAKE YOUR COOKING SKILLS TO THE NEXT LEVEL WITH MASTER CHEFS
            </h1>
            <p className="text-sm md:text-base text-gray-700 mb-6">
              CULINARY TIPS AND TRICKS STRAIGHT FROM THE EXPERT, ON HOW
              TO COOK SCRUMPTIOUS, INSTAGRAM READY, LIP SMACKING DISHES
              THAT ARE CLEAN, HEALTHY, AND ENERGIZING.
            </p>
           <div className="w-full">
  <button className="mx-auto block bg-red-600 hover:bg-orange-500 text-white font-semibold py-2 px-8 rounded-3xl transition duration-300 uppercase tracking-wide text-sm md:text-lg">
    VIEW COURSES
  </button>
</div>


          </div>

          {/* Right Slanted Lime Bar */}
          <div className="hidden md:block bg-lime-500 w-6"></div>
        </div>
      </div>
    </div>
  );
}
