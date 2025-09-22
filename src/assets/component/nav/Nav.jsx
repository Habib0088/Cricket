import React from "react";
import coin from "./coin.png";
import logo from "./logo.png";

const Nav = () => {
  return (
    <div>
      <div className="navbar flex justify-between items-center py-4 max-w-[1250px] m-auto">
        {/* Left */}
        <div>
          <img src={logo} alt="" />
        </div>
        {/* right */}
        <div className="flex items-center justify-between">
          <span className="mr-2">600000</span>
          <span className="mr-2">coin</span>
          <span>
            <img className="w-[20px] h-[20px]" src={coin} alt="" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Nav;
