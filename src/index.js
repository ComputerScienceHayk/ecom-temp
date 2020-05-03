import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import * as serviceWorker from './serviceWorker';

import HomePage from './pages/homePage';
import ProductDescription from './pages/productDescription';
import MoreDescription from './pages/moreDescription';
import BuyReviews from './pages/buyReviews';
import AllPageItems from './components/allPageItems';
import AllPageFilter from './pages/allPageFilter';
import MyAccount from './pages/myAccount';
import MyAccHistory from './pages/myAccHistory';
import MyAccReviews from './pages/myAccReviews';
import MyAccLikes from './pages/myAccLikes';

ReactDOM.render(
  <Router>
    <App>
    <Switch>
      <Route exact path="/" component={HomePage} /> 
      <Route path="/product-description" component={ProductDescription} />
      <Route path="/more-description" component={MoreDescription} />
      <Route path="/buy-reviews" component={BuyReviews} />
      <Route path="/all-page" component={AllPageItems} />
      <Route path="/all-page-filter" component={AllPageFilter} />
      <Route path="/my-account" component={MyAccount} />
      <Route path="/my-account-history" component={MyAccHistory} />
      <Route path="/my-account-reviews" component={MyAccReviews} />
      <Route path="/my-account-likes" component={MyAccLikes} />
    </Switch>
    </App>
  </Router>
  
  ,document.getElementById("root")
);

serviceWorker.unregister();

