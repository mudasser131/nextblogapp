import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full py-6 flex flex-col items-center border-t border-gray-300 mt-10">
      <p className="text-sm md:text-base font-medium mb-4 tracking-wide">
        © {new Date().getFullYear()} MyApp. All rights reserved.
      </p>
      
      {/* Social Media Icons */}
      <div className="flex justify-center space-x-6 text-2xl">
        <a 
          href="https://github.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:scale-110 transition-transform duration-300"
        >
          <FaGithub />
        </a>
        <a 
          href="https://linkedin.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:scale-110 transition-transform duration-300"
        >
          <FaLinkedin />
        </a>
        <a 
          href="https://twitter.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:scale-110 transition-transform duration-300"
        >
          <FaTwitter />
        </a>
      </div>
    </footer>
  );
}
