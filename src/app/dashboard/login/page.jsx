"use client";
import React, { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex min-h-[80vh] items-center justify-center px-4 pt-16">
      <div className="w-full max-w-md p-8 rounded-xl shadow-lg bg-opacity-90 backdrop-blur-md">
        <h2 className="text-3xl font-extrabold text-center tracking-wide">Login</h2>

        <form className="mt-6 space-y-5">
          {/* Email Field */}
          <div>
            <label className="block text-sm font-semibold">Email</label>
            <input
              type="email"
              className="w-full mt-2 p-3 rounded-xl bg-gray-100 focus:ring-2 focus:ring-gray-400 focus:outline-none"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Field */}
          <div className="relative">
            <label className="block text-sm font-semibold">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              className="w-full mt-2 p-3 rounded-xl bg-gray-100 focus:ring-2 focus:ring-gray-400 focus:outline-none"
              placeholder="Enter your password"
              required
            />
            {/* Show/Hide Password Button */}
            <button
              type="button"
              className="absolute right-3 top-9 text-sm font-medium hover:underline"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full p-3 rounded-xl font-semibold tracking-wide shadow-md transition-transform transform hover:scale-105"
          >
            Sign In
          </button>
        </form>

        {/* Signup Link */}
        <p className="mt-5 text-center text-sm font-medium">
          Don't have an account? {" "}
          <a href="/signup" className="hover:underline font-semibold">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;