import React from "react";
// import Image from "assets/photo1.png";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaTelegram } from "react-icons/fa";
import z6 from "../assets/photo1.png";
import z7 from "../assets/z7.png";
import z8 from "../assets/z8.png";

const DashboardPreview = () => {
  return (
    <div className="relative flex flex-col items-center bg-[#E5E5DF]  w-full pb-10">
      {/* Section */}
      <section className="w-full bg-gradient-to-b from-gray-200 to-white text-center py-16 px-4">
      <h2 className="text-md uppercase text-gray-400 bg-gray-500 text-white text-center py-2 rounded-[75px] w-100 flex justify-center items-center ml-130 mt-10 ">
  NEW - Our Thread Integration is Here
</h2>

        <h1 className="text-4xl font-bold text-gray-900 mt-2">
          Create scroll-stopping feeds from one best
          <br /> social media management platform
        </h1>
        <p>Create, recycle, schedule, publish, analyze, engage, collaborate, and approve your
        <br />social media posts — all from one place.</p>
        <div className="flex justify-center items-center mt-4 gap-2">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="border px-3 py-2 rounded-md w-1/3" 
          />
          <button className="bg-yellow-400 text-black px-6 py-2 rounded-lg font-semibold">Start Now</button>
        </div>
        <p className="m-5">7-days free trial , no credit card required</p>
        <div className="mt-6 flex justify-center gap-4 text-gray-700 text-lg">
          <FaFacebook /> <FaInstagram /> <FaTwitter /> <FaLinkedin /> <FaTelegram />
        </div>
      </section>

     
      
        
      

      {/* Image Overlap */}
      <div className="relative mt-10 w-full flex justify-center">
  <div className="relative w-full max-w-6xl">
    <img src={z6} alt="Dashboard" width={1900} height={1080} className="w-full rounded-lg shadow-lg" />
    
    {/* Z7 Image - Increased size & adjusted position */}
    <div className="absolute top-[20%] left-[10%] w-1/2 md:w-1/3 lg:w-1/3 rounded-lg shadow-md z-20">
      <img src={z7} alt="Content Calendar" width={800} height={600} className="w-full h-auto" />
    </div>
    
    {/* Z8 Image - Increased size & adjusted position */}
    <div className="absolute bottom-[10%] right-[5%] w-1/2 md:w-1/3 lg:w-1/3 rounded-lg shadow-md z-20">
      <img src={z8} alt="Social Post" width={800} height={600} className="w-full h-auto" />
    </div>
  </div>
</div>

    </div>
  );
};

export default DashboardPreview;