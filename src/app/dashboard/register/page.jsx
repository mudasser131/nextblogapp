"use client";
import React, { useState } from "react";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex min-h-[80vh] items-center justify-center px-4 pt-16">
      <div className="w-full max-w-md p-6 rounded-lg shadow-md ">
        <h2 className="text-2xl font-bold text-center">Sign Up</h2>

        <form className="mt-6 space-y-4">
          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium">Full Name</label>
            <input
              type="text"
              className="w-full mt-1 p-2  rounded-lg focus:ring-2 focus:outline-none"
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:outline-none"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Field */}
          <div className="relative">
            <label className="block text-sm font-medium">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:outline-none"
              placeholder="Create a password"
              required
            />
            {/* Show/Hide Password Button */}
            <button
              type="button"
              className="absolute right-3 top-9 text-sm"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          {/* Register Button */}
          <button type="submit" className="w-full p-2 rounded-lg border">
            Sign Up
          </button>
        </form>

        {/* Login Link */}
        <p className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <a href="/login" className="hover:underline">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
