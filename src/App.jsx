// src/App.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import AddHotel from './pages/AddHotel';
import Profile from './pages/Profile';
import Login from './pages/Login';
import SignIn from './pages/SignIn';
import Hotels from './pages/Hotels';
import HotelDetails from './components/HotelDetails';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/add-hotel" element={<AddHotel />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/hoteldetails" element={<HotelDetails />} />

      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
