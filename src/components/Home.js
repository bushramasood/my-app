import React, { useContext } from 'react';
import './style.css';
import productdata from './productdata';
import { Link } from 'react-router-dom';
import { CartContext } from './cart';

function Home() {
  const { cartItems } = useContext(CartContext);

  const products = productdata.map((product) => (
    <div key={product.id} className="col-lg-2 col-md-3 mt-4">
      <div className="card">
      <img className="card-img-top rounded" src={product.image} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">PKR {product.price}</p>
          <div className="container d-flex justify-content-center">
            {/* Pass the productId as a parameter in the Link */}
            <Link to={`/productdetail/${product.id}`} className="btn btn-primary">Buy now</Link>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div className='component-below-nav'>
      <div id="carouselExampleControls" className="carousel slide mt-5" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src="https://ismmart-production.s3.ap-south-1.amazonaws.com/1690836697678802-Website%20Banner%20Design%20%20%281%29.png" alt="First slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://ismmart-production.s3.ap-south-1.amazonaws.com/1675397242606337-app%202.jpg" alt="Second slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://ismmart-production.s3.ap-south-1.amazonaws.com/1679399027643530-1674547162303727-eacb4d28-27cd-46a6-8106-e3e93d356c7e.jpg" alt="Third slide" />
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
<h1 className="text-center mt-5">Products</h1>

      {/* Display product cards */}
      <div className="row">{products}</div>
      
      <div className="row mt-5">
    <div className="col-md-12">
      <img
        src="https://ismmart.com/assets/ismmart_quality.b7656675.jpg"
        alt="Product"
        className="img-fluid"
      />
    </div>
   </div>
      <div className="container container-fluid bg-light">
      <div className="row d-flex justify-content-around mt-5">
        <div className="col-12 col-lg-4 img-fluid mr-5" id="product_image">
          <img
            src="https://ismmart.com/assets/app-download-img-left.b740a5f9.png"
            alt="Product"
            height="400"
            width="400"
          />
        </div>
        <div className="col-12 col-lg-3 mt-5">
         <h1>One stop platform for all your needs</h1> 
          <p>At ISMMART, we aim to provide a platform where you can find everything you need.</p>   
      </div>

      <div className="col-12 col-lg-4 img-fluid" id="product_image">
          <img
            src="https://ismmart.com/assets/app-download-img.8634aab4.png"
            alt="Product"
            height="400"
            width="400"
          />
        </div>
      </div>
    </div>
      <div className="row mt-5">
          <div className="col-md-12">
            <img
              src="https://ismmart.com/assets/ismmart_appliances.3ff5fc98.jpg"
              alt="Product"
              className="img-fluid"
            />
          </div>
      </div>
 </div>
  );
}

export default Home;



