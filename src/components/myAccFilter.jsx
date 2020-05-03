import React, { Component } from "react";
import $ from "jquery";

//images import
import item1 from "../images/my-acc-filter/1.png";
import item2 from "../images/my-acc-filter/2.png";
import item3 from "../images/my-acc-filter/3.png";
import item4 from "../images/my-acc-filter/4.png";

class MyAccFilter extends React.Component {
  componentDidMount() {
    $(function () {
      "use strict";

      var newsList = $(".news-headlines"),
        newsListItems = $(".news-headlines li"),
        indexEl = 1;

      newsList.append('<li class="highlight nh-anim"></li>');
      newsListItems.addClass("nh-anim");

      function doClickItem() {
        newsListItems.on("click", function () {
          newsListItems.removeClass("selected");
          $(this).addClass("selected");

          indexEl = $(this).index() + 1;

          $(".my-news-content:nth-child(" + indexEl + ")")
            .siblings()
            .removeClass("top-content");
          $(".my-news-content:nth-child(" + indexEl + ")").addClass(
            "top-content"
          );
        });
      }

      function doWindowResize() {
        $(window).resize(function () {
          $(".selected").trigger("click");
        });
      }

      doClickItem();
      doWindowResize();
      $(".selected").trigger("click");
    });
  }
  render() {
    return (
      <div className="cont">
        <div>
          <div className="crumb-menu">
            <a href>
              Գլխավոր
              <i className="material-icons"></i>
            </a>
            <a href>
              Անձնական էջ
              <i className="material-icons"></i>
            </a>
          </div>
          <div className="my-action-info">
            <div className="leftAction">
              <div>
                <img src={item1} alt="1" />
              </div>
              <div>
                <h3>Anun Azganunf</h3>
                <div className="moneyRange">
                  <input
                    type="text"
                    className="orangeRange"
                    defaultValue="50 000 d/100 000 d"
                  />
                </div>
                <p>
                  kagavijak: lavaguyn gnord <i className="fa fa-star" />
                </p>
                <p>dzer ays amsva ashxatavardzy kazmel e 50 250d</p>
              </div>
            </div>
            <div className="rightAction">
              <button>
                <i className="fa fa-cog" /> popoxel
              </button>
            </div>
          </div>
          <div className="my-acc-demo">
            <div className="news-holder cf">
              <ul className="news-headlines">
                <li className="selected">im zambyuxy (4)</li>
                <li>patmutyun (6) </li>
                <li>toxnvac karciqner (2)</li>
                <li>havaqac apranqner (15)</li>
              </ul>
              <div className="news-preview">
                <div className="my-news-content top-content">
                  <ul className="bagInfo">
                    <li>
                      <div className="bagInfoImg">
                        <img src={item1} alt="1" />
                      </div>
                      <a href="#">
                        USB <span>giny 2500d</span>
                      </a>
                    </li>
                    <li>
                      <p>kod:</p>
                      <p>qanak:</p>
                      <p>guyn:</p>
                    </li>
                    <li>
                      <p> gtnvel e 20.20.20</p>
                      <p>aka e 5 hat</p>
                    </li>
                    <li>
                      <p>guary kazmel e</p>
                      <span>2500d</span>
                    </li>
                    <li className="makePurchase">
                      <button>
                        <a href="#">katarel gnum </a>
                      </button>
                    </li>
                  </ul>
                  <ul className="bagInfo">
                    <li>
                      <div className="bagInfoImg">
                        <img src={item1} alt="1" />
                      </div>
                      <a href="#">
                        USB <span>giny 2500d</span>
                      </a>
                    </li>
                    <li>
                      <p>kod:</p>
                      <p>qanak:</p>
                      <p>guyn:</p>
                    </li>
                    <li>
                      <p> gtnvel e 20.20.20</p>
                      <p>aka che</p>
                    </li>
                    <li>
                      <p>guary kazmel e</p>
                      <span>2500d</span>
                    </li>
                    <li className="makePurchase">
                      <button>
                        <a href="#">katarel gnum </a>
                      </button>
                    </li>
                  </ul>
                  <ul className="bagInfo">
                    <li>
                      <div className="bagInfoImg">
                        <img src={item1} alt="1" />
                      </div>
                      <a href="#">
                        USB <span>giny 2500d</span>
                      </a>
                    </li>
                    <li>
                      <p>kod:</p>
                      <p>qanak:</p>
                      <p>guyn:</p>
                    </li>
                    <li>
                      <p> gtnvel e 20.20.20</p>
                      <p>aka e 5 hat</p>
                    </li>
                    <li>
                      <p>guary kazmel e</p>
                      <span>2500d</span>
                    </li>
                    <li className="makePurchase">
                      <button>
                        <a href="#">katarel gnum </a>
                      </button>
                    </li>
                  </ul>
                  <ul className="bagInfo">
                    <li>
                      <div className="bagInfoImg">
                        <img src={item1} alt="1" />
                      </div>
                      <a href="#">
                        USB <span>giny 2500d</span>
                      </a>
                    </li>
                    <li>
                      <p>kod:</p>
                      <p>qanak:</p>
                      <p>guyn:</p>
                    </li>
                    <li>
                      <p> gtnvel e 20.20.20</p>
                      <p>aka e 5 hat</p>
                    </li>
                    <li>
                      <p>guary kazmel e</p>
                      <span>2500d</span>
                    </li>
                    <li className="makePurchase">
                      <button>
                        <a href="#">katarel gnum </a>
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="my-news-content">
                  <ul className="bagInfo">
                    <li>
                      <div className="bagInfoImg">
                        <img src={item1} alt="1" />
                      </div>
                      <a href="#">
                        USB <span>giny 2500d</span>
                      </a>
                    </li>
                    <li>
                      <p>kod:</p>
                      <p>qanak:</p>
                      <p>guyn:</p>
                    </li>
                    <li>
                      <p> gtnvel e 20.20.20</p>
                      <p>aka e 5 hat</p>
                    </li>
                    <li>
                      <p>guary kazmel e</p>
                      <span>2500d</span>
                    </li>
                    <li className="makePurchase">
                      <button>
                        <a href="#">katarel gnum </a>
                      </button>
                      <div className="custom-select">
                        <select>
                          <option value={0}>Gorcoxutyunner</option>
                          <option value={1}>boxoqel</option>
                          <option value={2}>toxnel karciq</option>
                          <option value={2}>jnjel patmutyuny</option>
                        </select>
                      </div>
                    </li>
                  </ul>
                  <ul className="bagInfo">
                    <li>
                      <div className="bagInfoImg">
                        <img src={item1} alt="1" />
                      </div>
                      <a href="#">
                        USB <span>giny 2500d</span>
                      </a>
                    </li>
                    <li>
                      <p>kod:</p>
                      <p>qanak:</p>
                      <p>guyn:</p>
                    </li>
                    <li>
                      <p> gtnvel e 20.20.20</p>
                      <p>aka che</p>
                    </li>
                    <li>
                      <p>guary kazmel e</p>
                      <span>2500d</span>
                    </li>
                    <li className="makePurchase">
                      <button>
                        <a href="#">katarel gnum </a>
                      </button>
                      <div className="custom-select">
                        <select>
                          <option value={0}>Gorcoxutyunner</option>
                          <option value={1}>boxoqel</option>
                          <option value={2}>toxnel karciq</option>
                          <option value={2}>jnjel patmutyuny</option>
                        </select>
                      </div>
                    </li>
                  </ul>
                  <ul className="bagInfo">
                    <li>
                      <div className="bagInfoImg">
                        <img src={item1} alt="1" />
                      </div>
                      <a href="#">
                        USB <span>giny 2500d</span>
                      </a>
                    </li>
                    <li>
                      <p>kod:</p>
                      <p>qanak:</p>
                      <p>guyn:</p>
                    </li>
                    <li>
                      <p> gtnvel e 20.20.20</p>
                      <p>aka e 5 hat</p>
                    </li>
                    <li>
                      <p>guary kazmel e</p>
                      <span>2500d</span>
                    </li>
                    <li className="makePurchase">
                      <button>
                        <a href="#">katarel gnum </a>
                      </button>
                      <div className="custom-select">
                        <select>
                          <option value={0}>Gorcoxutyunner</option>
                          <option value={1}>boxoqel</option>
                          <option value={2}>toxnel karciq</option>
                          <option value={2}>jnjel patmutyuny</option>
                        </select>
                      </div>
                    </li>
                  </ul>
                  <ul className="bagInfo">
                    <li>
                      <div className="bagInfoImg">
                        <img src={item1} alt="1" />
                      </div>
                      <a href="#">
                        USB <span>giny 2500d</span>
                      </a>
                    </li>
                    <li>
                      <p>kod:</p>
                      <p>qanak:</p>
                      <p>guyn:</p>
                    </li>
                    <li>
                      <p> gtnvel e 20.20.20</p>
                      <p>aka e 5 hat</p>
                    </li>
                    <li>
                      <p>guary kazmel e</p>
                      <span>2500d</span>
                    </li>
                    <li className="makePurchase">
                      <button>
                        <a href="#">katarel gnum </a>
                      </button>
                      <div className="custom-select">
                        <select>
                          <option value={0}>Gorcoxutyunner</option>
                          <option value={1}>boxoqel</option>
                          <option value={2}>toxnel karciq</option>
                          <option value={2}>jnjel patmutyuny</option>
                        </select>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="my-news-content">
                  <ul className="bagInfo">
                    <li>
                      <div className="opinionImg">
                        <img src={item1} alt="1" />
                      </div>
                      <a href="#">
                        USB <span>giny 2500d</span>
                      </a>
                    </li>
                    <li className="opinionText">
                      <div>
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <span>Gerazanc</span>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Atque esse libero nam perferendis similique? Ab
                        debitis, dolorem, ea hic ipsa odio odit quaerat quidem,
                        quisquam quod sunt tempore voluptas voluptates.
                      </p>
                      <img src={item1} alt="1" />
                      <img src={item1} alt="1" />
                      <img src={item1} alt="1" />
                      <img src={item1} alt="1" />
                      <img src={item1} alt="1" />
                      <p>noyember 02, 2020</p>
                    </li>
                    <li className="makePurchase">
                      <button>
                        <a href="#">katarel gnum </a>
                      </button>
                      <div className="custom-select">
                        <select>
                          <option value={0}>Gorcoxutyunner</option>
                          <option value={1}>popoxel</option>
                          <option value={2}>jnjel karciqy</option>
                        </select>
                      </div>
                    </li>
                  </ul>
                  <ul className="bagInfo">
                    <li>
                      <div className="opinionImg">
                        <img src={item1} alt="1" />
                      </div>
                      <a href="#">
                        USB <span>giny 2500d</span>
                      </a>
                    </li>
                    <li className="opinionText">
                      <div>
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <span>Gerazanc</span>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Atque esse libero nam perferendis similique? Ab
                        debitis, dolorem, ea hic ipsa odio odit quaerat quidem,
                        quisquam quod sunt tempore voluptas voluptates.
                      </p>
                      <p>noyember 02, 2020</p>
                      <div className="textChangeButtons">
                        <button className="save">hastatel</button>
                        <button className="cancel">chexarkel</button>
                      </div>
                    </li>
                    <li className="makePurchase">
                      <button>
                        <a href="#">katarel gnum </a>
                      </button>
                      <div className="custom-select">
                        <select>
                          <option value={0}>Gorcoxutyunner</option>
                          <option value={1}>popoxel</option>
                          <option value={2}>jnjel karciqy</option>
                        </select>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="my-news-content">
                  <ul className="bagInfo">
                    <li>
                      <div className="bagInfoImg">
                        <img src={item1} alt="1" />
                      </div>
                      <a href="#">
                        USB <span>giny 2500d</span>
                      </a>
                    </li>
                    <li>
                      <p>kod: 546546468</p>
                      <p>arka: 5 hat</p>
                    </li>
                    <li>
                      <p>
                        <i className="fa fa-heart" />
                      </p>
                    </li>
                    <li className="makePurchase">
                      <button>
                        <a href="#">katarel gnum </a>
                      </button>
                    </li>
                  </ul>
                  <ul className="bagInfo">
                    <li>
                      <div className="bagInfoImg">
                        <img src={item1} alt="1" />
                      </div>
                      <a href="#">
                        USB <span>giny 2500d</span>
                      </a>
                    </li>
                    <li>
                      <p>kod: 546546468</p>
                      <p>arka: 5 hat</p>
                    </li>
                    <li>
                      <p>
                        <i className="fa fa-heart" />
                      </p>
                    </li>
                    <li className="makePurchase">
                      <button>
                        <a href="#">katarel gnum </a>
                      </button>
                    </li>
                  </ul>
                  <ul className="bagInfo">
                    <li>
                      <div className="bagInfoImg">
                        <img src={item1} alt="1" />
                      </div>
                      <a href="#">
                        USB <span>giny 2500d</span>
                      </a>
                    </li>
                    <li>
                      <p>kod: 546546468</p>
                      <p>arka: 5 hat</p>
                    </li>
                    <li>
                      <p>
                        <i className="fa fa-heart" />
                      </p>
                    </li>
                    <li className="makePurchase">
                      <button>
                        <a href="#">katarel gnum </a>
                      </button>
                    </li>
                  </ul>
                  <ul className="bagInfo">
                    <li>
                      <div className="bagInfoImg">
                        <img src={item1} alt="1" />
                      </div>
                      <a href="#">
                        USB <span>giny 2500d</span>
                      </a>
                    </li>
                    <li>
                      <p>kod: 546546468</p>
                      <p>arka: 5 hat</p>
                    </li>
                    <li>
                      <p>
                        <i className="fa fa-heart" />
                      </p>
                    </li>
                    <li className="makePurchase">
                      <button>
                        <a href="#">katarel gnum </a>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="my-acc-pagination">
            <a href="#">‹</a>
            <a href="#">1</a>
            <a href="#" className="active">
              2
            </a>
            <a href="#">›</a>
          </div>
        </div>
      </div>
    );
  }
}

export default MyAccFilter;
