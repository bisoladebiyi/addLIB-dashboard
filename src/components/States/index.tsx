import React from "react";
import { IStates } from "../../types/IStates.interface";
import { TailSpin } from "react-loader-spinner";
import style from "./States.module.scss";
import { WiCloudyWindy } from "react-icons/wi";
import { VscError } from "react-icons/vsc";

const States: React.FC<IStates> = ({ type }) => {
  // for loading state
  if (type === "loading") {
    return (
      <div className={style.states_wrapper}>
        <TailSpin
          visible={true}
          height="80"
          width="80"
          color="#385b24"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  }

  //   for empty state
  if (type === "empty") {
    return (
      <div className={style.states_wrapper}>
        <div className={style.states_empty}>
          <WiCloudyWindy size={200} color="#385b24" />
          <p>Nothing to see here!</p>
        </div>
      </div>
    );
  }

  //   for error state
  return (
    <div className={style.states_wrapper}>
      <div className={style.states_empty}>
        <VscError size={100} color="#385b24" />
        <p>Its not you, its us :(</p>
      </div>
    </div>
  );
};

export default States;
