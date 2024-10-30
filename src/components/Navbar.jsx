import logo from "../assets/giftlogo.png";
import { FaLinkedin, FaGithub } from "react-icons/fa"; // Import LinkedIn and GitHub icons

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      {/* Logo Section - Keeping it as you originally had it */}
      <div className="flex flex-shrink-0 items-center">
        <img
          className="mx-2 w-100" // Original size for the logo
          style={{ marginTop: "-55px" }} // Original margin
          src={logo}
          alt="logo"
        />
      </div>

      {/* Social Links Section */}
      <div className="flex items-center gap-4">
        <a
          href="https://www.linkedin.com/in/gift-mphuthi"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300 text-3xl transition-colors duration-300"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/giftiem"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300 text-3xl transition-colors duration-300"
        >
          <FaGithub />
        </a>
      </div>

      {/* Mobile Menu - Hidden on large screens */}
      <div className="lg:hidden">
        {/* Add hamburger menu icon for mobile responsiveness */}
        <button className="text-white hover:text-gray-300">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
