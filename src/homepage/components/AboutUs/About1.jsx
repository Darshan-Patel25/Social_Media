export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-4xl bg-white shadow-lg rounded-2xl p-8">
        <div className="text-center">
          <img 
            src="/images/about-us.jpg" 
            alt="About Zenith Social Media Services" 
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
          <p className="text-gray-600 text-lg mb-6">
            At <span className="font-semibold text-indigo-600">Zenith Social Media Services</span>, we specialize in social media management, helping businesses grow their online presence. Our services include content creation, account management, and performance analysis. We focus on building engagement and delivering results. Let us enhance your digital presence while you focus on your business.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="text-center p-4 border rounded-lg shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-indigo-600">Our Mission</h3>
            <p className="text-gray-600 mt-2">To empower businesses with smart social media tools.</p>
          </div>
          <div className="text-center p-4 border rounded-lg shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-indigo-600">Our Vision</h3>
            <p className="text-gray-600 mt-2">A world where social media is effortless and impactful.</p>
          </div>
          <div className="text-center p-4 border rounded-lg shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-indigo-600">Our Values</h3>
            <p className="text-gray-600 mt-2">Innovation, Integrity, and Customer Success.</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <a href="/contact" className="bg-indigo-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow hover:bg-indigo-700 transform hover:scale-105 transition">Get in Touch</a>
        </div>
      </div>
    </div>
  );
}
