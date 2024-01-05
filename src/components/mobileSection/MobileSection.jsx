import React from "react";
import "./mobileSection.css";
import backSvg from "../../assets/screens_background.svg";

import Carousel from "./Carousel/Carousel";


export default function MobileSection() {
  

  return (
    <section id="mobile-section">
      <div className="background-mobile-svg">
        <img src={backSvg} />
      </div>
      <div className="mobile-container">
        <div className="mobile-header">
          <h1 className="mobile-title">استمتع بتجربة فعّالة وسهلة</h1>
          <p className="mobile-desc">
            {" "}
            مع عرض شاشة تطبيق الجوال، حيث يُظهر لك كل تفصيل بسهولة على الشاشة،
            مما يجعل تجربتك مع التطبيق أكثر يسرًا وفهمًا. اكتشف مزاياه بمرونة
            واستمتع بتصفحه بكل يسر وسلاسة.
          </p>
        </div>

        <div className="mobile-screens-container">
              {/* display all screen inside Carousel */}
              <Carousel />

        </div>

      </div>
    </section>
    
  );
}
