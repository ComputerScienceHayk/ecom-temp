import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";


//images import
import SliderItem from "../images/carousel/slider2.png";

class HomeSlider extends Component {
  render() {
    return (
      <div className="cont">
        <Carousel>
          <div>
            <img src={SliderItem} />
          </div>
          <div>
            <img src={SliderItem} />
          </div>
          <div>
            <img src={SliderItem} />
          </div>
        </Carousel>
      </div>
    );
  }
}

export default HomeSlider;

// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>
