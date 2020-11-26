import React from "react";
import "./Header.css";
import NotificationsActiveSharpIcon from "@material-ui/icons/NotificationsActiveSharp";
import SearchIcon from "@material-ui/icons/Search";

function Header() {
  return (
    <div className="header">
      <div className="header_content">
        <span>Hey, Joe Smith</span>
        <p>Updates for Today,10th of Aug</p>
      </div>
      <div className="header_bell">
        <NotificationsActiveSharpIcon />
      </div>
    
    </div>
  );
}

export default Header;
