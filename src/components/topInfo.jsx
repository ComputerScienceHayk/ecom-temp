import React from "react";

//shop cart 
import ShopCart from "../components/shopCart";

//images import
import logo from "../images/logo.png";
import profile from "../images/header/profile.png";
import nots from "../images/header/nots.png";
import shopp from "../images/header/shopp.png";

function TopInfo() {
  return (
    <div className="cont">
      <div className="top-wrapper">
        <a href="" className="logo">
          <img src={logo} alt="logo" />
        </a>
        <div />
        <div className="top-info">
          <div className="phone-number">
            Զանգահարեք մեզ:<span>010 276101</span>
          </div>
          <div className="us-dollar">
            US Dollar
            <i className="material-icons"></i>
          </div>
          <div className="actions">
            Գործողություններ
            <i className="material-icons"></i>
            <ul className="actions-ul">
              <li>
                <a>Վերջին դիտված</a>
              </li>
              <li>
                <a href="">Պահպանված</a>
              </li>
              <li>
                <a href="">Պատվերներ</a>
              </li>
            </ul>
          </div>
          <div className="pnc-wrapper">
            <div className="profile">
              <img src={profile} alt="profile" />
            </div>
            <div className="notiffications">
              <img src={nots} alt="notiffications" />
            </div>
            <div className="shopp-cart">
              <img src={shopp} alt="shopp-cart" />
              <div className="shopp-number">1</div>
            </div>
          </div>
        </div>
      </div>
      <div className="shop-cart-inner">
        <ShopCart />
      </div>
    </div>
  );
}

export default TopInfo;
