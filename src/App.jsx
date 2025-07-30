import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
// import Programs from "./pages/Programs";

import Bakery from "./components/BakkeryBuisness";
import CloudKitchen from "./components/Cloud_Kitchen";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";
import Login from "./components/Login";
import Signup from "./components/SignUp";
import CourseDescription from "./components/CourseDescriptionPage";
import MinimalNavbar from "./components/MinimalNavbar";
import { Cloud } from "lucide-react";

function LayoutRoutes() {
  const location = useLocation();
  const isAuthPage = ["/login", "/signup"].includes(location.pathname);

  return (
    <>
      {isAuthPage ? <MinimalNavbar /> : <Navbar />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/programs" element={<Programs />} /> */}
        <Route path="/courseDescription" element={<CourseDescription />} />
        <Route path="/cloud-kitchen" element={<CloudKitchen />} />
        <Route path="/bakery" element={<Bakery />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

      <Footer />
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
