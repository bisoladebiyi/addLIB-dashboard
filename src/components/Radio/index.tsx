import React from "react";
import style from "./Radio.module.scss";
import { IRadio } from "../../types/IRadio.interface";

const Radio: React.FC<IRadio> = ({ name, isChecked, onChange }) => {
  return (
    <div className={style.radio_wrapper} onClick={() => onChange(name)}>
      <div className={isChecked ? style.radio_checked : style.radio} />
      <p>{name}</p>
    </div>
  );
};

export default Radio;
