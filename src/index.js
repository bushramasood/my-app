import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Navbar from './components/navbar';
import Home from './components/Home';
import RegistrationForm from './components/registrationForm';
import LoginForm from './components/loginForm';
import Productdetail from './components/productdetail';
import Footer from './components/footer';
import { CartProvider } from './components/cart';
import Cart from './components/cart'; // Import the Cart component

function RootApp() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/registrationForm" element={<RegistrationForm />} />
          <Route path="/loginForm" element={<LoginForm />} />
          <Route path="/productdetail/:productId" element={<Productdetail />} />
          <Route path="/cart" element={<Cart />} /> 
        </Routes>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}

ReactDOM.render(<RootApp />, document.getElementById('root'));
