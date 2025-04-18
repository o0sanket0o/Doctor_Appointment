import React from "react";
import { useNavigate } from "react-router-dom";
import { doctors } from "../assets/assets_frontend/assets";

export const Doctors = () => {
  const navigate = useNavigate();

  return (
    <div className="w-3/4 mx-auto my-10">
      <h2 className="text-3xl font-bold text-center text-[#333]">Our Trusted Doctors</h2>
      <p className="text-center text-gray-600 mt-2">
        Book an appointment with top-rated doctors in your city.
      </p>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {doctors.map((doctor) => (
          <div
            key={doctor._id}
            className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
          >
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-full h-40 object-cover rounded-md"
            />
            <h3 className="text-xl font-semibold mt-3">{doctor.name}</h3>
            <p className="text-gray-600">{doctor.speciality}</p>
            <p className="text-sm text-gray-500">{doctor.degree}</p>
            <p className="text-sm text-gray-500">Experience: {doctor.experience}</p>
            <p className="text-sm text-gray-500">Fees: ${doctor.fees}</p>
            <div className="mt-2 text-sm text-gray-700">
              <p>{doctor.address.line1}</p>
              <p>{doctor.address.line2}</p>
            </div>
            <button
              className="bg-blue-500 text-white py-1 px-4 mt-3 rounded-md cursor-pointer hover:bg-blue-600 transition"
              onClick={() => navigate(`/book-appointment/${doctor._id}`)}
            >
              Book Appointment
            </button>

          </div>
        ))}
      </div>
    </div>
  );
};
