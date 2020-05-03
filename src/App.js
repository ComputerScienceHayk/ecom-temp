import React, {Fragment} from "react";
import "./App.css";

import Header from "./components/header";
import Footer from "./components/footer";

const App = ({ children }) => (
  <Fragment>
    <Header />
    {children}
    <Footer />
  </Fragment>
);

export default App;
