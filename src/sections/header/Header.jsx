import React from "react";
import NavBar from "../navbar/NavBar";
import Body from "../Body/Body";

const Header = () => {
  return (
    <div className="header-bg min-h-[803px] w-full">
      <NavBar></NavBar>
      <Body></Body>
    </div>
  );
};

export default Header;
