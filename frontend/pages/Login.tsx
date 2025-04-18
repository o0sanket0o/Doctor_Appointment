import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError('Invalid email format');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    try {
      const response = await fetch('http://localhost:8000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || 'Login failed');
        return;
      }

      // Store token and navigate
      localStorage.setItem('token', data.token);
      navigate('/dashboard'); // Redirect to dashboard after login
    } catch (error) {
      setError('Server error, please try again later');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-semibold text-[#5f6FFF] text-center mb-6">Login</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form className="flex flex-col gap-4" onSubmit={handleLogin}>
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
            Login
          </button>
        </form>
        <p className="text-gray-600 text-sm text-center mt-4">
          Don't have an account?{' '}
          <Link to="/signup" className="text-[#5f6FFF] font-medium hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};
