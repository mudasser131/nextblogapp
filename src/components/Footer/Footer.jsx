import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="  text-center py-6">
      <p className="text-sm mb-2">© {new Date().getFullYear()} MyApp. All rights reserved.</p>
      
      {/* Social Media Icons */}
      <div className="flex justify-center space-x-6 text-xl">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
          <FaGithub />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
          <FaLinkedin />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
          <FaTwitter />
        </a>
      </div>
    </footer>
  );
}
