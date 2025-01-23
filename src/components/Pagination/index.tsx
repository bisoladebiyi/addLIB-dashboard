import React from "react";
import { IPagination } from "../../types/Pagination.interface";
import style from "./Pagination.module.scss";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Pagination: React.FC<IPagination> = ({
  activePage,
  noOfPages,
  onPrev,
  onNext,
}) => {
  return (
    <div className={style.pagination}>
      <button disabled={activePage === 1} onClick={onPrev}>
        <IoIosArrowBack size={10} />
      </button>
      <p>
        {activePage} of {noOfPages}
      </p>
      <button disabled={activePage === noOfPages} onClick={onNext}>
        <IoIosArrowForward size={10} />
      </button>
    </div>
  );
};

export default Pagination;
