import { Link } from "react-router-dom";
import style from "./Layout.module.scss";
import { INavbar } from "../../types/INavbar.interface";
import { IoIosClose } from "react-icons/io";

const SideNav: React.FC<Omit<INavbar, "navText">> = ({
  showSideNav,
  toggleSideNav,
  handleToastDisplay,
}) => {
  return (
    <div
      className={showSideNav ? style.layout_sidenav_show : style.layout_sidenav}
    >
      <button className={style.layout_sidenav_toggle} onClick={toggleSideNav}>
        <IoIosClose color="#fff" size={25} />
      </button>
      <Link to="/">
        <figure className={style.layout_sidenav_logo}>
          <img
            src="https://images.squarespace-cdn.com/content/v1/674be8651dc4c402d52111ad/00802580-8cbc-4e40-8173-058132d383a0/addLIBFullLogo.png?format=500w"
            alt="logo"
          />
        </figure>
      </Link>

      <ul className={style.layout_sidenav_links}>
        <Link to="/">
          <li className={style.layout_sidenav_linkitem_active}>dashboard</li>
        </Link>
        <li
          onClick={handleToastDisplay}
          className={style.layout_sidenav_linkitem}
        >
          reports
        </li>
        <li
          onClick={handleToastDisplay}
          className={style.layout_sidenav_linkitem}
        >
          settings
        </li>
        <li
          onClick={handleToastDisplay}
          className={style.layout_sidenav_linkitem}
        >
          help & resources
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
