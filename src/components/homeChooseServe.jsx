import React from "react";

//images imports
import item1 from "../images/service/1.png";
import itemhover1 from "../images/service/1hover.png";
import item2 from "../images/service/2.png";
import itemhover2 from "../images/service/2hover.png";
import item3 from "../images/service/3.png";
import itemhover3 from "../images/service/3hover.png";
import item4 from "../images/service/4.png";
import itemhover4 from "../images/service/4hover.png";
import item5 from "../images/service/5.png";
import itemhover5 from "../images/service/5hover.png";
import item6 from "../images/service/6.png";
import itemhover6 from "../images/service/6hover.png";

function HomeChooseServe() {
  return (
    <div className="cont gray">
      <section className="choose-service">
        <div className="service-wrapper">
          <div className="service-item">
            <div />
            <img className="item" src={item1} alt={1} />
            <img className="item-hover" src={itemhover1} alt="hover"/>
            <p>Բարձր որակ և երաշխիք</p>
            <div />
          </div>
          <div className="service-item">
            <div />
            <img className="item" src={item2} alt={1} />
            <img className="item-hover" src={itemhover2} alt="hover"/>
            <p>Բարձր որակ և երաշխիք</p>
            <div />
          </div>
          <div className="service-item">
            <div />
            <img className="item" src={item3} alt={1} />
            <img className="item-hover" src={itemhover3} alt="hover"/>
            <p>Բարձր որակ և երաշխիք</p>
            <div />
          </div>
          <div className="service-item">
            <div />
            <img className="item" src={item4} alt={1} />
            <img className="item-hover" src={itemhover4} alt="hover"/>
            <p>Բարձր որակ և երաշխիք</p>
            <div />
          </div>
          <div className="service-item">
            <div />
            <img className="item" src={item5} alt={1} />
            <img className="item-hover" src={itemhover5} alt="hover"/>
            <p>Բարձր որակ և երաշխիք</p>
            <div />
          </div>
          <div className="service-item">
            <div />
            <img className="item" src={item6} alt={1} />
            <img className="item-hover" src={itemhover6} alt="hover"/>
            <p>Բարձր որակ և երաշխիք</p>
            <div />
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeChooseServe;
