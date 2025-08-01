import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation } from 'react-router-dom';
import logo1 from "../assets/images/logo_img1.png";
import logo2 from "../assets/images/logo_img2.png";
import { Menu, X } from "lucide-react";
import { DropdownContext } from "../context/DropdownContext";

export default function Navbar() {
  const [hoverLogo, setHoverLogo] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showPrograms, setShowPrograms] = useState(false);
  const [showCourses, setShowCourses] = useState(false);
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const { isDropdownOpen, setIsDropdownOpen } = useContext(DropdownContext);

  useEffect(() => {
    const loggedIn = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedIn) setUser(loggedIn);
  }, []);

  const logout = () => {
    localStorage.removeItem("loggedInUser");
    setUser(null);
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get("openServices") === "true") {
      setIsDropdownOpen(true);
    }
  }, [location, setIsDropdownOpen]);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  // const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <nav className="bg-[#FFF5E1] px-4 sm:px-8 md:px-14 py-4 flex items-center justify-between flex-wrap">

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

      <ul className="hidden lg:flex items-center space-x-16 font-semibold text-[#5B4E44] text-base lg:text-2xl relative">
        <li className="hover:opacity-70 cursor-pointer">
          <Link to="/">HOME</Link>
        </li>

        <li className="hover:opacity-70 cursor-pointer">
          <Link to="/about">ABOUT</Link>
        </li>

        <li className="relative cursor-pointer ">
          <div
            className="flex items-center"
            onClick={() => {
              setIsDropdownOpen(!isDropdownOpen);
              setShowCourses(false); 
            }}
          >
            <span>PROGRAMS</span> <span className="ml-1">▼</span>
          </div>

          {isDropdownOpen && (
            <ul className="absolute left-0 top-full mt-2 bg-[#FFF5E1] shadow-md text-black p-4 space-y-2 w-56 z-30 text-base lg:text-xl">
              <li className="hover:font-semibold">
                <Link to="/bakery" onClick={() => setIsDropdownOpen(false)}>BAKERY BUSINESS ACCELERATOR PROGRAM</Link>
              </li>
              <li className="hover:font-semibold">
                <Link to="/cloud" onClick={() => setIsDropdownOpen(false)}>CLOUD KITCHEN ACCELERATOR PROGRAM</Link>
              </li>
            </ul>
          )}
        </li>


        <li
          className="relative cursor-pointer"
          onClick={() => {
            setShowCourses(!showCourses);
            setIsDropdownOpen(false);
          }}

        >
          <div className="flex items-center">
            <span>COURSES</span> <span className="ml-1">▼</span>
          </div>

          {showCourses && (
            <ul className="absolute left-0 top-full mt-2 bg-[#FFF5E1] shadow-md text-black p-4 space-y-2 w-[300px] z-20 text-sm lg:text-base font-semibold">
              <li className="hover:text-[#BF4444] cursor-pointer">
                <Link to="/courses">THE GOOD GUT PROGRAM</Link>
              </li>
              <li className="hover:text-[#BF4444] cursor-pointer">
                <Link to="/courses">FOOD LOOK GOOD</Link>
              </li>
              <li className="hover:text-[#BF4444] cursor-pointer">
                <Link to="/courses">START YOUR BUSINESS FROM HOME – NON VEG & VEG</Link>
              </li>
              <li className="hover:text-[#BF4444] cursor-pointer">
                <Link to="/courses">START YOUR FOOD BUSINESS FROM HOME – VEG ONLY</Link>
              </li>
              <li className="hover:text-[#BF4444] cursor-pointer">
                <Link to="/courses">IMMUNITY BOOSTER RECIPES</Link>
              </li>
              <li className="hover:text-[#BF4444] cursor-pointer">
                <Link to="/courses">INDIA’S FAVOURITES: RESTAURANTS AND HOME STYLE DISHES</Link>
              </li>
              <li className="hover:text-[#BF4444] cursor-pointer">
                <Link to="/courses">VEGETARIAN’S DELIGHT</Link>
              </li>
              <li className="hover:text-[#BF4444] cursor-pointer">
                <Link to="/courses">GARNISHING & PLATING</Link>
              </li>
            </ul>
          )}
        </li>

        <li className="hover:opacity-70 cursor-pointer"><Link to="/contact">CONTACT</Link></li>
      </ul>

      <div className="flex items-center space-x-3">
        {user ? (
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
            <div className="block lg:hidden">
              <Link to="/login">
                <button className="bg-[#BF4444] text-white text-sm font-bold px-4 py-1.5 rounded-full hover:bg-[#a93b3b]">
                  LOGIN
                </button>
              </Link>
            </div>

            <div className="hidden lg:block">
              <Link to="/login">
                <button className="bg-[#BF4444] text-base lg:text-2xl text-white font-bold px-8 py-2 rounded-full hover:bg-[#a93b3b]">
                  LOGIN
                </button>
              </Link>
            </div>
          </>
        )}

        <div className="lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-[#5B4E44] focus:outline-none"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="w-full lg:hidden mt-4 text-[#5B4E44] font-semibold text-base space-y-3">
          <div className="flex flex-col space-y-2 px-4">
            <span className="hover:opacity-70"> <Link to="/">HOME</Link></span>
            <span className="hover:opacity-70">  <Link to="/about">ABOUT</Link></span>

            <div>
              <button
                onClick={() => setShowPrograms(!showPrograms)}
                className="flex items-center justify-between w-full"
              >
                <span>PROGRAMS</span><span className="ml-2">▼</span>
              </button>
              {showPrograms && (
                <div className="pl-4 mt-2 space-y-1 text-sm text-black">
                  <p><Link to="/bakery" onClick={() => setShowPrograms(false)}>BAKERY BUSINESS</Link></p>
                  <p><Link to="/accelerator" onClick={() => setShowPrograms(false)}>ACCELERATOR PROGRAM</Link></p>
                  <p><Link to="/cloud" onClick={() => setShowPrograms(false)}>CLOUD KITCHEN</Link></p>
                  <p><Link to="/accelerator" onClick={() => setShowPrograms(false)}>ACCELERATOR</Link></p>
                </div>
              )}
            </div>

            <div>
              <button
                onClick={() => setShowCourses(!showCourses)}
                className="flex items-center justify-between w-full"
              >
                <span>COURSES</span> <span className="ml-2">▼</span>
              </button>

              {showCourses && (
                <div className="mt-2 pl-4 text-sm font-medium space-y-1 text-[#edd6c5]">
                  <p>THE GOOD GUT PROGRAM</p>
                  <p>FOOD LOOK GOOD</p>
                  <p>START YOUR BUSINESS FROM HOME – NON VEG & VEG</p>
                  <p>START YOUR FOOD BUSINESS FROM HOME – VEG ONLY</p>
                  <p>IMMUNITY BOOSTER RECIPES</p>
                  <p>INDIA’S FAVOURITES: RESTAURANTS AND HOME STYLE DISHES</p>
                  <p>VEGETARIAN’S DELIGHT</p>
                  <p>GARNISHING & PLATING</p>
                </div>
              )}
            </div>


            <span className="hover:opacity-70"><Link to="/contact">CONTACT</Link></span>
          </div>
        </div>
      )}
    </nav>
  );
}