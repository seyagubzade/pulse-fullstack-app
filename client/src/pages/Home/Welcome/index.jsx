import React from "react";
import SignIMG from "../../../assets/images/sign.png"
import "./styles.scss"
const Welcome = () => {
  return (
    <div className="welcome-section">
      <div className="container">
        <div className="welcome-header">
          <i class="fa-thin fa-meat"></i>
          <h3>Welcome</h3>
        </div>
        <div className="row">
            <div className="col-12 col-md-6 col-lg-4">
                <div className="info-content">
                    <span className="year">2002</span>
                    <p className="desc">In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.</p>
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
                <div className="info-content">
                    <span className="year">2002</span>
                    <p className="desc">In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.</p>
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
                <div className="info-content">
                    <span className="year">2002</span>
                    <p className="desc">In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.</p>
                </div>
            </div>
        </div>
        <div className="row">
            <img src={SignIMG} alt="" className="signature"/>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
