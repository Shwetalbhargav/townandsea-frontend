import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sofa from "../Assets/sofa1.jpg";
import './LandingPage.css';
import { Link } from 'react-router-dom';
import CardGrid from './CardGrid';

const LandingPage = () => {
  return (
    <div className="landing-page">
      
      <div className="container-fluid landing-container d-flex p-0">
        
        <div className="left-half">
          <img
            src={Sofa}
            alt="Furniture"
            className="furniture-image"
          />
        </div>

        
        <div className="right-half d-flex align-items-center justify-content-center">
          <div className="text-content">
            <h2 className="reserve-title">The Reserve</h2>
            <p className="reserve-description">
              We are excited to share our curated collection of consignment items
              here on Town & Sea's Reserve. All of these exceptional pieces are
              immediately available at the listed price. Please contact us with
              any questions, offers, or shipping inquiries!
            </p>
            <Link to="/CardGrid">
            <button className="shop-now-btn">SHOP NOW</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage