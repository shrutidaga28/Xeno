import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/global.css';

const CampaignForm = () => {
  const [segment, setSegment] = useState('');
  const [message, setMessage] = useState('');
  const [recipients, setRecipients] = useState([]);

  const handleSegmentChange = e => {
    setSegment(e.target.value);
  };

  const handleMessageChange = e => {
    setMessage(e.target.value);
  };

  const handleSend = async e => {
    e.preventDefault();
    // POST logic (not shown for brevity)
    alert(`Campaign sent to ${recipients.length} customers!`);
  };

  useEffect(() => {
    const fetchCustomers = async () => {
      if (!segment) return;

      const res = await axios.get('http://localhost:5000/api/customers');
      const customers = res.data;

      const filtered = customers.filter(c =>
        (segment === 'high' && c.total_spent > 1000) ||
        (segment === 'medium' && c.total_spent >= 500 && c.total_spent <= 1000) ||
        (segment === 'low' && c.total_spent < 500)
      );

      setRecipients(filtered);
    };

    fetchCustomers();
  }, [segment]);

  return (
    <div className="page-wrapper">
      <h2>Create Campaign</h2>
      <form onSubmit={handleSend}>
        <select onChange={handleSegmentChange} value={segment} required>
          <option value="">Select Segment</option>
          <option value="high">High Spenders</option>
          <option value="medium">Medium Spenders</option>
          <option value="low">Low Spenders</option>
        </select>
        <textarea placeholder="Enter message..." value={message} onChange={handleMessageChange} required />
        <button type="submit" className="btn">Send Campaign</button>
      </form>

      {recipients.length > 0 && (
        <>
          <h4>Sending to:</h4>
          <ul>
            {recipients.map(c => (
              <li key={c._id}>{c.name} - {c.email}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default CampaignForm;




