import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IDropdown, IDropdownOption } from "../../types/IDropdown.interface";
import style from "./Dropdown.module.scss";

const Dropdown: React.FC<IDropdown> = ({ value, onChange, options }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const selected = options?.find((op: IDropdownOption) => op.value === value);

  const toggleOptions = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={style.dropdown}>
      <p>{selected?.label}</p>

      <ul
        className={
          isDropdownOpen ? style.dropdown_options_open : style.dropdown_options
        }
      >
        {options &&
          options.map((option) => (
            <li
              onClick={() => {
                onChange(option);
                toggleOptions();
              }}
              key={option.value}
              className={
                value === option.value
                  ? style.dropdown_options_active
                  : style.dropdown_options_item
              }
            >
              {option.label}
            </li>
          ))}
      </ul>

      {/* toggle options  */}
      <button onClick={toggleOptions}>
        <IoIosArrowDown
          style={{ transform: isDropdownOpen ? "rotate(180deg)" : "rotate(0)" }}
        />
      </button>
    </div>
  );
};

export default Dropdown;
