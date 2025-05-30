import React from "react";
import { Link } from "react-router-dom";
import { GraduationCap } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        
        {/* Left: Text */}
        <div className="text-center md:text-left max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Crack Your Dream Govt Job <br />
            With  <span className="text-blue-600">Kai</span>shun
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Join thousands of successful students. Get access to structured test series, expert guidance, and detailed performance analysis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              to="/courses"
              className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition text-lg font-medium"
            >
              Explore Courses
            </Link>
            <Link
              to="/signup"
              className="px-6 py-3 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition text-lg font-medium"
            >
              Register Now
            </Link>
          </div>
        </div>

        {/* Right: Hero Image */}
        <div className="flex justify-center md:justify-end w-full">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
            alt="Hero Illustration"
            className="w-80 md:w-[400px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
