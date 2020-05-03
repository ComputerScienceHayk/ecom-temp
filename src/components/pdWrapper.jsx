import React,{Component} from "react";

import stars from "../images/stars.png";
import heart from "../images/heart.png";
import paypal from "../images/paypal.png";
import visa from "../images/visa.png";
import master from "../images/master.png";


class PdWrapper extends Component {
  componentDidMount() {
    
var x, i, j, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < selElmnt.length; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        h = this.parentNode.previousSibling;
        for (i = 0; i < s.length; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            for (k = 0; k < y.length; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  for (i = 0; i < y.length; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < x.length; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);
  }
  render() {
    return (
      <div className="cont">
        <section className="product-description-wrapper">
          <div className="crumb-menu">
            <a href>
              Գլխավոր
              <i className="material-icons"></i>
            </a>
            <a href>
              Համակարգիչներ
              <i className="material-icons"></i>
            </a>
            <a href>
              Համակարգչային աքսեսուարներ
              <i className="material-icons"></i>
            </a>
            <a href>
              Լիցքավորիչներ
              <i className="material-icons"></i>
            </a>
          </div>
          <div className="about-product">
            <div className="car-inner">
              
            </div>
            <div className="desc-inner">
              <div className="info">
                  <p className="fst">USB լիցքավորիչ ”Earldom” ES-143 IOS&ANDROID</p>
                  <div className="scnd">
                    <p>Brand: <span>hoco</span></p>
                    <img src={stars} alt="stars"/>
                    <p>17 դիտում</p>
                  </div>
                  <div className="thrsd">
                     Գին: <span>2500 ֏</span>
                  </div>
                  <div className="frth">
                    Առկա: <span>50</span> հատ
                  </div>
                  <div className="fvth">
                      <div className="fvth-first">
                        Գույն:
                        <div className="custom-select">
                          <select id="colorss">
                            <option value="Սպիտակ">Սպիտակ</option>
                            <option value="Չսպիտակ">Չսպիտակ</option>
                          </select>
                        </div>
                      </div>
                      <div className="fvth-second">
                        Քանակ:
                        <div className="count-div">
                          <div>-</div>
                          <div className="count-value">100</div>
                          <div>+</div>
                        </div>
                      </div>
                  </div>
                  <div className="sixth">
                    <div className="buy">Գնել</div>
                    <div className="add-to-cart">Ավելացնել զամբյուղ</div>
                    <div><img src={heart} alt="heart"/></div>
                  </div>
                  <div className="sevrth">
                    <p>Կոդ։ 1234567890</p>
                    <p>Ամբողջ արժեքը։ 250․000 ֏</p>
                  </div>
                  <div className="eigth">
                  Վճարման տեսակ։
                    <div className="paypal">
                      <img src={paypal} alt="paypal"/>
                    </div>
                    <div className="visa">
                      <img src={visa} alt="visa"/>
                    </div>
                    <div className="master">
                        <img src={master} alt="master"/>
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

export default PdWrapper;
