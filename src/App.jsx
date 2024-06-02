import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage/homepage';
import Products from './components/Products/products';
import About from './components/About/about';
import Checkout from './components/checkout/checkout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="products" element={<Products />} />
        <Route path="about" element={<About />} />
        <Route path="cart" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
