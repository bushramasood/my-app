import React from 'react';
import './style.css';

function Footer() {
  return (
<footer className="bg-dark text-white mt-5 pt-4">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <img src="https://www.ismmartindustries.com/assets/white-logo-8d026f9b.png" width="200" height="200" alt="Company Logo" />
          </div>

          <div className="col-md-3">
            <h5 className="text-secondary">Services</h5>
            <ul className="list-unstyled">
                <li><a href="#" className="text-white">E-Commerce</a></li>
                <li><a href="#" className="text-white">Real Estate</a></li>
                <li><a href="#" className="text-white">Energy Sector</a></li>
                <li><a href="#" className="text-white">IT & Electronics</a></li>
                <li><a href="#" className="text-white">Cosmetic Industry</a></li>
                <li><a href="#" className="text-white">Import & Export</a></li>
                <li><a href="#" className="text-white">Automobiles Industry</a></li>
                <li><a href="#" className="text-white">Formal & Casual Wears</a></li>
                <li><a href="#" className="text-white">Handicrafts</a></li>
                </ul>
          </div>

          <div className="col-md-3">
            <h5 className="text-secondary">About Us</h5>
            <ul className="list-unstyled">
                <li><a href="#" className="text-white">Who we are</a></li>
                <li><a href="#" className="text-white">What we do</a></li>
                <li><a href="#" className="text-white">Chairman's Message</a></li>
                <li><a href="#" className="text-white">Company Profile</a></li>
            </ul>
            </div>


          <div className="col-md-3">
            <h5 className="text-secondary">Other</h5>
            <ul className="list-unstyled">
                <li><a href="#" className="text-white">Home</a></li>
                <li><a href="#" className="text-white">News</a></li>
                <li><a href="#" className="text-white">Locations</a></li>
                <li><a href="#" className="text-white">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="row mt-3">
            <div className="col-md-12 text-center text-info">
                <p className="text-warning">Contact us: ismmartindustries@gmail.com | Phone: (123) 456-7890</p>
                <h5>Central Headquarters</h5>
                <p>Plot No. 60, Street 12, G-8/1, Islamabad Capital Territory 44080 Pakistan.</p>
                <h5>Global Headquarters</h5>
                <p>Office # 1005, 10th Floor Citadel Tower Business bay Dubai</p>
            </div>
        </div>
      </div>


    <div className="row mt-4 pl-5 pt-3 bg-secondary">
            <div className="col-6">
                <p>&copy; 2023 Ismmart Group of Industries. All rights reserved.</p>
            </div>
            <div className="col-6">
            <ul className="list-inline">
                <li className="list-inline-item mr-3">
                    <a href="#" target="_blank"><i className="fab fa-facebook fa-lg text-white "></i></a>
                </li>
                <li className="list-inline-item mr-3">
                    <a href="#" target="_blank"><i className="fab fa-twitter fa-lg text-white "></i></a>
                </li>
                <li className="list-inline-item mr-3">
                    <a href="#" target="_blank"><i className="fab fa-instagram fa-lg text-white"></i></a>
                </li>
                <li className="list-inline-item mr-3">
                    <a href="#" target="_blank"><i className="fab fa-linkedin fa-lg text-white"></i></a>
                </li>
                <li className="list-inline-item mr-3">
                    <a href="#" target="_blank"><i className="fab fa-google fa-lg text-white"></i></a>
                </li>
                <li className="list-inline-item mr-3">
                    <a href="#" target="_blank"><i className="fab fa-facebook fa-lg text-white"></i></a>
                </li>
                <li className="list-inline-item mr-3">
                    <a href="#" target="_blank"><i className="fab fa-youtube fa-lg text-white"></i></a>
                </li>
                </ul>
            </div>
            </div>
    </footer>
  );
}

export default Footer;
