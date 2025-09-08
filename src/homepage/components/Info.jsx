import React from "react";
import Image from "../assets/z8.png";
import z10 from "../assets/z10.png";
import z11 from "../assets/z11.png";
import z12 from "../assets/z12.png" ; // Replace with actual image imports

const SocialMediaManagement = () => {
  return (
    <section className="bg-white py-25 px-6 md:px-28">
  <div className="bg-yellow-200 w-1/5 h-3  my-4 rounded-full"></div>

      {/* Header Text */}
      <h1 className="text-2xl md:text-4xl font-semibold text-gray-900 leading-tight">
        Your all-in-one social <br/> media management tool
      </h1>

      {/* Content Section */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Side (Large Box) */}
        <div className="bg-yellow-100 p-4 rounded-xl shadow-md col-span-2">
          <h2 className="text-lg font-semibold text-gray-900">
            Design visually appealing content for all your feeds
          </h2>
          <p className="text-gray-600 text-lg mt-2">
            Take advantage of the in-app integrations with platforms like Canva,
            Unsplash, and GIPHY. Boost your creative abilities and get access to
            a wide variety of design elements.
          </p>
          <div className="mt-3">
            <img src={z10} alt="Design tools" width={700} height={300} className="rounded-lg" />
          </div>
        </div>

        {/* Right Side (Two Smaller Boxes) */}
        <div className="flex flex-col gap-3">
          {/* Manage Section */}
          <div className="bg-yellow-400 p-3 rounded-xl shadow-md h-40">
          <img src={z12} alt="Design tools" width={250} height={100} className="rounded-lg" />
           
          </div>
          <p className="text-gray-800 text-lg ">
              Successful social media management from one place.
            </p>

          {/* Team Collaboration Section */}
          <div className="bg-white border p-3 rounded-xl shadow-md">
            <img src={z11} alt="Team collaboration" width={250} height={150} className="rounded-lg" />
            
          </div>
          <p className="text-gray-700 text-lg mt-2">
              Work with your team to grow your social media presence.
            </p>
        </div>
      </div>
      <div className="w-1/5 h-3  my-4 rounded-full"></div>

      {/* Bottom Border Line */}
      <div className="mt-8 h-1.5 bg-gray-300 rounded-full w-full"></div>

    </section>
  );
};

export default SocialMediaManagement;
