import React from 'react';

export const About = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center px-6 md:px-20 lg:px-40 mt-10">
      <h2 className="text-4xl font-bold text-[#5f6FFF] mb-4">About Healio</h2>
      <p className="text-gray-700 text-lg leading-relaxed">
        At <span className="font-semibold text-black">Healio</span>, we are committed to revolutionizing healthcare accessibility. 
        Our platform connects patients with trusted doctors, ensuring seamless appointment scheduling 
        and personalized healthcare experiences. We believe in bridging the gap between doctors and 
        patients through technology and innovation.
      </p>
      <div className="mt-10 flex justify-center">
        <img
          src="https://source.unsplash.com/800x400/?hospital,healthcare"
          alt="About Healio"
          className="rounded-lg shadow-lg hover:translate-y-[-10px] duration-500"
        />
      </div>
      <p className="text-gray-600 text-md mt-6">
        Join us in redefining the future of healthcare!
      </p>
    </div>
  );
};
