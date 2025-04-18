import React from 'react';

export const Banner = () => {
  return (
    <div className="relative mt-48 w-full h-[400px] md:h-[500px] flex items-center justify-center bg-gradient-to-r from-[#5f6FFF] to-[#3b4cba] text-white">
      <div className="text-center px-6 md:px-12">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in">
          Welcome to Our Healthcare Platform
        </h1>
        <p className="text-lg md:text-xl mt-4 opacity-90 animate-slide-up">
          Find the best doctors, book appointments, and manage your health seamlessly.
        </p>
        <button className="mt-6 px-6 py-3 bg-white text-[#5f6FFF] font-medium rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
};
