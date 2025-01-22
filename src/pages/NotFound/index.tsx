import { Link } from "react-router-dom";
import style from "./NotFound.module.scss";

const NotFound = () => {
  return (
    <div className={style.notfound}>
      <Link to="/" className={style.notfound_logo}>
        <figure>
          <img
            src="https://images.squarespace-cdn.com/content/v1/674be8651dc4c402d52111ad/00802580-8cbc-4e40-8173-058132d383a0/addLIBFullLogo.png?format=500w"
            alt="logo"
          />
        </figure>
      </Link>

      <div className={style.notfound_texts}>
        <h1>404</h1>
        <p>OOPS! LOOKS LIKE YOU'RE LOST</p>
        <p>
          The page you're looking for does not exist or may have been removed.
        </p>
        <Link to="/"> Go back to home</Link>
      </div>
    </div>
  );
};

export default NotFound;
