import React from "react";
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
    <div>
      <div class="features-section">
        <img className="starrelative" src={star3} alt="" />

        <div class="img-container">
          <img src={features1} alt="" />
          <span class="bg-blur-yellow"></span>
          <span class="bg-blur-red"></span>
        </div>
        <div class="info-section">
          <div class="headings">
            <div class="h4" style={{letterSpacing:"5px"}}>FEATURES</div>
            <div class="h2">Uifry Premium</div>
          </div>
          <div class="features-list">
            <div class="features-list-item">
              <img src={star5} />
              <li>Budgeting Intervals</li>
            </div>

            <p>
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
            <div class="features-list-item">
              <img src={star5} />
              <img src={cube2} alt="" />
              <li>Budgeting Intervals</li>
            </div>
            <p>
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
            <div class="features-list-item">
              <img src={cube4} />
              <li>Budgeting Intervals</li>
            </div>
            <p>
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
          </div>
        </div>
        <div class="img-container2">
          <span class="bg-blur-yellow"></span>
          <span class="bg-blur-red"></span>
        </div>
      </div>

      <div class="advantages-section">
        <div class="advantages info-section">
          <div class="headings">
          
            <div class="h4" style={{letterSpacing:"5px"}}>ADVANTAGES</div>
            <div class="h2">Why Choose Uifry?</div>
          </div>
          <div class="features-list">
            <div class="features-list-item" style={{display:"flex",gap:"15px",alignItems:"center",paddingBottom:"1.5rem"}}>
              <img src={notif} />
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
        
        <div class="img-container">
          <span class="bg-blur-yellow"></span>
          <span class="bg-blur-red"></span>
          
          <img src={features1} alt="" />
          
        </div>
        <img className="star1" src={star1} alt="" />

      </div>
    </div>
  );
}
