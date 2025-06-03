import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/global.css';

const AddCustomer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', total_spent: '' });
  const navigate = useNavigate();

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/customers', formData);
    navigate('/segment');
  };

  return (
    <div className="page-wrapper">
      <h2>Add New Customer</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="number" name="total_spent" placeholder="Total Spent" onChange={handleChange} required />
        <button type="submit" className="btn">Add Customer</button>
      </form>
    </div>
  );
};

export default AddCustomer;


