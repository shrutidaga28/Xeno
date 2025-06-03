// // client/src/pages/Login.js
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isSignUp, setIsSignUp] = useState(false);
//   const [error, setError] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // For demo, just mock login/signup request
//       if (!email || !password) {
//         setError('Please enter both email and password');
//         return;
//       }

//       // Mock API call
//       if (isSignUp) {
//         // call your sign-up API here
//         // await fetch('/api/signup', ...)
//       } else {
//         // call your login API here
//         // await fetch('/api/login', ...)
//       }

//       // On success, redirect sequentially:
//       // Add Customer page → Segment page → Campaign page with delay or chained redirects
//       // Here we do it by navigating programmatically with small delays (simulate the flow)

//       navigate('/add-customer'); // 1st redirect

//       // After 1 sec redirect to segment
//     //   setTimeout(() => {
//     //     navigate('/segment');
//     //   }, 1000);

//     //   // After another 1 sec redirect to campaign
//     //   setTimeout(() => {
//     //     navigate('/campaigns');
//     //   }, 2000);

//     } catch (err) {
//       setError('Login/signup failed');
//     }
//   };

//   return (
//     <div style={{ maxWidth: 400, margin: 'auto', padding: 20 }}>
//       <h2>{isSignUp ? 'Sign Up' : 'Login'}</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={e => setEmail(e.target.value)}
//           required
//           style={{ width: '100%', marginBottom: 10, padding: 8 }}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={e => setPassword(e.target.value)}
//           required
//           style={{ width: '100%', marginBottom: 10, padding: 8 }}
//         />
//         <button type="submit" style={{ width: '100%', padding: 10 }}>
//           {isSignUp ? 'Sign Up' : 'Login'}
//         </button>
//       </form>
//       <p style={{ marginTop: 10, cursor: 'pointer', color: 'blue' }} onClick={() => setIsSignUp(!isSignUp)}>
//         {isSignUp ? 'Already have an account? Login' : "Don't have an account? Sign Up"}
//       </p>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//     </div>
//   );
// };

// export default Login;






// client/src/pages/Login.jsx
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../styles/Login.css';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     // dummy login, you can add actual auth logic
//     navigate('/segment');
//   };

//   return (
//     <div className="login-page">
//       <div className="overlay">
//         <div className="login-container">
//           <h1 className="brand-name">📢 CampaignCraft</h1>
//           <h2>Welcome Back!</h2>
//           <p className="tagline">Empowering smart customer engagement</p>
//           <form onSubmit={handleLogin}>
//             <input
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//             <button type="submit">Login</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../styles/Login.css'; // new css file for login styling

// const Login = () => {
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     // your login logic here
//     navigate('/add-customer');
//   };

//   return (
//     <div className="login-background">
//       <div className="login-container">
//         <h2>Welcome Back!</h2>
//         <form onSubmit={handleLogin} className="login-form">
//           <input type="email" placeholder="Email" required />
//           <input type="password" placeholder="Password" required />
//           <button type="submit" className="btn-primary">Log In</button>
//         </form>
//         <p className="signup-text">
//           Don't have an account?{' '}
//           <span className="signup-link" onClick={() => alert('Sign up flow here!')}>
//             Sign Up
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;


import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/Login.css';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // your login logic here
    navigate('/add-customer');  // ✅ will redirect after login
  };

  return (
    <div className="login-container">
      <div className="login-background"></div>
      <div className="login-content">
        <h1 className="login-title">Welcome to Craft Segment Convert</h1>
        <p className="login-subtitle">Your all-in-one customer marketing engine.</p>

        {/* ✅ Attach the login handler here */}
        <form className="login-form" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            className="login-input"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="login-input"
            required
          />
          <button type="submit" className="login-button">Log In</button>
        </form>

        <p className="login-signup">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;



