import React, { useState, useEffect } from "react";
import logo1 from "../assets/images/logo_img1.png";
import logo2 from "../assets/images/logo_img2.png";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [hoverLogo, setHoverLogo] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showPrograms, setShowPrograms] = useState(false);
  const [showCourses, setShowCourses] = useState(false);
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const loggedIn = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedIn) setUser(loggedIn);
  }, []);

  const logout = () => {
    localStorage.removeItem("loggedInUser");
    setUser(null);
  };

  return (
    <nav className="bg-[#FFF5E1] px-4 sm:px-8 md:px-14 py-4 flex items-center justify-between flex-wrap">
      {/* Logo */}
      <div
        className="flex items-center space-x-4"
        onMouseEnter={() => setHoverLogo(true)}
        onMouseLeave={() => setHoverLogo(false)}
      >
        <img
          src={hoverLogo ? logo1 : logo2}
          alt="Flavour Theory"
          className="h-[100px] w-[200px] sm:h-[120px] sm:w-[220px] md:h-[130px] md:w-[240px] transition duration-300"
        />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex items-center space-x-16 font-semibold text-[#5B4E44] text-base lg:text-2xl relative">
        <li className="hover:opacity-70 cursor-pointer">
          <Link to="/">HOME</Link>
        </li>

        <li className="hover:opacity-70 cursor-pointer">
          <Link to="/about">ABOUT</Link>
        </li>

        {/* Programs */}
        <li
          className="relative cursor-pointer"
          onMouseEnter={() => setShowPrograms(true)}
          onMouseLeave={() => setShowPrograms(false)}
        >
          <div className="flex items-center">
              <Link to="/programs">PROGRAMS</Link> <span className="ml-1">▼</span>
          </div>
          {showPrograms && (
            <ul className="absolute left-0 top-full mt-2 bg-[#FFF5E1] shadow-md text-black p-4 space-y-2 w-56 z-10 text-base lg:text-xl">
              <li className="hover:font-semibold">BAKERY BUSINESS</li>
              <li className="hover:font-semibold">ACCELERATOR PROGRAM</li>
              <li className="hover:font-semibold">CLOUD KITCHEN</li>
              <li className="hover:font-semibold">ACCELERATOR</li>
            </ul>
          )}
        </li>

        {/* Courses */}
        <li
          className="relative cursor-pointer"
          onMouseEnter={() => setShowCourses(true)}
          onMouseLeave={() => setShowCourses(false)}
        >
          <div className="flex items-center">
            <Link to="/courses">COURSES</Link> <span className="ml-1">▼</span>
          </div>
          
        </li>

        <li className="hover:opacity-70 cursor-pointer"><Link to="/contact">CONTACT</Link></li>
      </ul>

      {/* Right Side Buttons for Login and Toggle (Mobile) */}
<div className="flex items-center space-x-3">
  {user ? (
    // Logged In Dropdown for both Mobile & Desktop
    <div className="relative">
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="bg-[#BF4444] text-white text-sm lg:text-base font-bold px-4 py-1.5 lg:px-8 lg:py-2 rounded-full hover:bg-[#a93b3b]"
      >
        {user.name}
      </button>
      {dropdownOpen && (
        <div className="absolute right-0 mt-2 bg-white border rounded shadow-lg z-50 w-32">
          <button
            onClick={logout}
            className="block w-full text-left px-4 py-2 text-sm text-red-700 hover:bg-red-100"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  ) : (
    <>
      {/* Mobile Login Button */}
      <div className="block lg:hidden">
        <Link to="/login">
          <button className="bg-[#BF4444] text-white text-sm font-bold px-4 py-1.5 rounded-full hover:bg-[#a93b3b]">
            LOGIN
          </button>
        </Link>
      </div>

      {/* Desktop Login Button */}
      <div className="hidden lg:block">
        <Link to="/login">
          <button className="bg-[#BF4444] text-base lg:text-2xl text-white font-bold px-8 py-2 rounded-full hover:bg-[#a93b3b]">
            LOGIN
          </button>
        </Link>
      </div>
    </>
  )}

  {/* Hamburger menu (Mobile) */}
  <div className="lg:hidden">
    <button
      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      className="text-[#5B4E44] focus:outline-none"
    >
      {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
    </button>
  </div>
</div>


      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="w-full lg:hidden mt-4 text-[#5B4E44] font-semibold text-base space-y-3">
          <div className="flex flex-col space-y-2 px-4">
            <span className="hover:opacity-70"> <Link to="/">HOME</Link></span>
            <span className="hover:opacity-70">  <Link to="/about">ABOUT</Link></span>

            {/* Programs - collapsible */}
            <div>
              <button
                onClick={() => setShowPrograms(!showPrograms)}
                className="flex items-center justify-between w-full"
              >
                  <Link to="/programs">PROGRAMS</Link><span className="ml-2">▼</span>
              </button>
              {showPrograms && (
                <div className="pl-4 mt-2 space-y-1 text-sm text-black">
                  <p>BAKERY BUSINESS</p>
                  <p>ACCELERATOR PROGRAM</p>
                  <p>CLOUD KITCHEN</p>
                  <p>ACCELERATOR</p>
                </div>
              )}
            </div>

            {/* Courses - collapsible */}
            <div>
              <button
                onClick={() => setShowCourses(!showCourses)}
                className="flex items-center justify-between w-full"
              >
                <Link to="/courses">COURSES</Link> <span className="ml-2">▼</span>
              </button>
             
            </div>

            <span className="hover:opacity-70"><Link to="/contact">CONTACT</Link></span>
          </div>
        </div>
      )}
    </nav>
  );
}
