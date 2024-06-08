import React from "react";
import "./Page4.scss";
import star1 from "../../assets/star-1.png";
import star3 from "../../assets/Star 3.png";
import Vector from "../../assets/Vector.png";
import mail from "../../assets/email.png"; 
import phone from "../../assets/phone.png"; 
import group from "../../assets/Group.png"; 
import apple from "../../assets/apple.png";
export default function Page4() {
  return (
    <div>
      <div className="faq" style={{ position: "relative" }}>
        <img
          src={star1}
          className="star"
          alt="star"
          style={{
            width: "50px",
            position: "absolute",
            right: "50%",
            top: "10%",
          }}
        />
        <img
          src={star3}
          alt="star"
          style={{
            width: "40px",
            position: "absolute",
            top: "-18%",
            left: "-10%",
          }}
        />

        <p style={{ color: "#FF5555" }}>FAQ</p>
        <h1>
          Frequently Asked <br />
          Questions
        </h1>

        <div className="grid">
          <p style={{ backgroundColor: "#FF5555", color: "white" }}>
            <span
              style={{ fontWeight: 750, display: "inline", fontSize: "large" }}
            >
              The Best Financial Accounting
              <br /> App Ever!
            </span>
            <br />
            <br />
            "Arcu at dictum sapien, mollis. Vulputate sit id
            <br /> accumsan, ultricies. In ultrices malesuada elit mauris."
          </p>
          <p>
            <span
              style={{ fontWeight: 750, display: "inline", fontSize: "large" }}
            >
              The Best Financial Accounting
              <br /> App Ever!
            </span>
            <br />
            <br />
            "Arcu at dictum sapien, mollis. Vulputate sit id
            <br /> accumsan, ultricies. In ultrices malesuada elit mauris."
          </p>
          <p>
            <span
              style={{ fontWeight: 750, display: "inline", fontSize: "large" }}
            >
              The Best Financial Accounting
              <br /> App Ever!
            </span>
            <br />
            <br />
            "Arcu at dictum sapien, mollis. Vulputate sit id
            <br /> accumsan, ultricies. In ultrices malesuada elit mauris."
          </p>
          <p style={{ backgroundColor: "#FF5555", color: "white" }}>
            <span
              style={{ fontWeight: 750, display: "inline", fontSize: "large" }}
            >
              The Best Financial Accounting
              <br /> App Ever!
            </span>
            <br />
            <br />
            "Arcu at dictum sapien, mollis. Vulputate sit id
            <br /> accumsan, ultricies. In ultrices malesuada elit mauris."
          </p>
          <p style={{ backgroundColor: "#FF5555", color: "white" }}>
            <span
              style={{ fontWeight: 750, display: "inline", fontSize: "large" }}
            >
              The Best Financial Accounting
              <br /> App Ever!
            </span>
            <br />
            <br />
            "Arcu at dictum sapien, mollis. Vulputate sit id
            <br /> accumsan, ultricies. In ultrices malesuada elit mauris."
          </p>
          <p>
            <span
              style={{ fontWeight: 750, display: "inline", fontSize: "large" }}
            >
              The Best Financial Accounting
              <br /> App Ever!
            </span>
            <br />
            <br />
            "Arcu at dictum sapien, mollis. Vulputate sit id
            <br /> accumsan, ultricies. In ultrices malesuada elit mauris."
          </p>
        </div>
      </div>

   
      <div
        className="app-parent"
        style={{
          backgroundRepeat: "no-repeat",
          backgroundPosition: "-10% -8%",
          backgroundSize: "500px",
          position: "relative",
        }}
      >
        <img
          src={star1}
          alt="star"
          style={{
            width: "50px",
            position: "absolute",
            right: "5%",
            top: "5%",
          }}
        />
        <img
          src={star3}
          alt="star"
          style={{
            width: "40px",
            position: "absolute",
            top: "40%",
            left: "4%",
          }}
        />
        <div className="app" id="app">
          <div>
            <h1 style={{ paddingTop: "150px" }}>Ready To Get Started?</h1>
            <p style={{ fontWeight: 400 }}>
              Risus habitant leo egestas mauris diam eget morbi tempus
              <br /> vulputate.
            </p>
            <button>
              Download App
              <img src={apple} alt="Vector" />
            </button>
          </div>
        </div>
      </div>

      <footer className="footer">
        <ul>
          <li>
            <img
              src={group}
              alt="Logo"
              id="Logo"
              width="100px"
            />
          </li>
          <li>
            <img
              src={mail}
              alt="Email"
              style={{ marginRight: "10px" }}
            />
            Help@Frybix.com
          </li>
          <li>
            <img
              src={phone}
              alt="Phone"
              style={{ marginRight: "10px" }}
            />
            +1 234 456 678 89
          </li>
        </ul>

        <ul>
          <li style={{ fontSize: "x-large" }}>Links</li>
          <li>Home</li>
          <li>About Us</li>
          <li>Booking</li>
          <li>Blog</li>
        </ul>

        <ul>
          <li style={{ fontSize: "x-large" }}>Legal</li>
          <li>Terms Of Use</li>
          <li>Privacy Policy</li>
          <li>Cookie Policy</li>
        </ul>

        <ul>
          <li style={{ fontSize: "x-large" }}>Product</li>
          <li>Take Tour</li>
          <li>Live Chat</li>
          <li>Reviews</li>
        </ul>

        <ul>
          <li style={{ fontSize: "x-large" }}>Newsletter</li>
          <li>Stay Upto Date</li>
          <li>
            <div
              className="mail"
              style={{
                backgroundColor: "white",
                height: "80px",
                width: "310px",
                display: "flex",
                alignItems: "center",
                borderRadius: "4px",
                justifyContent: "center",
              }}
            >
              Your Email<button>Subscribe</button>
            </div>
          </li>
        </ul>
      </footer>
      <hr className="fade-hr" />
      <center>
        <p style={{ marginBottom: "60px", marginTop: "30px", fontWeight: 600 }}>
          Copyright 2022 Uifry.com All Rights Reserved
        </p>
      </center>
    </div>
  );
}
