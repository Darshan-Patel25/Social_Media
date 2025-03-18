import React from "react";
import facebookIcon from "../assets/icon_faceboob.webp";
import twitterIcon from "../assets/icon_x.png";
import instagramIcon from "../assets/icon_insta.webp";
import linkedinIcon from "../assets/icon_linkedin.png";
import dashboardImage from "../assets/photo1.png";

const Hero = () => {
  const iconMap = {
    facebook: facebookIcon,
    twitter: twitterIcon,
    instagram: instagramIcon,
    linkedin: linkedinIcon,
  };

  return (
    <section className="relative py-8 overflow-hidden font-serif bg-gray-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        {/* Left Side - Image (No Padding/Margin) */}
        <div className="w-full md:w-1/2">
          <img
            src={dashboardImage}
            alt="TrendTide Dashboard"
            className="w-full h-auto"
           
          />
        </div>

        {/* Right Side - Content */}
        <div className="w-full md:w-1/2 text-center md:text-left mt-8 md:mt-0 px-6">
          <div className="inline-flex items-center bg-white px-4 py-2 rounded-full shadow-md mb-4 mt-10">
            <span className="text-sm text-blue-600 ">⚡ Instant Report</span>
          </div>
          <h1 className="text-3xl md:text-2xl font-bold text-gray-900 leading-tight mb-4">
  Track, Analyze, and Grow Your <br /> Social Media with Ease
</h1>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Track real-time audience growth, analyze follower trends, and identify potential clients—all in one place. Gain data-driven insights to optimize your strategy, boost engagement, and maximize conversions effortlessly!<br /> trends, and
            potential clients, all in one place.
          </p>
          <button className="bg-indigo-600 text-white py-3 px-6 rounded-md font-medium text-lg transition-all hover:bg-indigo-500">
            Start your free trial
          </button>

          {/* Social Icons */}
          <div className="flex mt-6 space-x-4">
            {Object.keys(iconMap).map((platform) => (
              <div
                key={platform}
                className="w-12 h-12 bg-white rounded-lg shadow-lg flex justify-center items-center p-2"
              >
                <img
                  src={iconMap[platform]}
                  alt={`${platform} icon`}
                  className="w-8 h-8 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
