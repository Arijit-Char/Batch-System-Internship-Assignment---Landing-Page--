import React from "react";
import "./Page2.scss";
import features1 from "../../assets/features-1.png";
import star5 from "../../assets/star-05.png";
import cube2 from "../../assets/cube-02.png";
import cube4 from "../../assets/cube-04.png";
import notif from "../../assets/notif.png";

export default function Page2() {
  return (
    <div>
      <div class="features-section">
        <div class="img-container">
          <span class="bg-blur-red"></span>
          <img src={features1} alt="" />
        </div>
        <div class="info-section">
          <div class="headings">
            <div class="h4">FEATURES</div>
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
      </div>
      <div class="advantages-section">
        <div class="advantages info-section">
            <div class="headings">
                <div class="h4">ADVANTAGES</div>
                <div class="h2">Why Choose Uifry</div>
            </div>
            <div class="features-list">
                <div class="features-list-item">
                    <img src={notif}/>
                    <li>Clever Notifications</li>
                </div>

                <p>Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit
                    mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam
                    suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.
                </p>
            </div>
        </div>
        <div class="img-container">
            <span class="bg-blur-red"></span>
            <img src={features1} alt=""/>
        </div>
    </div>
    </div>
  );
}
