import React from "react";
import { motion } from "framer-motion";
import "./Page2.scss";
import features1 from "../../assets/features-1.png";
import star5 from "../../assets/star-05.png";
import star3 from "../../assets/Star 3.png";
import cube2 from "../../assets/cube-02.png";
import cube4 from "../../assets/cube-04.png";
import notif from "../../assets/notif.png";
import star1 from "../../assets/star-1.png";

export default function Page2() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="features-section">
        <img className="starrelative" src={star3} alt="" />

        <div className="img-container">
          <img src={features1} alt="" />
          <span className="bg-blur-yellow"></span>
          <span className="bg-blur-red"></span>
        </div>
        <div className="info-section">
          <div className="headings">
            <div className="h4" style={{ letterSpacing: "5px" }}>
              FEATURES
            </div>
            <div className="h2">Uifry Premium</div>
          </div>
          <div className="features-list">
            <div className="features-list-item">
              <img src={star5} alt="Star Icon" />
              <li>Budgeting Intervals</li>
            </div>

            <p>
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
            <div className="features-list-item">
              <img src={star5} alt="Star Icon" />
              <img src={cube2} alt="Cube Icon" />
              <li>Budgeting Intervals</li>
            </div>
            <p>
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
            <div className="features-list-item">
              <img src={cube4} alt="Cube Icon" />
              <li>Budgeting Intervals</li>
            </div>
            <p>
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
          </div>
        </div>
        <div className="img-container2">
          <span className="bg-blur-yellow"></span>
          <span className="bg-blur-red"></span>
        </div>
      </div>

      <div className="advantages-section">
        <div className="advantages info-section">
          <div className="headings">
            <div className="h4" style={{ letterSpacing: "5px" }}>
              ADVANTAGES
            </div>
            <div className="h2">Why Choose Uifry?</div>
          </div>
          <div className="features-list">
            <div
              className="features-list-item"
              style={{ display: "flex", gap: "15px", alignItems: "center", paddingBottom: "1.5rem" }}
            >
              <img src={notif} alt="Notification Icon" />
              <h2>Clever Notifications</h2>
            </div>

            <p>
              Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris etiam odio. Duis
              tristique lacus, et blandit viverra nisl velit. Sed mattis
              rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
              ac dolor neque lorem sapien, suspendisse aliquam.
            </p>
          </div>
        </div>

        <div className="img-container">
          <span className="bg-blur-yellow"></span>
          <span className="bg-blur-red"></span>

          <img src={features1} alt="" />
        </div>
        <img className="star1" src={star1} alt="" />
      </div>
    </motion.div>
  );
}
