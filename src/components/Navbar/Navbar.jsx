"use client"

import { useState } from "react";
import Link from "next/link";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="  p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}

        <h1 className="text-2xl font-bold">MyApp!</h1>


        <h1 className="text-2xl font-bold">
          <span className="text-green-400">Next</span>
          App</h1>


        {/* Desktop Menu */}
        <div className="hidden md:flex  gap-8 ">
          <DarkModeToggle/>
          <Link href="/" className="hover:text-gray-300">Home</Link>
          <Link href="/about" className="hover:text-gray-300">About</Link>
          <Link href="/contact" className="hover:text-gray-300">Contact</Link>
          <Link href="/blogs" className="hover:text-gray-300">blog</Link>

        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-2 mt-2 bg-gray-800 p-4">
          <Link href="/" className="hover:text-gray-300">Home</Link>
          <Link href="/about" className="hover:text-gray-300">About</Link>
          <Link href="/contact" className="hover:text-gray-300">Contact</Link>
        </div>
      )}
    </nav>
  );
}
