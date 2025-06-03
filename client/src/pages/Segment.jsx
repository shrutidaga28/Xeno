import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/Segment.css';
 // New css file

const Segment = () => {
  const [segments, setSegments] = useState({ high: 0, medium: 0, low: 0 });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCustomers = async () => {
      const res = await axios.get('http://localhost:5000/api/customers');
      const customers = res.data;

      let high = 0, medium = 0, low = 0;
      customers.forEach(c => {
        if (c.total_spent > 1000) high++;
        else if (c.total_spent >= 500) medium++;
        else low++;
      });

      setSegments({ high, medium, low });
    };

    fetchCustomers();
  }, []);

  return (
    <div className="segment-container">
      <h2>Customer Segments</h2>
      <div className="segments-grid">
        <div className="segment-card high">
          <h3>High Spenders</h3>
          <p>{segments.high}</p>
        </div>
        <div className="segment-card medium">
          <h3>Medium Spenders</h3>
          <p>{segments.medium}</p>
        </div>
        <div className="segment-card low">
          <h3>Low Spenders</h3>
          <p>{segments.low}</p>
        </div>
      </div>
      <button className="btn-primary" onClick={() => navigate('/create')}>
        Proceed to Campaign
      </button>
    </div>
  );
};

export default Segment;
