import './App.css';
import React from 'react'
import About from './components/About/About'
import Navbar from './components/Navbar/Navbar.jsx'
import { Route, Routes } from 'react-router-dom';
import Live from './components/Live/Live'
import Contact from './components/Contact/Contact'


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<About />} />
      <Route path='/live' element={<Live />} />
      <Route path='/contact' element={<Contact />} />


    </Routes>
    </>
  );
}

export default App;
