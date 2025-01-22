import style from "./Layout.module.scss";

const SideNav = () => {
  return (
    <div className={style.layout_sidenav}>
      <figure className={style.layout_sidenav_logo}>
        <img
          src="https://images.squarespace-cdn.com/content/v1/674be8651dc4c402d52111ad/00802580-8cbc-4e40-8173-058132d383a0/addLIBFullLogo.png?format=500w"
          alt="logo"
        />
      </figure>

      <ul className={style.layout_sidenav_links}>
        <li className={style.layout_sidenav_linkitem_active}>dashboard</li>
        <li className={style.layout_sidenav_linkitem}>reports</li>
        <li className={style.layout_sidenav_linkitem}>settings</li>
        <li className={style.layout_sidenav_linkitem}>help & resources</li>
      </ul>
    </div>
  );
};

export default SideNav;
