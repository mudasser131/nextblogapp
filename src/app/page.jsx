"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import homeImage from "../public/Blogpost.jpg"; // Replace with your image

export default function HomeSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center mt-7 h-[80vh] px-8 md:px-20 py-16">
      {/* Left Side - Text */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="md:w-1/2 space-y-6 text-center md:text-left"
      >
        <h1 className="text-4xl md:text-6xl font-bold">
          Welcome to <span className="text-green-500">MyApp</span>
        </h1>
        <p className="text-lg">
          Build amazing experiences with modern technologies. Start your journey today!
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-green-500 hover:bg-green-600 rounded-md text-lg font-semibold"
        >
          Get Started
        </motion.button>
      </motion.div>

      {/* Right Side - Image */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="md:w-1/2 mt-10 md:mt-0 flex justify-center"
      >
        <Image src={homeImage} alt="Home" width={500} height={500} className="rounded-lg shadow-lg" />
      </motion.div>
    </section>
  );
}
