// components/MinimalNavbar.jsx
import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BiFingerprint } from "react-icons/bi";
import { MdPersonAddAlt1 } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo_img2.png"; 

export default function MinimalNavbar() {
  return (
    <header className="bg-[#FFF5E1] flex justify-between items-center px-4 sm:px-10 py-4">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Flavour Theory" className="h-[120px] w-auto" />
      </div>

      {/* Icons and Text */}
      <nav className="flex items-center gap-6 text-black font-bold text-sm sm:text-lg">
        <Link to="/" className="flex flex-col items-center hover:opacity-80">
          <AiFillHome className="text-2xl" />
          <span>HOME</span>
        </Link>
        <Link to="/login" className="flex flex-col items-center hover:opacity-80">
          <BiFingerprint className="text-2xl" />
          <span>LOGIN</span>
        </Link>
        <Link to="/signup" className="flex flex-col items-center hover:opacity-80">
          <MdPersonAddAlt1 className="text-2xl" />
          <span>SIGN UP</span>
        </Link>
      </nav>
    </header>
  );
}
