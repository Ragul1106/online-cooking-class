import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Courses from "./components/Courses";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Signup from "./components/SignUp";
import ScrollToTop from "./components/ScrollToTop";
import LoginNavbar from "./components/LoginNavbar";
import BakeryPromo from "./components/BakkeryPromo";
import CourseDescription from "./components/CourseDescription";
import EnrollmentForm from "./components/EnrollmentForm";
import EnrollNavbar from "./components/EnrollNavbar";
import CloudKitchen from "./components/CloudKitchen";
import ForgetPassword from "./components/ForgetPassword";
import EnrollSuccess from "./components/EnrollmentSuccess";
import { DropdownProvider } from "./context/DropdownContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function LayoutRoutes() {
  const location = useLocation();
  const isAuthPage = ["/login", "/signup", "/forgot-pass"].includes(location.pathname);
  const isEnrollPage = ["/enroll", "/enrollsuccess"].includes(location.pathname);

  return (
    <>
      <DropdownProvider>
        <ScrollToTop />
        {isAuthPage ? (
          <LoginNavbar />
        ) : isEnrollPage ? (
          <EnrollNavbar />
        ) : (
          <Navbar />
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-pass" element={<ForgetPassword />} />
          <Route path="/bakery" element={<BakeryPromo />} />
          <Route path="/cloud" element={<CloudKitchen />} />
          <Route path="/course-des" element={<CourseDescription />} />
          <Route path="/enroll" element={<EnrollmentForm />} />
          <Route path="/enrollsuccess" element={<EnrollSuccess />} />
        </Routes>
        <Footer />
      </DropdownProvider>
      <ToastContainer position="top-center" autoClose={3000} />
    </>
  );
}

function App() {
  return (
    <Router>
      <LayoutRoutes />
    </Router>
  );
}

export default App;
