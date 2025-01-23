import SideNav from "./SideNav";
import Navbar from "./Navbar";
import { ILayout } from "../../types/ILayout.interface";
import style from "./Layout.module.scss";
import React, { useState } from "react";
import Toast from "../Toast";

const Layout: React.FC<ILayout> = ({ children, navText }) => {
  const [showToast, setShowToast] = useState<boolean>(false);
  const [text, setText] = useState<string>("");
  const [showSideNav, setShowSideNav] = useState<boolean>(false);

  const handleToastDisplay = () => {
    setText("Looks like this feature isn't implemented yet.");
    setShowToast(true);
  };

  const toggleSideNav = () => {
    setShowSideNav(!showSideNav);
  };

  return (
    <div className={style.layout}>
      <SideNav
        handleToastDisplay={handleToastDisplay}
        showSideNav={showSideNav}
        toggleSideNav={toggleSideNav}
      />
      <div className={style.layout_main}>
        <Navbar
          handleToastDisplay={handleToastDisplay}
          navText={navText}
          toggleSideNav={toggleSideNav}
        />
        <main>{children}</main>
      </div>
      <Toast
        text={text}
        show={showToast}
        close={() => {
          setShowToast(false);
        }}
      />
    </div>
  );
};

export default Layout;
