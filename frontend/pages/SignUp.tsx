import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const SignUp = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validateFullName = (name) => {
    const nameRegex = /^[A-Z][a-z]+(?:\s[A-Z][a-z]+)+$/;
    return nameRegex.test(name);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError('');

    if (!validateFullName(fullName)) {
      setError('Full name must start with uppercase letters and contain at least two words.');
      return;
    }
    if (!validateEmail(email)) {
      setError('Invalid email format.');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    try {
      const response = await fetch('http://localhost:8000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: fullName, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || 'Signup failed.');
        return;
      }

      alert('Signup successful! Please log in.');
      navigate('/login'); // Redirect to login page
    } catch (error) {
      setError('Server error, please try again later.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-semibold text-[#5f6FFF] text-center mb-6">Sign Up</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form className="flex flex-col gap-4" onSubmit={handleSignUp}>
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#5f6FFF]"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#5f6FFF]"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#5f6FFF]"
          />
          <button
            type="submit"
            className="bg-[#5f6FFF] text-white px-6 py-3 rounded-full font-light hover:translate-y-[-3px] duration-500"
          >
            Sign Up
          </button>
        </form>
        <p className="text-gray-600 text-sm text-center mt-4">
          Already have an account?{' '}
          <Link to="/login" className="text-[#5f6FFF] font-medium hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};
