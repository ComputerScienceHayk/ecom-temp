import React from "react";

//components imports
import TopInfo from "../components/topInfo";
import Search from "../components/search";
import Nav from "../components/navbar";

function Header() {
  return (
    <React.Fragment>
      <TopInfo />
      <Search />
      <Nav />
    </React.Fragment>
  );
}

export default Header;
