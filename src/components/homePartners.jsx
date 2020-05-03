import React from "react";

//images imports
import item1 from "../images/partners/apple.png";
import item2 from "../images/partners/accer.png";
import item3 from "../images/partners/hoco.png";
import item4 from "../images/partners/genius.jpg";
import item5 from "../images/partners/remax.jpg";
import item6 from "../images/partners/anker.png";
import item7 from "../images/partners/honor.png";


function HomeSlider() {
  return (
    <div className="cont">
      <section className="partners">
        <div className="partner-wrapper">
          <div className="partner-img">
            <img src={item1} alt="apple" />
          </div>
          <div className="partner-img">
            <img src={item2} alt="acer" />
          </div>
          <div className="partner-img">
            <img src={item3} alt="hoco" />
          </div>
          <div className="partner-img">
            <img src={item4} alt="genius" />
          </div>
          <div className="partner-img">
            <img src={item5} alt="redmax" />
          </div>
          <div className="partner-img">
            <img src={item6} alt="anker" />
          </div>
          <div className="partner-img">
            <img src={item7} alt="honor" />
          </div>   
        </div>
      </section>
    </div>
  );
}

export default HomeSlider;
