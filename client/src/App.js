





// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/create" element={<CampaignForm />} />
//         <Route path="/" element={<Login />} />
//         <Route path="/add-customer" element={<AddCustomer />} />
//         <Route path="/segment" element={<Segment />} />

//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CampaignForm from './pages/CampaignForm';
import Login from './pages/Login';
import AddCustomer from './pages/AddCustomer';
import Segment from './pages/Segment';
import Layout from './components/Layout';
import SignUp from './pages/SignUp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route element={<Layout />}>
          <Route path="/segment" element={<Segment />} />
          <Route path="/add-customer" element={<AddCustomer />} />
          <Route path="/create" element={<CampaignForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

