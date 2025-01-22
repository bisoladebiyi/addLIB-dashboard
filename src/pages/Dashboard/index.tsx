import { GoSortDesc } from "react-icons/go";
import { GoSortAsc } from "react-icons/go";
import Dropdown from "../../components/Dropdown";
import Layout from "../../components/Layout";
import Search from "../../components/Search";
import Table from "../../components/Table";
import style from "./Dashboard.module.scss";

import Radio from "../../components/Radio";
import useDashboard from "./Dashboard.hook";

const Dashboard = () => {
  // importing all logic from custom hook to clean up component
  const {
    dropdownOptions,
    searchVal,
    dropdownVal,
    sortBy,
    sortDirection,
    handleSearchAndSort,
    onDropDownChange,
    onInputChange,
    onSortSelect,
    changeSortDirection,
  } = useDashboard();

  return (
    <Layout navText="Dashboard">
      {/* filters search and sorting  */}
      <div className={style.dashboard_filters}>
        <div className={style.dashboard_filters_search}>
          <Search
            value={searchVal}
            name=""
            onChange={onInputChange}
            placeholder="Search"
          />
          <Dropdown
            options={dropdownOptions}
            value={dropdownVal}
            onChange={onDropDownChange}
          />
        </div>

        <div className={style.dashboard_filters_sortBy}>
          <p>Sort by:</p>
          <Radio
            name="price"
            isChecked={sortBy === "price"}
            onChange={onSortSelect}
          />
          <Radio
            name="rating"
            isChecked={sortBy === "rating"}
            onChange={onSortSelect}
          />
          <button disabled={!sortBy} onClick={changeSortDirection}>
            {sortDirection === "desc" ? (
              <GoSortAsc size={20} />
            ) : (
              <GoSortDesc size={20} />
            )}
          </button>
        </div>
      </div>
      <p className={style.dashboard_count}>
        Showing: <span>10 Products</span>
      </p>

      {/* main table display  */}
      <div className={style.dashboard_table_wrapper}>
        <Table products={handleSearchAndSort()} />
      </div>
    </Layout>
  );
};

export default Dashboard;
