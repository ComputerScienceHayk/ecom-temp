import React from "react";

//import images
import searchButton from "../images/header/search.png";

function Search() {
  return (
    <div className="cont">
      <div className="search-wrapper">
        <div className="search">
          <input type="searc" placeholder="Փնտրել․․․" />
          <div className="search-button">
            <img src={searchButton} alt="search"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
