import style from "../../pages/NotFound/NotFound.module.scss";
import { Link } from "react-router-dom";

/* A fallback component in the events of an error occuring */

const ErrorBoundaryFallback = () => {
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
        <h1>AN ERROR HAS OCCURED</h1>
        <p>This is awkward...</p>
        <Link to="/"> Go back to home</Link>
      </div>
    </div>
  );
};

export default ErrorBoundaryFallback;
