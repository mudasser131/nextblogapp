"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import homeImage from "../public/Blogpost.jpg"; // Replace with your image

export default function HomeSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center mt-7 h-[80vh] px-8 md:px-20 py-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
      {/* Left Side - Text */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="md:w-1/2 space-y-6 text-center md:text-left"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900 dark:text-white">
          Welcome to{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            MyApp
          </span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          Build amazing experiences with modern technologies. Start your journey today!
        </p>
        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: "#22c55e" }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg shadow-lg font-semibold transition-transform duration-200"
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
        <div className="relative w-[300px] md:w-[500px] h-[300px] md:h-[500px]">
          <Image
            src={homeImage}
            alt="Home"
            layout="fill"
            objectFit="cover"
            className="rounded-2xl shadow-2xl border-4 border-gray-200 dark:border-gray-700"
          />
        </div>
      </motion.div>
    </section>
  );
}
