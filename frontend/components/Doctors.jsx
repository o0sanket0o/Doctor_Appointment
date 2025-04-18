import React from 'react'
import { doctors } from '../assets/assets_frontend/assets'
import { NavLink } from 'react-router-dom'

export const Doctors = () => {
  return (
    <div>
        <div className='grid sm:grid-cols-2 md:grid-cols-5 gap-4 mt-8'>
            {
                doctors.slice(0, 10).map((doctor) => (
                    <div className='rounded flex flex-col border-[#C9D8FF] border-2 hover:translate-y-[-10px] duration-500 transition-all w-[200px] pb-4 cursor-pointer'>
                        <img className='bg-[#EAEFFF] w-[200px]' src={doctor.image} alt="" />
                        <div className='px-4 mt-2'>
                            <div className='flex items-center gap-2 text-green-500'>
                                <p className='bg-green-500 rounded-full w-2 h-2'></p>
                                <p className=''>Available</p>
                            </div>
                            <p className='font-bold'>{doctor.name}</p>
                            <p className='text-gray-500 text-sm'>{doctor.speciality}</p>
                        </div>
                    </div>
                ))
            }
        </div>
        <div className='mt-8 flex justify-center items-center'>
            <NavLink to='/doctors'>
                <button className='bg-[#EAEFFF] cursor-pointer rounded-full px-12 py-3 text-gray-500'>more</button>

            </NavLink>
        </div>
    </div>
  )
}
