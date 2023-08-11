import React, { useContext, useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { CartContext } from './cart'; // Import the CartContext
import CartDropdown from './cart';

function Navbar() {
  const { cartItems } = useContext(CartContext); // Get the cartItems from the CartContext
  const [isCartOpen, setIsCartOpen] = useState(false);
  

  const toggleCart = () => {
    setIsCartOpen((prevValue) => !prevValue);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light navbar-fixed">
        <Link className="navbar-brand" to="/">
          <img src="https://ismmart.com/assets/1.913c8b1a.png" width="110" height="110" alt="Logo" />
        </Link>
        <div className="form-inline ml-2 ml-lg-5 flex-grow-1">
          <div className="input-group w-100">
          <div class="input-group-prepend">
          <span class="input-group-text"><i class="fas fa-search"></i></span>
        </div>
            <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
            <div className="input-group-append">
              <button className="btn bg-dark text-white" type="submit">Search</button>
            </div>
          </div>
        </div>
        <ul className="navbar-nav ml-auto d-flex align-items-center">
          <li className="nav-item active pr-3 ml-5">
            <Link className="btn btn-info" to="/registrationForm">
              Sign up
            </Link>
          </li>
          <li className="nav-item active pr-3">
            <Link className="btn btn-info" to="/loginForm">
              Login
            </Link>
          </li>
          <li className="nav-item d-flex align-items-center">
            {/* Show the cart count and toggle the dropdown */}
            <div className="dropdown">
              <button
                className="nav-link d-flex align-items-center btn btn-link dropdown-toggle"
                type="button"
                onClick={toggleCart}
              >
                <p className="text-warning d-inline-block mb-0">Cart <i className="fa fa-shopping-cart"></i>&nbsp;<span className="cart-count">{cartItems.length}</span></p>
              </button>
              {isCartOpen && (
                <div className="dropdown-menu dropdown-menu-right show">
                  <CartDropdown />
                </div>
              )}
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
