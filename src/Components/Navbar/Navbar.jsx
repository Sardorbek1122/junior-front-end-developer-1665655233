import React from "react";
import './Navbar.scss';

const Navbar = () => {

  return (
    <div className="nav">
      <div className="nav__wrapper">
        <div className="nav__logo"></div>
        <div className="nav__profile">
          <div className="nav__profile-img"></div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;