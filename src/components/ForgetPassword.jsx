import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgetPassword = () => {
  useEffect(() => {
    document.title = "Online Cooking Class | Forget Password";
  }, []);

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic email empty check
    if (!email.trim()) {
      setError("Email is required");
      return;
    }

    // Get all registered users
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Find user with matching email
    const user = users.find((u) => u.email === email);

    if (!user) {
      toast.error("Email not found", {
        position: "top-right",
        autoClose: 2000,
      });
      return;
    }

    // If found, simulate sending password
    toast.success(`Password sent to ${email}`, {
      position: "top-center",
      autoClose: 2000,
    });

    setTimeout(() => {
      navigate("/login");
    }, 2200);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fffaf3] p-4">
      <div className="bg-[#fff1d1] p-8 rounded-2xl shadow-md w-full max-w-xl text-center relative">
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#a4ce4e] px-10 py-2 rounded-3xl text-2xl font-bold">
          FORGET PASSWORD
        </div>

        <form onSubmit={handleSubmit} className="mt-10 space-y-8">
          <div>
            <label className="block text-left font-bold text-xl mb-2">
              E-MAIL
            </label>
            <input
              type="email"
              className="w-full h-[9vh] px-4 py-2 border border-red-300 rounded-full shadow-md"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
              }}
              required
            />
          </div>

          {error && <p className="text-red-600 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-60 bg-[#BF4444] text-white text-lg py-2 rounded-full font-bold"
          >
            SUBMIT
          </button>
        </form>

        <p className="text-gray-500 text-sm mt-6">
          By Joining And Using Flover Theory Academy Platform, You Agree To Our{" "}
          <span className="underline">Terms & Policies</span>
        </p>
      </div>
    </div>
  );
};

export default ForgetPassword;
