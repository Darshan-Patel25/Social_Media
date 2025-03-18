import React from "react";
import logo from "../../assets/cvm_img1.jpg"; // Replace with actual logo
import servicesImage from "../../assets/president_photo.jpg"; // Replace with actual services image

const AboutUs = () => {
  return (
    <section className="bg-gray-50 py-12 font-serif">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Logo & Intro Section */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Logo */}
          <div className="w-full md:w-1/3 flex justify-center">
            <img src={logo} alt="Zenith Logo" className="w-48 md:w-60 h-auto" />
          </div>

          {/* Company Description */}
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">About <span className="text-indigo-600">Zenith</span></h1>
            <p className="text-lg text-gray-700">
              At Zenith, we help brands, businesses, and creators simplify social media management 
              with powerful automation and analytics tools. Our AI-powered solutions allow users to 
              schedule content, track trends, engage with their audience, and optimize performance—all in one place.
            </p>
          </div>
        </div>

        {/* Services Section */}
        <div className="mt-12 flex flex-col md:flex-row items-center gap-10">
          {/* Services Image */}
          <div className="w-full md:w-1/2">
            <img 
              src={servicesImage} 
              alt="Zenith Services" 
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>

          {/* Services Description */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">How <span className="text-indigo-600">Zenith Works</span></h2>
            <p className="text-lg text-gray-700">
              Our platform is designed to handle everything from content scheduling and ad management 
              to social CRM and influencer tracking. With Zenith, you can automate social media tasks, 
              analyze audience engagement in real-time, and collaborate with your team effortlessly. 
              Our AI-powered tools provide deep insights into your campaigns, helping you stay ahead 
              of trends and maximize your reach.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              Whether you're a brand looking to improve engagement or an agency managing multiple clients, 
              Zenith offers the perfect suite of features to help you grow, connect, and convert—effortlessly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
