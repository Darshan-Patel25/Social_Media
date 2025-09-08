import React from "react";

const Benifits = () => {
  return (
    <section className="max-w-6xl mx-auto py-12 px-6">
      {/* Header Section */}
      <div className="text-center mb-12">
        <span className="text-sm font-medium text-yellow-500 uppercase tracking-wide">
          Our Features
        </span>
        <h2 className="text-4xl font-bold text-gray-900 mt-2">
          Get more value from our tools
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Connect your tools, connect your teams. With over 100 apps already
          available in our directory, your team's favourite tools are just a
          click away.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-10">
        {/* Feature 1 */}
        <div className="relative bg-yellow-50 text-gray-900 shadow-md rounded-xl p-6 flex flex-col items-center text-center hover:shadow-lg hover:-translate-y-2 transition duration-300">
          <div className="bg-white text-yellow-500 rounded-full p-4 mb-4 shadow-md">
            📅
          </div>
          <h3 className="text-2xl font-semibold">Smart Post Scheduler</h3>
          <p className="mt-3 text-gray-700">
            Ensures your content goes live at peak engagement times by
            intelligently queuing and publishing across multiple platforms.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="relative bg-yellow-100 text-gray-900 shadow-md rounded-xl p-6 flex flex-col items-center text-center hover:shadow-lg hover:-translate-y-2 transition duration-300">
          <div className="bg-white text-yellow-600 rounded-full p-4 mb-4 shadow-md">
            📆
          </div>
          <h3 className="text-2xl font-semibold">Smart Content Calendar</h3>
          <p className="mt-3 text-gray-700">
            Simplifies post planning across social platforms, allowing you to
            schedule content daily, weekly, or monthly with ease.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="relative bg-yellow-200 text-gray-900 shadow-md rounded-xl p-6 flex flex-col items-center text-center hover:shadow-lg hover:-translate-y-2 transition duration-300">
          <div className="bg-white text-yellow-700 rounded-full p-4 mb-4 shadow-md">
            📊
          </div>
          <h3 className="text-2xl font-semibold">Competitor & Sentiment Intelligence</h3>
          <p className="mt-3 text-gray-700">
            Tracks strategy shifts in competitors while monitoring positive and
            negative PR around your posts.
          </p>
        </div>
      </div>
      <div className=" w-1/5 h-3  my-4 rounded-full"></div>
    </section>
  );
};

export default Benifits;
