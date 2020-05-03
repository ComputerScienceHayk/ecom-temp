import React, { Component } from "react";

//images imports
import item1 from "../images/categories/item1.png"
import item2 from "../images/categories/item2.png"
import item3 from "../images/categories/item3.png"
import item4 from "../images/categories/item4.png"
import item5 from "../images/categories/item5.png"
import item6 from "../images/categories/item6.png"

import { BrowserRouter as Router, Switch, Route, Redirect, Link} from 'react-router-dom';
import ProductDescription from "../pages/productDescription";
import HomePage from "../pages/homePage";

function MostPopular() {
  return (
    <div className="cont">
      <section className="most-popular">
        <h1>Ամենապահանջված տեսականին</h1>
        <div className="popular-items-wrapper">
          <div className="item">
            <img src={item1} alt={1} />
            <div className="popular-items-wrapper-item-hover">
              <p>Կատեգորիա № 1</p>
              <button>
                <a href="">Ավելին</a>
              </button>
            </div>
          </div>
          <div className="item">
            <img src={item2} alt={2} />
            <div className="popular-items-wrapper-item-hover">
              <p>Կատեգորիա № 2</p>
              <button>Ավելին</button>
            </div>
          </div>
          <div className="item">
            <img src={item3} alt={3} />
            <div className="popular-items-wrapper-item-hover">
              <p>Կատեգորիա № 3</p>
              <button>Ավելին</button>
            </div>
          </div>
          <div className="item">
            <img src={item4} alt={4} />
            <div className="popular-items-wrapper-item-hover">
              <p>Կատեգորիա № 4</p>
              <button>Ավելին</button>
            </div>
          </div>
          <div className="item">
            <img src={item5} alt={5} />
            <div className="popular-items-wrapper-item-hover">
              <p>Կատեգորիա № 5</p>
              <button>Ավելին</button>
            </div>
          </div>
          <div className="item">
            <img src={item6} alt={6} />
            <div className="popular-items-wrapper-item-hover">
              <p>Կատեգորիա № 6</p>
              <button>Ավելին</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MostPopular;
