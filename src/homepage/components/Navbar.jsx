import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null); // Reference for dropdown container

  // Function to handle clicks outside the dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }

    // Add event listener when dropdown is open
    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <div className="bg-[#f4f7fb] shadow-md sticky top-0 z-50 font-serif">
      <header className="flex justify-start items-center px-20 py-5">
        <NavLink
          to="/"
          className="flex items-center gap-2 text-2xl font-bold text-[#456EC8] font-lato"
        >
          <img src="./p2.jpeg" alt="Logo" height={40} width={40} />
          Zenith
        </NavLink>

        <nav className="flex justify-start gap-8 text-lg font-medium pl-14">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-gray-700 hover:text-[#456EC8] ${
                isActive ? "underline font-semibold" : ""
              }`
            }
          >
            Home
          </NavLink>

          {/* Services Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="text-gray-700 hover:text-[#456EC8] focus:outline-none font-medium"
            >
              Services
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-250 bg-white shadow-lg rounded-md border border-gray-200 py-3">
                <ul className="space-y-2">
                  <li className="flex items-center px-6 py-3 text-gray-700 hover:bg-[#E0E8F9] cursor-pointer text-lg">
                    <span className="w-3 h-3 bg-[#456EC8] rounded-full mr-3"></span> Content Scheduling
                  </li>
                  <li className="flex items-center px-6 py-3 text-gray-700 hover:bg-[#E0E8F9] cursor-pointer text-lg">
                    <span className="w-3 h-3 bg-[#456EC8] rounded-full mr-3"></span> Social Engagement
                  </li>
                  <li className="flex items-center px-6 py-3 text-gray-700 hover:bg-[#E0E8F9] cursor-pointer text-lg">
                    <span className="w-3 h-3 bg-[#456EC8] rounded-full mr-3"></span> Analytics & Reporting
                  </li>
                  <li className="flex items-center px-6 py-3 text-gray-700 hover:bg-[#E0E8F9] cursor-pointer text-lg">
                    <span className="w-3 h-3 bg-[#456EC8] rounded-full mr-3"></span> Ad Management
                  </li>
                  <li className="flex items-center px-6 py-3 text-gray-700 hover:bg-[#E0E8F9] cursor-pointer text-lg">
                    <span className="w-3 h-3 bg-[#456EC8] rounded-full mr-3"></span> Team Collaboration
                  </li>
                  <li className="flex items-center px-6 py-3 text-gray-700 hover:bg-[#E0E8F9] cursor-pointer text-lg">
                    <span className="w-3 h-3 bg-[#456EC8] rounded-full mr-3"></span> Social CRM
                  </li>
                  <li className="flex items-center px-6 py-3 text-gray-700 hover:bg-[#E0E8F9] cursor-pointer text-lg">
                    <span className="w-3 h-3 bg-[#456EC8] rounded-full mr-3"></span> Hashtag & Influencer Tracking
                  </li>
                  <li className="flex items-center px-6 py-3 text-gray-700 hover:bg-[#E0E8F9] cursor-pointer text-lg">
                    <span className="w-3 h-3 bg-[#456EC8] rounded-full mr-3"></span> AI & Automation
                  </li>
                </ul>
              </div>
            )}
          </div>

          <NavLink
            to="/aboutus"
            className={({ isActive }) =>
              `text-gray-700 hover:text-[#456EC8] ${
                isActive ? "underline font-semibold" : ""
              }`
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `text-gray-700 hover:text-[#456EC8] ${
                isActive ? "underline font-semibold" : ""
              }`
            }
          >
            Dashboard
          </NavLink>
        </nav>

        <NavLink
          className="bg-[#456EC8] text-white px-5 py-2 rounded-md border-none font-medium text-lg cursor-pointer transition-colors duration-200 hover:bg-[#5593D7] ml-160"
          to="/signin"
        >
          Sign In
        </NavLink>
      </header>
    </div>
  );
};

export default Navbar;
