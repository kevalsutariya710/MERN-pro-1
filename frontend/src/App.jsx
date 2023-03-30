import React from 'react';
import Login from './components/Login';
import Reg from './components/Reg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';

function App() {

  return (

    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reg" element={<Reg />} />
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App
