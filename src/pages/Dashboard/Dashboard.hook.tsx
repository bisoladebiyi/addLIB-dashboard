import { ChangeEvent, useState } from "react";
import { IDropdownOption } from "../../types/IDropdown.interface";
import {
  useGetAllProductsQuery,
  useGetCategoriesQuery,
  useGetProductsByCategoryQuery,
} from "../../redux/features/product/productApiSlice";
import { IProduct } from "../../types/IProduct.interface";

// This hook file contains all the logic for the dashboard page.

const useDashboard = () => {
  const [searchVal, setSearchVal] = useState<string>("");
  const [dropdownVal, setDropdownVal] = useState<string>("all");
  const [sortBy, setSortBy] = useState<"price" | "rating" | "">("");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");

  const { data: products } = useGetAllProductsQuery({});
  const { data: categories } = useGetCategoriesQuery({});
  const { data: productsByCat } = useGetProductsByCategoryQuery(dropdownVal, {
    skip: dropdownVal === "all",
  });

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchVal(e.target.value);
  };

  const onDropDownChange = (option: IDropdownOption) => {
    setDropdownVal(option.value);
  };

  const onSortSelect = (text: "price" | "rating" | "") => {
    if (text === sortBy) {
      setSortBy("");
    } else {
      setSortBy(text);
    }
  };

  const changeSortDirection = () => {
    if (sortDirection === "asc") {
      setSortDirection("desc");
    } else {
      setSortDirection("asc");
    }
  };

  const handleSearchAndSort = () => {
    let filteredBySearch;

    if (dropdownVal === "all") {
      filteredBySearch = products?.filter((product: IProduct) =>
        product.title.toLowerCase().includes(searchVal.toLowerCase())
      );
    } else {
      filteredBySearch = productsByCat?.filter((product: IProduct) =>
        product.title.toLowerCase().includes(searchVal.toLowerCase())
      );
    }

    if (sortBy === "price") {
      filteredBySearch.sort((a: IProduct, b: IProduct) =>
        sortDirection === "desc" ? b.price - a.price : a.price - b.price
      );
    }

    if (sortBy === "rating") {
      filteredBySearch.sort((a: IProduct, b: IProduct) =>
        sortDirection === "desc"
          ? b.rating.rate - a.rating.rate
          : a.rating.rate - b.rating.rate
      );
    }

    return filteredBySearch;
  };

  const dropdownOptions = [
    {
      value: "all",
      label: "all",
    },
    ...(categories
      ? categories.map((category: string) => ({
          value: category,
          label: category,
        }))
      : []),
  ];

  return {
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
  };
};

export default useDashboard;
