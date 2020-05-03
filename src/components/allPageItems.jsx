import React from "react";

//images imports
import item1 from "../images/all-pages/item1.png"
import item2 from "../images/all-pages/item2.png"
import item3 from "../images/all-pages/item3.png"
import item4 from "../images/all-pages/item4.png"
import item5 from "../images/all-pages/item5.png"
import item6 from "../images/all-pages/item6.png"

//components imports
import Header from "../components/header";
import Footer from "../components/footer";

function AllPageItems() {
  return (
    <div className="cont gray">
      {/* Start desc-panel */}
      <section className="all-page">
        <div className="item item1">
          <ul>
            <p>Համակարգիչներ</p>
            <li>Lorem ispum</li>
            <li>Lorem ispum</li>
            <li>Lorem ispum</li>
            <li>Lorem ispum</li>
            <li>Lorem ispum</li>
            <li>Lorem ispum</li>
            <li>Lorem ispum</li>
          </ul>
          <img src={item1} alt="item1" />
        </div>
        <div className="item item2">
          <ul>
            <p>Համակարգիչներ</p>
            <li>Lorem ispum</li>
            <li>Lorem ispum</li>
            <li>Lorem ispum</li>
            <li>Lorem ispum</li>
            <li>Lorem ispum</li>
            <li>Lorem ispum</li>
            <li>Lorem ispum</li>
          </ul>
          <img src={item2} alt="item2" />
        </div>
        <div className="item item3">
          <ul>
            <p>Համակարգիչներ</p>
            <li>Lorem ispum</li>
            <li>Lorem ispum</li>
            <li>Lorem ispum</li>
            <li>Lorem ispum</li>
            <li>Lorem ispum</li>
            <li>Lorem ispum</li>
            <li>Lorem ispum</li>
          </ul>
          <img src={item3} alt="item3" />
        </div>
        <div className="item item4">
          <ul>
            <p>Համակարգիչներ</p>
            <li>Lorem ispum</li>
            <li>Lorem ispum</li>
            <li>Lorem ispum</li>
            <li>Lorem ispum</li>
            <li>Lorem ispum</li>
            <li>Lorem ispum</li>
            <li>Lorem ispum</li>
          </ul>
          <img src={item4} alt="item4" />
        </div>
        <div className="item item5">
          <ul>
            <p>Համակարգիչներ</p>
            <li>Lorem ispum</li>
            <li>Lorem ispum</li>
            <li>Lorem ispum</li>
            <li>Lorem ispum</li>
            <li>Lorem ispum</li>
            <li>Lorem ispum</li>
            <li>Lorem ispum</li>
          </ul>
          <img src={item5} alt="item5" />
        </div>
        <div className="item item6">
          <ul>
            <p>Համակարգիչներ</p>
            <li>Lorem ispum</li>
            <li>Lorem ispum</li>
            <li>Lorem ispum</li>
            <li>Lorem ispum</li>
            <li>Lorem ispum</li>
            <li>Lorem ispum</li>
            <li>Lorem ispum</li>
          </ul>
          <img src={item6} alt="item6" />
        </div>
      </section>
      {/* End desc-panel */}
    </div>
  );
}

export default AllPageItems;
