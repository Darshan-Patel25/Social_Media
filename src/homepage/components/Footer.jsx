import React from "react";
import { 
  FaInstagram, FaFacebook, FaLinkedin, FaTwitter, 
  FaMapMarkerAlt, FaTelegram, FaPhone, FaPlay 
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#061d2c] text-white">
      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row justify-between gap-10">
        
        {/* Logo and Description */}
        <div className="md:w-1/3">
  <div className="flex items-center gap-3">
    <img src="./p2.jpeg" alt="Zenith Logo" className="h-16 mb-4" />
    <span className="text-4xl font-bold text-[#456EC8] pt-[-15]">Zenith</span>
  </div>
  
  <p className="text-lg leading-relaxed">
    Zenith is one of the best platforms to manage your social media accounts.
  </p>
  
  <p className="mt-4 text-lg font-semibold">Follow Us</p>
  
  <div className="flex gap-4 mt-2">
    <FaInstagram className="h-8 w-8 bg-[#1c4f71] rounded-full p-2 hover:bg-[#456EC8] cursor-pointer" />
    <FaFacebook className="h-8 w-8 bg-[#1c4f71] rounded-full p-2 hover:bg-[#456EC8] cursor-pointer" />
    <FaLinkedin className="h-8 w-8 bg-[#1c4f71] rounded-full p-2 hover:bg-[#456EC8] cursor-pointer" />
    <FaTwitter className="h-8 w-8 bg-[#1c4f71] rounded-full p-2 hover:bg-[#456EC8] cursor-pointer" />
  </div>
</div>


        {/* Quick Links */}
        <div className="md:w-1/4">
          <p className="text-xl font-semibold">Quick Links</p>
          <div className="border-b-2 border-[#456EC8] w-20 my-2"></div>
          <ul className="space-y-2 text-lg">
            <li className="flex items-center gap-2 hover:text-[#456EC8] cursor-pointer">
              <FaPlay className="text-[#456EC8] text-sm" /> Home
            </li>
            <li className="flex items-center gap-2 hover:text-[#456EC8] cursor-pointer">
              <FaPlay className="text-[#456EC8] text-sm" /> Services
            </li>
            <li className="flex items-center gap-2 hover:text-[#456EC8] cursor-pointer">
              <FaPlay className="text-[#456EC8] text-sm" /> Pricing
            </li>
            <li className="flex items-center gap-2 hover:text-[#456EC8] cursor-pointer">
              <FaPlay className="text-[#456EC8] text-sm" /> About Us
            </li>
            <li className="flex items-center gap-2 hover:text-[#456EC8] cursor-pointer">
              <FaPlay className="text-[#456EC8] text-sm" /> Dashboard
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="md:w-1/3">
          <p className="text-xl font-semibold">Contact Us</p>
          <div className="border-b-2 border-[#456EC8] w-20 my-2"></div>
          <p className="mt-3 flex items-center gap-2">
            <FaMapMarkerAlt className="text-[#456EC8]" /> 
            Block A A-804, Century Central, Kanakapura Rd, Bengaluru, 560078
          </p>
          <p className="mt-3 flex items-center gap-2">
            <FaTelegram className="text-[#456EC8]" /> 
            zenithsocialmediaservices@gmail.com
          </p>
          <p className="mt-3 flex items-center gap-2">
            <FaPhone className="text-[#456EC8]" /> 
            +91 9876543220
          </p>
        </div>
      </div>

      <div className="text-center bg-[#07273c] py-3 text-lg mt-4">
        Copyright &copy; 2025 Zenith. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
