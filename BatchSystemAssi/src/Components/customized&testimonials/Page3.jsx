import React from "react";
import { motion } from "framer-motion";
import "./Page3.scss";
import group35932 from "../../assets/Group 35932.png";
import group3597 from "../../assets/Group 35937.png";
import group35917 from "../../assets/Group 35917.png";
import testsec from "../../assets/Group 1000002332.png";
import star1 from "../../assets/star-1.png";
import star3 from "../../assets/Star 3.png";
import starfill from "../../assets/star-filled.png";

export default function Page3() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="customized">
        <div
          style={{
            float: "left",
            backgroundImage: `url(${group35932})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "650px",
            backgroundPosition: "60% 30%",
            position: "relative",
          }}
        >
          <img src={group3597} alt="group" />
          <img
            src={star1}
            alt="star"
            className="star"
            style={{
              width: "60px",
              position: "absolute",
              left: "1100px",
              top: "80%",
            }}
          />
          <img
            src={star3}
            alt="star"
            style={{
              width: "50px",
              position: "absolute",
              top: "0%",
              left: "550px",
            }}
          />
        </div>
        <div className="customized-section">
          <div className="heading">
            <img src={starfill} alt="icon" />
            <p
              style={{
                fontWeight: 900,
                display: "inline",
                fontSize: "x-large",
              }}
            >
              Fully Customizable
            </p>
          </div>
          <p style={{ paddingRight: "100px", width: "80%", lineHeight: "1.95rem", fontSize: "18px", color: "#0008", fontWeight: "700" }}>
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
            In ultrices malesuada elit mauris etiam odio. Duis
            tristique lacus, et blandit viverra nisl velit. Sed mattis
            rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
            ac dolor neque lorem sapien,
            suspendisse aliquam.
          </p>
        </div>
      </div>

      <div className="testimonials" id="testimonials">
        <center>
          <div className="testimonials-heading">
            <p style={{ fontWeight: "bold" }}>TESTIMONIALS</p>
            <h1>What Our Users <br /> Say About Us?</h1>
          </div>
        </center>
        <div className="testimonials-content">
          <div style={{ float: "left", backgroundRepeat: "no-repeat", backgroundSize: "650px", backgroundPosition: "-50% 60%" }}>
            <img src={testsec} alt="testimonials" />
          </div>
          <div className="testimonials-heading review">
            <div className="heading"><p style={{ fontWeight: 900, display: "inline", fontSize: "xx-large" }}>The Best Financial Accounting<br /> App Ever!</p></div>
            <p style={{ paddingRight: "100px" }}>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.”</p><br />
            <img src={group35917} alt="testimonial" />
            <p style={{ fontWeight: "bold", marginTop: "10px" }}>Nick Jonas</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
