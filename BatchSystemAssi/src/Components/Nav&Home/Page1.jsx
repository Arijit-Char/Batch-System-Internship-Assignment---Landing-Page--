import React from "react";
import "./Page1.scss";
import logo from "../../assets/logo.png";
import Vector from "../../assets/Vector.png";
import iphone13layer1 from "../../assets/iPhone-13-layer-1.png";
import iphone13layer2 from "../../assets/iPhone-13-layer-2.png";
import star1 from "../../assets/star-1.png";
import star3 from "../../assets/Star 3.png";
import herologo1 from "../../assets/hero-logo1.png";
import herologo2 from "../../assets/hero-logo2.png";
import a from "../../assets/a.png";
import playicon from "../../assets/play_icon.png";

export default function Page1() {
  return (
    <div>
      <nav className="nav">
        <div className="logo">
          <img src={logo} alt="Logo" />
          <img src={Vector} alt="Vector" />
        </div>
        <ul>
          <li className="home-li-item">Home</li>
          <li>About Us</li>
          <li>Pricing</li>
          <li>Features</li>
        </ul>
        <button className="btn">Download</button>
        <img src={star1} alt="" />
      </nav>
      <img className="starrelative" src={star3} alt="" />
      <div className="hero">
       
        <div className="hero-text">
          <h2>
            Make The <span className="bg-blur-red"></span>
            <span className="bg-blur-yellow"></span> Best Financial Decisions
          </h2>
          <p>
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
            faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
          </p>
          <div className="hero-btn-div">
            <button className="btn">Get Started →</button>
            <div className="watch-now">
              <img src={playicon} alt="" />
              Watch Now
            </div>
          </div>
          <div className="ribbon">
            <img className="a" src={a} alt="" />
            <div className="ribbon-top">
              <div className="ribbon-top-left">
                <img src={herologo1} alt="" />
                <div className="ribbon-text">
                  <div>Achievements</div>
                  <div>Best Finance App on PlayStore</div>
                </div>
              </div>
              <hr />
              <div className="ribbon-top-right">
                <img src={herologo2} alt="" />
                <div className="ribbon-text">
                  <div>Finance</div>
                  <div>Most Popular Accounting App</div>
                </div>
              </div>
            </div>
            <div className="ribbon-mid">
              <p>Make The Best Financial Decisions</p>
            </div>
            <div className="ribbon-bottom">
              <img src={star1} alt="" />
              <div className="ribbon-bottom-text">
                <div>Uifry Premium</div>
                <div>Free Trial</div>
              </div>
            </div>
          </div>
        </div>
        <div className="img-container">
          <span className="ellipse-container">
            <span className="ellipse"></span>
            <span className="ellipse1"></span>
            <span className="ellipse2"></span>
          </span>
          <div className="img-bottom">
            <img src={iphone13layer1} alt="" />
          </div>
          <div className="img-mid">
            <img src={iphone13layer2} alt="" />
          </div>
          <div className="img-top">
            <img src={iphone13layer1} alt="" />
          </div>
          <span className="bg-blur-yellow"></span>
          <span className="bg-blur-red"></span>
        </div>
      </div>
    </div>
  );
}
