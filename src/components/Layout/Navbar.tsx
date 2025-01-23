import React from "react";
import { GoBell } from "react-icons/go";
import { RxAvatar } from "react-icons/rx";
import { INavbar } from "../../types/INavbar.interface";
import { RxHamburgerMenu } from "react-icons/rx";
import style from "./Layout.module.scss";

/* 
  The Navbar contains dummy btns for display purposes, 
  clicking on any one of them will display the toast 
*/

const Navbar: React.FC<INavbar> = ({
  navText,
  handleToastDisplay,
  toggleSideNav,
}) => {
  return (
    <nav className={style.layout_navbar}>
      <div>
        {/* hamburger btn, only visible on mobil e  */}
        <button
          onClick={toggleSideNav}
          className={style.layout_navbar_hamburger}
        >
          <RxHamburgerMenu />
        </button>
        <h3>{navText}</h3>
      </div>
      <div className={style.layout_navbar_btns}>
        <button onClick={handleToastDisplay}>
          <GoBell size={20} color="#5b913b" />
        </button>
        <button onClick={handleToastDisplay}>
          <RxAvatar size={20} color="#5b913b" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
