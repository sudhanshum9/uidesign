import React from "react";
import "./MainComp.css";
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";
import SearchBar from './SearchBar'

function MainComp() {
  return (
    <div className="root-container">
      <Header />
      <SearchBar />
      <Body />
    
      <Footer />
    </div>
  );
}

export default MainComp;
