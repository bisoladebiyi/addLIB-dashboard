import SideNav from "./SideNav";
import Navbar from "./Navbar";
import { ILayout } from "../../types/ILayout.interface";
import style from "./Layout.module.scss";
import React from "react";

const Layout: React.FC<ILayout> = ({ children, navText }) => {
  return (
    <div className={style.layout}>
      <SideNav />
      <div>
        <Navbar navText={navText} />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
