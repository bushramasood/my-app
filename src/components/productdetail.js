import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import productdata from './productdata';
import { CartContext } from './cart';
import './style.css';

function Productdetail() {
  const { productId } = useParams();
  const thisProduct = productdata.find((prod) => prod.id === productId);
  const { addToCart } = useContext(CartContext);
  

  if (!thisProduct) {
    return <div>Product not found.</div>;
  }

  const handleAddToCart = () => {
    addToCart(thisProduct);
  };

  return (
    <div className="container container-fluid component-below-nav">
      <div className="row d-flex justify-content-around mt-5">
        <div className="col-12 col-lg-5 img-fluid" id="product_image">
          <img
            src={thisProduct.image}
            alt="Product"
            height="500"
            width="500"
          />
        </div>

        <div className="col-12 col-lg-5 mt-5">
          <h3>{thisProduct.name}</h3>
          <p id="product_id">Product # {thisProduct.id}</p>

          <hr />

         
          <p id="product_price">PKR {thisProduct.price}</p>
          <div className="product-options">
            <label>
              Color:
              <select className="ml-2">
                <option value="black">Black</option>
                <option value="white">White</option>
                <option value="grey">Grey</option>
                <option value="blue">Blue</option>
              </select>
            </label>
          </div>

          <button onClick={handleAddToCart} id="cart_btn" className="btn btn-warning d-inline ml-4">
            Add to Cart
          </button>

          <hr />

          <hr />

          <h4 className="mt-2">Description:</h4>
          <p>{thisProduct.description}</p>
          <hr />
          <p id="product_seller mb-3">
            Sold by: <strong>{thisProduct.seller}</strong>
          </p>

          <button
            id="review_btn"
            type="button"
            className="btn btn-primary mb-4"
          >
            Submit Your Review
          </button>
        </div>
      </div>
    </div>
  );
}

export default Productdetail;