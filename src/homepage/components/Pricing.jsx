import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {
  FaInstagram, FaFacebook, FaLinkedin, FaTwitter,
  FaTelegram, FaPhone, FaPlay
} from "react-icons/fa";

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gray-100 py-10">
      {/* Header */}
      <div className="text-center mb-8 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#FBC02D]">
          Choose a plan that’s right for you.
        </h2>
        <p className="text-gray-600 mt-2">
          Trusted by small businesses worldwide. No hidden fees or unnecessary data sharing.
        </p>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-4 text-lg mb-6 text-gray-700">
        <FaFacebook /> <FaInstagram /> <FaTwitter /> <FaLinkedin /> <FaTelegram />
      </div>

      {/* Billing Toggle */}
      <div className="flex justify-center mb-6">
        <div className="bg-black text-white py-2 px-6 rounded-full flex items-center">
          <button
            className={`px-4 py-1 ${billingCycle === "monthly" ? "bg-white text-black rounded-full" : ""}`}
            onClick={() => setBillingCycle("monthly")}
          >
            Monthly
          </button>
          <button
            className={`px-4 py-1 ${billingCycle === "annually" ? "bg-white text-black rounded-full" : ""}`}
            onClick={() => setBillingCycle("annually")}
          >
            Annually (Save 20%)
          </button>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Plan 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center border">
            <h3 className="text-xl font-bold text-[#FBC02D]">Bootstrap</h3>
            <p className="text-gray-600">For solopreneurs and startups</p>
            <p className="text-4xl font-bold mt-3">${billingCycle === "monthly" ? "24" : "19"}</p>
            <p className="text-gray-500">per month, billed annually</p>
            <ul className="text-gray-600 mt-4 space-y-2">
              <li>✔ Connect up to 3 profiles</li>
              <li>✔ 1 User / Workspace</li>
              <li>✔ Analytics up to 3 months</li>
            </ul>
            <button className="bg-[#FBC02D] text-black w-full py-2 mt-9 rounded-lg font-semibold ">
              Start your free trial
            </button>
          </div>

          {/* Plan 2 (Most Popular) */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center border border-yellow-400 relative">
            <span className="absolute top-3 right-3 bg-blue-500 text-white text-xs px-3 py-1 rounded-full">Most Popular</span>
            <h3 className="text-xl font-bold text-[#3742fa]">Accelerate</h3>
            <p className="text-gray-600">Best for small businesses</p>
            <p className="text-4xl font-bold mt-3">${billingCycle === "monthly" ? "40" : "32"}</p>
            <p className="text-gray-500">per month, billed annually</p>
            <ul className="text-gray-600 mt-4 space-y-2">
              <li>✔ Connect up to 10 profiles</li>
              <li>✔ 3 Users / Workspaces</li>
              <li>✔ Analytics up to 2 years</li>
            </ul>
            <button className="bg-[#FBC02D] text-black w-full py-2 mt-9 rounded-lg font-semibold">
              Start your free trial
            </button>
          </div>

          {/* Plan 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center border">
            <h3 className="text-xl font-bold text-[#FBC02D]">Pro</h3>
            <p className="text-gray-600">For agencies and social managers</p>
            <p className="text-4xl font-bold mt-3">${billingCycle === "monthly" ? "82" : "66"}</p>
            <p className="text-gray-500">per month, billed annually</p>
            <ul className="text-gray-600 mt-4 space-y-2">
              <li>✔ Connect up to 25 profiles</li>
              <li>✔ 5 Users / Workspaces</li>
              <li>✔ Analytics up to 3 years</li>
            </ul>
            <button className="bg-[#FBC02D] text-black w-full py-2 mt-9 rounded-lg font-semibold">
              Start your free trial
            </button>
          </div>
        </div>
      </div>

      {/* Free Trial Section */}
      <div className="mt-10 px-4">
        <div className="bg-[#1E293B] text-white p-6 text-center rounded-lg max-w-4xl mx-auto">
          <h3 className="text-xl font-bold">Try before you buy: <span className="text-[#FBC02D]">14 days free</span></h3>
          <p className="text-gray-300 mt-2">Enjoy full unrestricted access to our Pro plan for two weeks.</p>
          <button className="mt-4 bg-[#FBC02D] text-black px-6 py-2 rounded-lg font-semibold">
            Get started for free &gt;
          </button>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Pricing;
