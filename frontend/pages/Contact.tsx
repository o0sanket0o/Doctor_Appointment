import React from 'react';

export const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center px-6 md:px-20 lg:px-40 mt-10">
      <h2 className="text-4xl font-bold text-[#5f6FFF] mb-4">Contact Us</h2>
      <p className="text-gray-700 text-lg text-center">
        Have a question? Need assistance? Feel free to reach out!
      </p>

      <div className="mt-8 w-full max-w-lg bg-stone-100 p-6 rounded-lg shadow-lg">
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#5f6FFF]"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#5f6FFF]"
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#5f6FFF]"
          ></textarea>
          <button className="bg-[#5f6FFF] text-white px-6 py-3 rounded-full font-light hover:translate-y-[-3px] duration-500">
            Send Message
          </button>
        </form>
      </div>

      <p className="text-gray-600 text-md mt-6">
        Or email us at <span className="font-semibold text-black">support@healio.com</span>
      </p>
    </div>
  );
};
