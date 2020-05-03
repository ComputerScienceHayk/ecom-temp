import React, { Component } from "react";
import $ from "jquery";

class Nav extends Component {
  componentDidMount() {
    (function () {
      var burger = document.querySelector(".burger-container"),
        header = document.querySelector(".header");

      burger.onclick = function () {
        header.classList.toggle("menu-opened");
      };
    })();
  }
  render() {
    return (
      <div className="cont">
        <div className="navigation">
          <ul>
            <li className="nav-item item-hover">
              <a href>Համակարգիչներ</a>
              <ul className="first-item-hover">
                <li>
                  <a href="">Համակարգչային աքսեսուարներ</a>
                </li>
                <li>
                  <a href="">USB ադապտերներ/փոխակերպիչներ</a>
                </li>
                <li>
                  <a href="">Հիշողության քարտ</a>
                </li>
                <li>
                  <a href="">Մալուխ</a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href>Լապթոպներ</a>
            </li>
            <li className="nav-item">
              <a href> Հեռախոսներ</a>
            </li>
            <li className="nav-item">
              <a href>Ժամացույցներ</a>
            </li>
            <li className="nav-item">
              <a href> Մեքենայի պարագաներ</a>
            </li>
            <li className="nav-item">
              <a href>Պայուսակներ</a>
            </li>
          </ul>
          <div className="burger-menu window">
            <div className="header">
              <div className="burger-container">
                <div id="burger">
                  <div className="bar topBar" />
                  <div className="bar btmBar" />
                </div>
              </div>
              <ul className="menu">
                <li className="menu-item">
                  <a href="#">Համակարգիչներ</a>
                </li>
                <li className="menu-item">
                  <a href="#">Լապտոփներ</a>
                </li>
                <li className="menu-item">
                  <a href="#">Հեռախոսներ</a>
                </li>
                <li className="menu-item">
                  <a href="#">Ժամացույցներ</a>
                </li>
                <li className="menu-item">
                  <a href="#">Մեքենայի պարագաներ</a>
                </li>
                <li className="menu-item">
                  <a href="#">Պայուսակներ</a>
                </li>
              </ul>

              <div className="shop icon icon-bag" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
