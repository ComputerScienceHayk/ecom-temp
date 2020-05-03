import React from "react";

//components imports
import PdWrapper from "../components/pdWrapper";
import PdShare from "../components/pdShare";
import PdDeskPanel from "../components/pdDeskPanel";
import PdSmCarousel from "../components/pdSmCarousel";

function ProductDescription() {
  return (
    <React.Fragment>
      <PdWrapper />
      <PdShare />
      <PdDeskPanel />
      <PdSmCarousel />
    </React.Fragment>
  );
}

export default ProductDescription;
