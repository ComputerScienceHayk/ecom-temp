import React, { Component } from "react";
import $ from "jquery";

import like from "../images/like.png";
import dis from "../images/dis.png";
import add from "../images/add-file.png";

class PdDeskPanel extends React.Component {
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

          $(".pd-news-content:nth-child(" + indexEl + ")")
            .siblings()
            .removeClass("top-content");
          $(".pd-news-content:nth-child(" + indexEl + ")").addClass(
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
        <section className="desc-panel">
          <div className="news-holder cf">
            <ul className="news-headlines">
              <li className="selected">Նկարագրություն</li>
              <li>Լրացուցիչ տեղեկություն</li>
              <li>Կարծիքներ (8)</li>
            </ul>
            <div className="pd-news-preview">
              <div className="pd-news-content top-content">
                <div className="wrapper first-filter-div">
                  <div className="item">
                    <p className="left">Չափսեր</p>
                    <p>12 x 5 սմ</p>
                  </div>
                  <div className="item">
                    <p className="left">Մատերիալ</p>
                    <p>Պլաստիկ</p>
                  </div>
                  <div className="item">
                    <p className="left">Գույն</p>
                    <p>Սպիտակ</p>
                  </div>
                  <div className="item">
                    <p className="left">Քաշ</p>
                    <p>45 գ</p>
                  </div>
                  <div className="item">
                    <p className="left">Տեսակ</p>
                    <p>Մեծ</p>
                  </div>
                  <div className="item">
                    <p className="left">Արտադրման տարեթիվը</p>
                    <p>2018 թ․</p>
                  </div>
                  <div className="item">
                    <p className="left">Մոդել</p>
                    <p>”Earldom” ES-143 IOS&ANDROID</p>
                  </div>
                  <div className="item">
                    <p className="left">Ապրանքանիշ</p>
                    <p>hoco</p>
                  </div>
                </div>
              </div>
              <div className="pd-news-content">
                <div className="wrapper second-filter-div">
                  <div className="first">
                    Հայտնի է, որ ընթերցողը, կարդալով հասկանալի տեքստ, չի
                    կարողանա կենտրոնանալ տեքստի ձևավորման վրա: Lorem Ipsum
                    օգտագործելը բացատրվում է նրանով, որ այն բաշխում է բառերը քիչ
                    թե շատ իրականի նման, ի տարբերություն «Բովանդակություն,
                    բովանդակություն» սովորական կրկննության, ինչը ընթերցողի համար
                    հասկանալի է:
                  </div>
                  <div className="second">
                    <ul>
                      <li>
                        Հակառակ ընդհանուր պատկերացմանը` Lorem Ipsum-ը այդքան էլ
                        պատահական հավաքված տեքստ չէ:{" "}
                      </li>
                      <li>
                        Այս տեքստի արմատները հասնում են Ք.ա. 45թ. դասական
                        լատինական գրականություն. այն 2000 տարեկան է:{" "}
                      </li>
                      <li>Lorem Ipsum-ը ամրագրված է Ք.ա 45թ.</li>
                      <li>
                        Lorem Ipsum օգտագործելը բացատրվում է նրանով, որ այն
                        բաշխում է բառերը քիչ թե շատ իրականի նման
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="pd-news-content t3rd">
                <div className="wrapper thrd-filter-div">
                  <div className="opinion-top">
                    <div className="left">
                      <div className="stars-inner">
                        <span>4.76</span>
                        <p>գնահատված</p>
                        <p>
                          <i class="far fa-star"></i>
                          <i class="far fa-star"></i>
                          <i class="far fa-star"></i>
                          <i class="far fa-star"></i>
                          <i class="far fa-star"></i>
                        </p>
                      </div>
                      <div className="mark-inner">
                        <div>
                          <p>5 աստղ</p>
                          <div className="mark"></div>
                          <p>15</p>
                        </div>
                        <div>
                          <p>4 աստղ</p>
                          <div className="mark"></div>
                          <p>4</p>
                        </div>
                        <div>
                          <p>3 աստղ</p>
                          <div className="mark"></div>
                          <p>0</p>
                        </div>
                        <div>
                          <p>2 աստղ</p>
                          <div className="mark"></div>
                          <p>0</p>
                        </div>
                        <div>
                          <p>1 աստղ</p>
                          <div className="mark"></div>
                          <p>0</p>
                        </div>
                      </div>
                    </div>
                    <div className="right">
                      <div className="add-opinion">Թողնել կարծիք</div>
                    </div>
                  </div>
                  <div className="opinion">
                    <div className="left">
                      <div className="avatar"></div>
                      <p>Անուն</p>
                    </div>
                    <div className="right">
                      <div>
                        <div>
                          <div className="stars">
                            <i class="far fa-star"></i>
                            <i class="far fa-star"></i>
                            <i class="far fa-star"></i>
                            <i class="far fa-star"></i>
                            <i class="far fa-star"></i>
                          </div>
                        </div>

                        <div className="like-dis">
                          <img src={like} alt="like" />
                          <img src={dis} alt="dis" />
                        </div>
                      </div>
                      <div>
                        Հայտնի է, որ ընթերցողը, կարդալով հասկանալի տեքստ, չի
                        կարողանա կենտրոնանալ տեքստի ձևավորման վրա: Lorem Ipsum
                        օգտագործելը բացատրվում է նրանով, որ այն բաշխում է բառերը
                        քիչ թե շատ իրականի նման, ի տարբերություն
                        «Բովանդակություն, բովանդակություն» սովորական
                        կրկննության, ինչը ընթերցողի համար հասկանալի է:
                      </div>
                    </div>
                  </div>
                  <div className="opinion">
                    <div className="left">
                      <div className="avatar"></div>
                      <p>Անուն</p>
                    </div>
                    <div className="right">
                      <div>
                        <div>
                          <div className="stars">
                            <i class="far fa-star"></i>
                            <i class="far fa-star"></i>
                            <i class="far fa-star"></i>
                            <i class="far fa-star"></i>
                            <i class="far fa-star"></i>
                          </div>
                        </div>

                        <div className="like-dis">
                          <img src={like} alt="like" />
                          <img src={dis} alt="dis" />
                        </div>
                      </div>
                      <div>
                        Հայտնի է, որ ընթերցողը, կարդալով հասկանալի տեքստ, չի
                        կարողանա կենտրոնանալ տեքստի ձևավորման վրա: Lorem Ipsum
                        օգտագործելը բացատրվում է նրանով, որ այն բաշխում է բառերը
                        քիչ թե շատ իրականի նման, ի տարբերություն
                        «Բովանդակություն, բովանդակություն» սովորական
                        կրկննության, ինչը ընթերցողի համար հասկանալի է:
                      </div>
                    </div>
                  </div>
                  <div className="opinion">
                    <div className="left">
                      <div className="avatar"></div>
                      <p>Անուն</p>
                    </div>
                    <div className="right">
                      <div>
                        <div>
                          <div className="stars">
                            <i class="far fa-star"></i>
                            <i class="far fa-star"></i>
                            <i class="far fa-star"></i>
                            <i class="far fa-star"></i>
                            <i class="far fa-star"></i>
                          </div>
                        </div>

                        <div className="like-dis">
                          <img src={like} alt="like" />
                          <img src={dis} alt="dis" />
                        </div>
                      </div>
                      <div>
                        Հայտնի է, որ ընթերցողը, կարդալով հասկանալի տեքստ, չի
                        կարողանա կենտրոնանալ տեքստի ձևավորման վրա: Lorem Ipsum
                        օգտագործելը բացատրվում է նրանով, որ այն բաշխում է բառերը
                        քիչ թե շատ իրականի նման, ի տարբերություն
                        «Բովանդակություն, բովանդակություն» սովորական
                        կրկննության, ինչը ընթերցողի համար հասկանալի է:
                      </div>
                    </div>
                  </div>
                  <div className="add-opinion">
                    <div className="left">
                      <div className="avatar"></div>
                      <p>Անուն</p>
                    </div>
                    <div className="right">
                      <div>
                        <div>
                          <div className="stars">
                            <i class="far fa-star"></i>
                            <i class="far fa-star"></i>
                            <i class="far fa-star"></i>
                            <i class="far fa-star"></i>
                            <i class="far fa-star"></i>
                          </div>
                        </div>

                        <p>Գնահատել</p>
                      </div>
                      <div className="text-wrapper">
                        <input
                          type="text"
                          placeholder="Թողնել կարծիք ապրանքի վերաբերյալ․․․"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="add-button-inner">
                    <label className="choose-file-inner" htmlFor="upload">
                      {" "}
                      <img src={add} alt="add" /> կցել նկար
                      <input className="choose-file" id="upload" type="file" />
                    </label>
                    <button className="add-an-opinion">Թողնել կարծիք</button>
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
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default PdDeskPanel;
