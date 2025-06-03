// src/pages/SignUp.jsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import  '../styles/signup.css';

const SignUp = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // You can implement sign-up logic here
    console.log('Form Data:', formData);
    navigate('/'); // Redirect to login or home
  };

  return (
    <div className="signup-container">
      <h2>Create Your Account</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      <p>Already have an account? <Link to="/">Login here</Link></p>
    </div>
  );
};

export default SignUp;


