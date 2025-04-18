import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import pfp from '../assets/assets_frontend/profile_pic.png';
import drop from '../assets/assets_frontend/dropdown_icon.svg';

export const Navbar = () => {
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);
    const [token, setToken] = useState(localStorage.getItem('token') || false);

    const handleLogout = () => {
        localStorage.removeItem('token');
        setToken(false);
        navigate('/login');
    };

    return (
        <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
            <div className='text-[2.2rem] font-bold cursor-pointer' onClick={() => navigate('/')}>Healio</div>

            <ul className='hidden md:flex items-center gap-5 font-medium text-[1rem]'>
                {['/', '/doctors', '/about', '/contact'].map((path, index) => (
                    <NavLink key={index} to={path} className={({ isActive }) => isActive ? 'text-blue-600 font-semibold' : ''}>
                        <li className='py-1 uppercase'>{path.replace('/', '') || 'Home'}</li>
                    </NavLink>
                ))}
                <NavLink to='/adminLogin'>
                    <li className='border-2 rounded-full border-gray-100 text-sm py-1 px-4'>Admin Panel</li>
                </NavLink>
            </ul>

            <div>
                {token ? (
                    <div className='flex items-center gap-2 cursor-pointer group relative'>
                        <img className='w-8 rounded-full' src={pfp} alt="Profile" />
                        <img className='w-2.5' src={drop} alt="Dropdown" />
                        <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                            <div className='min-w-48 bg-stone-100 text-gray-600 rounded flex flex-col gap-4 p-4'>
                                <p onClick={() => navigate('/my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                                <p onClick={() => navigate('/my-appointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
                                <p onClick={handleLogout} className='hover:text-black cursor-pointer'>Log Out</p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <button onClick={() => navigate('/login')} className='bg-[#5f6FFF] text-white px-8 py-3 rounded-full font-light hidden md:block cursor-pointer'>
                        Create Account
                    </button>
                )}
            </div>
        </div>
    );
};
