import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaGoogle,
  FaYoutube,
  FaEnvelope,
} from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import logo1 from "../assets/images/logo_img1.png";
import logo2 from "../assets/images/logo_img2.png";
import { Link } from 'react-router-dom';

export default function Footer() {
  const [hovered, setHovered] = useState(false);

  return (
    <footer className="bg-[#D17963] text-white px-6 md:px-10 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-sm md:text-base lg:text-lg">
        {/* Logo Section */}
        <div className="flex justify-center md:justify-start lg:mt-10">
          <img
            src={hovered ? logo1 : logo2}
            alt="Flavour Theory"
            className="w-[500 px] h-[20vh] transition duration-300"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          />
        </div>

        {/* Navigation */}
        <div className="text-center md:text-left space-y-2 lg:ml-10">
          <h3 className="font-semibold text-white text-base lg:text-lg">
            HOME
          </h3>
          <ul className="space-y-1">
            <li>
              <Link to="/about" className="hover:text-[#C3413B] transition">
                ABOUT US
              </Link>
            </li>
            <li>
              <Link to="/programs" className="hover:text-[#C3413B] transition">
                PROGRAMS
              </Link>
            </li>
            <li>
              <Link to="/courses" className="hover:text-[#C3413B] transition">
                COURSES
              </Link>
            </li>
          </ul>
        </div>

        {/* Courses */}
        <div className="text-center md:text-left space-y-2 lg:-ml-[120px]">
          <h3 className="font-semibold text-white text-base lg:text-lg">
            COURSES
          </h3>
          <ul className="space-y-1 text-xs md:text-sm lg:text-base">
            <li>THE GOOD GUT PROGRAM</li>
            <li>FOOD LOOK GOOD</li>
            <li>START YOUR BUSINESS FROM HOME - NON VEG & VEG</li>
            <li>START YOUR FOOD BUSINESS FROM HOME - VEG ONLY</li>
            <li>IMMUNITY BOOSTER RECIPES</li>
            <li>INDIA’S FAVOURITES: RESTAURANTS AND HOME STYLE DISHES</li>
            <li>VEGETARIAN’S DELIGHT</li>
            <li>GARNISHING & PLATING</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="text-center md:text-left space-y-4 lg:ml-20">
          <h3 className="font-semibold text-white text-base lg:text-lg">
            CONTACT
          </h3>

          <div className="flex items-start gap-2 justify-center md:justify-start">
            <MdLocationOn className="text-xl mt-1" />
            <p>
              Flavortheory Academy
              <br />
              1234, Olive Street,
              <br />
              Chennai – 021
            </p>
          </div>

          <div className="flex items-center gap-2 justify-center md:justify-start">
            <FaEnvelope className="text-xl" />
            <p>Info@Flavortheoryacademy.in</p>
          </div>

          <div className="flex items-center gap-2 justify-center md:justify-start">
            <FaPhoneAlt className="text-xl" />
            <p>044 – 987 6785 5677</p>
          </div>

          <div>
            <h4 className="font-semibold mt-3">FOLLOW US</h4>
            <div className="flex gap-4 justify-center md:justify-start mt-2 text-xl">
              <FaInstagram className="hover:text-black cursor-pointer" />
              <FaGoogle className="hover:text-black cursor-pointer" />
              <FaFacebookF className="hover:text-black cursor-pointer" />
              <FaYoutube className="hover:text-black cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
