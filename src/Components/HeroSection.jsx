import React from 'react';
import heroImage from '../Assest/3.jpg';

export default function HeroSection() {
  return (
    <section className="flex items-center min-h-screen py-16 px-4 bg-primary-color">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center w-full">
        {/* Content */}
        <div>
          <h1 className="text-5xl md:text-6xl font-bold text-sky-blue mb-6 leading-tight">
            Welcome to SmileCare
          </h1>
          <p className="text-lg text-black-color mb-10 leading-relaxed">
            Your Gateway to Curated Dental Cases &amp; Seamless Learning
          </p>
          <div className="flex gap-4 mb-12 flex-wrap md:flex-nowrap">
            <button className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold bg-buttons-color text-white border-none transition-transform duration-200 hover:-translate-y-0.5 shadow">
              <i className="fa-solid fa-upload"></i>
              <span>Upload a Case</span>
            </button>
            <button className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold bg-white text-sky-blue border-2 border-sky-blue transition-transform duration-200 hover:-translate-y-0.5 shadow">
              <i className="fa-solid fa-magnifying-glass"></i>
              <span>Browse Cases</span>
            </button>
          </div>
          <div className="flex gap-8">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-gray-800">500+</span>
              <span className="text-sm text-gray-600 mt-1">Clinical Cases</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-gray-800">1000+</span>
              <span className="text-sm text-gray-600 mt-1">Students</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-gray-800">50+</span>
              <span className="text-sm text-gray-600 mt-1">Specialists</span>
            </div>
          </div>
        </div>
        {/* Image */}
        <div className="relative">
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={heroImage}
              alt="Dental professional"
              className="w-full h-auto block transition-transform duration-300 hover:scale-105"
              loading="eager"
            />
          </div>
          <div className="absolute top-8 right-[-2rem] bottom-[-2rem] left-8 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-2xl z-0"></div>
        </div>
      </div>
    </section>
  );
}