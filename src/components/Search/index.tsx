import React from "react";
import { CiSearch } from "react-icons/ci";
import style from "./Search.module.scss";
import { IInput } from "../../types/IInput.interface";

const Search: React.FC<IInput> = ({ value, onChange, placeholder, name }) => {
  return (
    <div className={style.search}>
      <CiSearch className={style.search_icon} color="#666E7D80" size={20} />
      <input
        type="text"
        className={style.search_input}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
      />
    </div>
  );
};

export default Search;
