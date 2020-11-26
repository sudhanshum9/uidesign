import React from "react";
import "./MainComp.css";
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";
function MainComp() {
  return (
    <div className="root-container">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default MainComp;
