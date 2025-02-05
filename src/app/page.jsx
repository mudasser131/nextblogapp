import Image from "next/image";
import homeImage from "../public/Blogpost.jpg"; // Replace with your image

export default function HomeSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center mt-7 h-[80vh] px-8 md:px-20 py-16">
  {/* Left Side - Text */}
  <div className="md:w-1/2 space-y-6 text-center md:text-left">
    <h1 className="text-4xl md:text-6xl font-bold">
      Welcome to <span className="">MyApp</span>
    </h1>
    <p className="text-lg text-gray-300">
      Build amazing experiences with modern technologies. Start your journey today!
    </p>
    <button className="px-6 py-3 bg-green-500 hover:bg-green-600 rounded-md text-lg font-semibold">
      Get Started
    </button>
  </div>

  {/* Right Side - Image */}
  <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
    <Image src={homeImage} alt="Home" width={500} height={500} className="rounded-lg shadow-lg" />
  </div>
</section>
  );
}
