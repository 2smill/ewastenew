import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/home';
import SignUp from './components/SignUp';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/footer" element={<Footer />} />

        {/* Define other routes */}
      </Routes>
    </Router>
  );
}

export default App;
