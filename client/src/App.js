import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Auth from './components/Auth/Auth';
import Error from './components/Error/Error';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Auth />} />
        <Route path="/*" element={<Error/>}/>
      </Routes>
  </BrowserRouter>
  );
}

export default App;
