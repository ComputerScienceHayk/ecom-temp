import React, { Component } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


import item1 from "../images/best/item2.png";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

class PdSmCarousel extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <div className="cont">
        <Carousel responsive={responsive}>
        <div className="pd-sm-slider-inner">
           <div className="up">
               <img src={item1} alt="1"/>
           </div>
           <div className="down">
               <p>USB լիցքավորիչ ”Earldom” ES-143 IOS&ANDROID</p>
               <p>1250 ֏</p>
           </div>
        </div>
        <div className="pd-sm-slider-inner">
           <div className="up">
               <img src={item1} alt="1"/>
           </div>
           <div className="down">
               <p>USB լիցքավորիչ ”Earldom” ES-143 IOS&ANDROID</p>
               <p>1250 ֏</p>
           </div>
        </div>
        <div className="pd-sm-slider-inner">
           <div className="up">
               <img src={item1} alt="1"/>
           </div>
           <div className="down">
               <p>USB լիցքավորիչ ”Earldom” ES-143 IOS&ANDROID</p>
               <p>1250 ֏</p>
           </div>
        </div>
        <div className="pd-sm-slider-inner">
           <div className="up">
               <img src={item1} alt="1"/>
           </div>
           <div className="down">
               <p>USB լիցքավորիչ ”Earldom” ES-143 IOS&ANDROID</p>
               <p>1250 ֏</p>
           </div>
        </div>
        <div className="pd-sm-slider-inner">
           <div className="up">
               <img src={item1} alt="1"/>
           </div>
           <div className="down">
               <p>USB լիցքավորիչ ”Earldom” ES-143 IOS&ANDROID</p>
               <p>1250 ֏</p>
           </div>
        </div>
        <div className="pd-sm-slider-inner">
           <div className="up">
               <img src={item1} alt="1"/>
           </div>
           <div className="down">
               <p>USB լիցքավորիչ ”Earldom” ES-143 IOS&ANDROID</p>
               <p>1250 ֏</p>
           </div>
        </div>
        <div className="pd-sm-slider-inner">
           <div className="up">
               <img src={item1} alt="1"/>
           </div>
           <div className="down">
               <p>USB լիցքավորիչ ”Earldom” ES-143 IOS&ANDROID</p>
               <p>1250 ֏</p>
           </div>
        </div>
        </Carousel>
        ;
      </div>
    );
  }
}

export default PdSmCarousel;
