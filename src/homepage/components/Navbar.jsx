import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Close desktop dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 font-serif h-20">
      <div className="w-[90%]  mx-auto flex justify-between items-center py-2 px-2 bg-[#F0F0F0] border-gray-300 rounded-[75px] mt-2">

        {/* Logo Section */}
        <div className="flex items-center gap-4">
          <NavLink to="/" className="flex items-center gap-2 text-3xl font-bold text-[#456EC8] font-lato">
            <img src="./p2.jpeg" alt="Logo" className="h-14 w-14" />
          </NavLink>
          <div className="flex flex-col">
            <span className="text-3xl font-bold text-[#456EC8]">Zenith</span>
            <span className="text-sm text-red-600 font-semibold">WE CAN MANAGE</span>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex flex-1 justify-start space-x-8 text-lg pl-20">
          <div className="relative" ref={dropdownRef}>
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)} 
              className="text-gray-700 hover:text-[#456EC8] focus:outline-none flex items-center"
            >
              Services  
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-160 bg-white rounded-lg shadow-lg p-2">
                <ul className="space-y-2">
                  {["Content Scheduling", "Social Engagement", "Analytics & Reporting", "Ad Management", "Team Collaboration", "Social CRM", "Hashtag & Influencer Tracking", "AI & Automation"].map((service, index) => (
                    <li key={index} className="px-4 py-2 text-gray-700 hover:bg-[#E0E8F9] cursor-pointer text-lg flex items-center">
                      <span className="mr-2">•</span>{service}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <NavLink to="/pricing" className="text-gray-700 hover:text-[#456EC8]">Pricing</NavLink>
          <NavLink to="/dashboard" className="text-gray-700 hover:text-[#456EC8]">Dashboard</NavLink>
          <NavLink to="/free-trial" className="text-gray-700 hover:text-[#456EC8]">Free Trial</NavLink>
          <NavLink to="/aboutus" className="text-gray-700 hover:text-[#456EC8]">About Us</NavLink>
        </div>

        {/* Desktop Log In Button */}
        <div className="hidden md:flex text-lg pl-20">
          <NavLink to="/signin" className="bg-[#DFE5A1] text-black px-4 py-2 rounded-[75px] hover:bg-[#5593D7]">
            Log In
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div ref={mobileMenuRef} className="md:hidden bg-white shadow-md rounded-lg mt-2 absolute w-full left-0 top-[80px] transition-all duration-300">
          <ul className="flex flex-col space-y-4 py-4 px-6 text-lg">
            {/* Mobile Services Dropdown */}
            <li>
              <button 
                onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)} 
                className="text-gray-700 hover:text-[#456EC8] flex justify-between w-full items-center"
              >
                Services <ChevronDown className="h-4 w-4" />
              </button>
              {isMobileDropdownOpen && (
                <ul className="mt-2 pl-4 space-y-2">
                  {["Content Scheduling", "Social Engagement", "Analytics & Reporting", "Ad Management", "Team Collaboration", "Social CRM", "Hashtag & Influencer Tracking", "AI & Automation"].map((service, index) => (
                    <li key={index} className="px-4 py-2 text-gray-700 hover:bg-[#E0E8F9] cursor-pointer text-md flex items-center">
                      <span className="mr-2">•</span>{service}
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <NavLink to="/pricing" className="text-gray-700 hover:text-[#456EC8]" onClick={() => setIsOpen(false)}>Pricing</NavLink>
            <NavLink to="/dashboard" className="text-gray-700 hover:text-[#456EC8]" onClick={() => setIsOpen(false)}>Dashboard</NavLink>
            <NavLink to="/free-trial" className="text-gray-700 hover:text-[#456EC8]" onClick={() => setIsOpen(false)}>Free Trial</NavLink>
            <NavLink to="/aboutus" className="text-gray-700 hover:text-[#456EC8]" onClick={() => setIsOpen(false)}>About Us</NavLink>
            <NavLink to="/signin" className="bg-[#DFE5A1] text-black px-4 py-2 rounded-lg hover:bg-[#5593D7] text-center" onClick={() => setIsOpen(false)}>
              Log In
            </NavLink>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
