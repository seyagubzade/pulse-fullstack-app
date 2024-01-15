import React from "react";
import "./styles.scss";

const OurServices = () => {
  return (
    <div className="our-services">
      <div className="container">
        <div className="welcome-header">
          <i class="fa-thin fa-bell-concierge"></i>
          <h3>Out Services</h3>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3">
            <div className="info-content">
              <i class="fa-light fa-mug-hot"></i>
              <p className="title">Breakfast</p>
              <p className="desc">
                In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus
                rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="info-content">
            <i class="fa-thin fa-pancakes"></i>
              <p className="title">Brunch</p>
              <p className="desc">
                In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus
                rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="info-content">
            <i class="fa-thin fa-pot-food"></i>
              <p className="title">Lunch</p>
              <p className="desc">
                In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus
                rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="info-content">
            <i class="fa-thin fa-burger-cheese"></i>
              <p className="title">Dinner</p>
              <p className="desc">
                In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus
                rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
