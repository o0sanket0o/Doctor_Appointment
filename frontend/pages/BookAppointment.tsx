import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { doctors } from "../assets/assets_frontend/assets"; // Import doctors list

export const BookAppointment = () => {
  const { id } = useParams(); // Get doctor ID from URL
  const navigate = useNavigate();

  // Find doctor by ID
  const doctor = doctors.find((doc) => doc._id === id);

  if (!doctor) {
    return <div className="text-center text-red-500 text-xl">Doctor not found!</div>;
  }

  return (
    <div className="w-3/4 mx-auto my-10 p-6 bg-white shadow-md rounded-xl">
      <h2 className="text-3xl font-bold text-center text-[#333]">Book Appointment</h2>
      <div className="flex flex-col items-center mt-6">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-24 h-24 object-cover rounded-full border-4 border-[#5f6FFF]"
        />
        <h3 className="mt-3 text-xl font-semibold text-[#222]">{doctor.name}</h3>
        <p className="text-gray-500">{doctor.speciality}</p>
        <p className="text-gray-500">{doctor.experience} years of experience</p>
        <p className="text-yellow-500 font-bold mt-2">⭐ {doctor.rating} / 5</p>
      </div>

      {/* Appointment Form */}
      <div className="mt-6">
        <label className="block font-medium text-gray-700">Select Date:</label>
        <input type="date" className="w-full p-2 mt-1 border rounded-md" />

        <label className="block mt-4 font-medium text-gray-700">Select Time:</label>
        <input type="time" className="w-full p-2 mt-1 border rounded-md" />
      </div>

      {/* Buttons */}
      <div className="flex justify-between mt-6">
        <button
          className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
          onClick={() => navigate(-1)} // Go back to previous page
        >
          Go Back
        </button>
        <button className="px-4 py-2 bg-[#5f6FFF] text-white rounded-md hover:bg-[#4A55EE]">
          Confirm Appointment
        </button>
      </div>
    </div>
  );
};
