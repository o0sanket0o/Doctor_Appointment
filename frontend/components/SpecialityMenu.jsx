import React from 'react';
import { NavLink } from 'react-router-dom';
import dermat from '../assets/assets_frontend/Dermatologist.svg';
import gen_phy from '../assets/assets_frontend/General_physician.svg';
import gyno from '../assets/assets_frontend/Gynecologist.svg';
import neuro from '../assets/assets_frontend/Neurologist.svg';
import pedia from '../assets/assets_frontend/Pediatricians.svg';
import gastro from '../assets/assets_frontend/Gastroenterologist.svg';

const specialties = [
    { img: gen_phy, name: 'Physician', link: '/doctors?specialty=Physician' },
    { img: dermat, name: 'Dermatologist', link: '/doctors?specialty=Dermatologist' },
    { img: gyno, name: 'Gynecologist', link: '/doctors?specialty=Gynecologist' },
    { img: neuro, name: 'Neurologist', link: '/doctors?specialty=Neurologist' },
    { img: pedia, name: 'Pediatricians', link: '/doctors?specialty=Pediatricians' },
    { img: gastro, name: 'Gastroenterologist', link: '/doctors?specialty=Gastroenterologist' },
];

export const SpecialityMenu = () => {
    return (
        <div className='flex flex-col justify-center gap-6 items-center mt-8'>
            <h3 className='text-3xl font-bold'>Find By Speciality</h3>
            <p className='text-center text-sm'>
                Simply browse through our extensive list of trusted doctors,
                <br /> schedule your appointment hassle-free.
            </p>

            <div className='flex gap-4 w-1/2'>
                {specialties.map((specialty, index) => (
                    <NavLink key={index} to={specialty.link} className='flex flex-col justify-center items-center'>
                        <img
                            src={specialty.img}
                            className='cursor-pointer h-[80px] w-[80px] hover:translate-y-[-10px] duration-500'
                            alt={specialty.name}
                        />
                        <p className='text-center text-[11px]'>{specialty.name}</p>
                    </NavLink>
                ))}
            </div>

            <div className='flex flex-col justify-center items-center'>
                <h3 className='text-3xl'>Top Doctors to Book</h3>
                <p className='text-center text-sm mt-4'>
                    Simply browse through our extensive list of trusted <br /> doctors.
                </p>
            </div>
        </div>
    );
};
