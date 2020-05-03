import React from "react";

import item1 from "../images/my-acc-filter/1.png";
import item2 from "../images/my-acc-filter/2.png";
import item3 from "../images/my-acc-filter/3.png";
import item4 from "../images/my-acc-filter/4.png";

function ShopCart() {
    return (
        <div className="absolute-shop-cart-inner">
           <div className="up">
               <img src={item1} alt="1"/>
           </div>
           <div className="down">
               <p>USB լիցքավորիչ ”Earldom” ES-143 IOS&ANDROID</p>
               <p>1250 ֏</p>
           </div>
        </div>
    );
}

export default ShopCart;
