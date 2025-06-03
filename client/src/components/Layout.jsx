import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Layout.css';

const Layout = () => {
  return (
    <div className="app-layout">
      <nav className="navbar">
        <h1 className="logo">CampaignCraft</h1>
        <ul className="nav-links">
          <li><Link to="/segment">Segments</Link></li>
          <li><Link to="/add-customer">Add Customer</Link></li>
          <li><Link to="/create">Campaign</Link></li>
          <li><Link to="/">Logout</Link></li>
        </ul>
      </nav>
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
