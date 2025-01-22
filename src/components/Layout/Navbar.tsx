import React from "react";
import { GoBell } from "react-icons/go";
import { RxAvatar } from "react-icons/rx";
import { INavbar } from "../../types/INavbar.interface";
import style from "./Layout.module.scss";

const Navbar: React.FC<INavbar> = ({ navText }) => {
  return (
    <nav className={style.layout_navbar}>
      <h3>{navText}</h3>
      <div className={style.layout_navbar_btns}>
        <button>
          <GoBell size={20} color="#5b913b" />
        </button>
        <button>
          <RxAvatar size={20} color="#5b913b" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
