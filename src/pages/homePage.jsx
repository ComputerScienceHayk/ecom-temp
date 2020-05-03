import React from "react";

//components imports
import HomeCarousel from "../components/homeCarousel";
import MostPopular from "../components/mostPopular";
import HomeShopItems from "../components/homeShopItems";
import HomePartners from "../components/homePartners";
import HomeSlider from "../components/homeSlider";
import HomeChooseServe from "../components/homeChooseServe";

function HomePage() {
  return (
    <React.Fragment>
      <HomeCarousel />
      <MostPopular />
      <HomeSlider />
      <HomeShopItems />
      <HomePartners />
      <HomeChooseServe />
    </React.Fragment>
  );
}

export default HomePage;
