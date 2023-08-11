import React, { createContext, useContext, useState, useEffect } from 'react';
import './style.css';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    return storedCartItems;
  });

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const decreaseQuantity = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  console.log('cartItems:', cartItems);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, decreaseQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

function CartDropdown() {
  const { cartItems, addToCart, removeFromCart, decreaseQuantity } = useContext(CartContext);

  const handleAddToCart = (item) => {
    addToCart(item);
  };

  const handleRemoveFromCart = (itemId) => {
    removeFromCart(itemId);
  };

  const handleDecreaseQuantity = (itemId) => {
    decreaseQuantity(itemId);
  };

  return (
    <div className="cart-dropdown-container">
        <h6 className="dropdown-header bg-dark text-white text-center p-3">Your Cart</h6>
      {cartItems.length === 0 ? (
        <p className="text-center p-5">
          <strong>Your cart is empty.</strong>
          <br />
          No items. Please add products to your cart.
        </p>
      ) : (
        <ul className="cart-items-list mt-3">
          {cartItems.map((item) => (
            <li key={item.id}>
              <div className="cart-item">
                <span>{item.name}</span>&nbsp;&nbsp;
                <span>
                  <strong>Price: </strong>PKR {item.price}
                </span>
                  <div className="quantity">
                    <button className="btn btn-sm btn-info" onClick={() => handleAddToCart(item)}>
                      <i className="fa fa-plus"></i>
                    </button>&nbsp;&nbsp;
                    <span className="item-count">{item.quantity}</span>&nbsp;&nbsp;
                    <button
                      className="btn btn-sm btn-warning"
                      onClick={() => handleDecreaseQuantity(item.id)}> 
                      <i className="fa fa-minus"></i>
                    </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleRemoveFromCart(item.id)}>
                    <i className="fa fa-trash"></i>
                  </button>
                  </div>
                </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CartDropdown;