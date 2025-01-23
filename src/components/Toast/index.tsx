import React, { useEffect } from "react";
import style from "./Toast.module.scss";
import { MdOutlineErrorOutline } from "react-icons/md";
import { IToast } from "../../types/IToast.interface";

/* The toast "closes" (goes out of view) after a duration of 3s */

const Toast: React.FC<IToast> = ({ show, close, duration = 3000, text }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        close();
      }, duration);

      return () => clearTimeout(timer); // Cleanup the timer
    }
  }, [show, duration, close]);

  return (
    <div
      className={`${show ? style.toast_wrapper_show : ""} ${
        style.toast_wrapper
      }`}
    >
      <div className={style.toast}>
        <MdOutlineErrorOutline color="#EFB036" size={20} />
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Toast;
