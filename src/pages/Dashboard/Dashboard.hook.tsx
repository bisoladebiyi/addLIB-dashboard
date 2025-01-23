import { ChangeEvent, useEffect, useState } from "react";
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
  const [activePage, setActivePage] = useState<number>(1);
  const [noOfPages, setNoOfPages] = useState<number>(1);

  const NO_OF_ITEMS_PER_PAGE = 10;

  const {
    data: products,
    isLoading: isProductsLoading,
    isError: isProductsError,
  } = useGetAllProductsQuery({});
  const { data: categories } = useGetCategoriesQuery({});
  const {
    data: productsByCat,
    isLoading: isProductsByCatLoading,
    isError: isProductsByCatError,
  } = useGetProductsByCategoryQuery(dropdownVal, {
    skip: dropdownVal === "all",
  });

  useEffect(() => {
    if (products && dropdownVal === "all") {
      const pages = Math.ceil(products.length / NO_OF_ITEMS_PER_PAGE);
      setNoOfPages(pages);
    } else if (productsByCat && dropdownVal !== "all") {
      const pages = Math.ceil(productsByCat.length / NO_OF_ITEMS_PER_PAGE);
      setNoOfPages(pages);
    }
  }, [products, productsByCat, dropdownVal]);

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

  const onPrev = () => {
    setActivePage(activePage - 1);
  };

  const onNext = () => {
    setActivePage(activePage + 1);
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
      filteredBySearch?.sort((a: IProduct, b: IProduct) =>
        sortDirection === "desc" ? b.price - a.price : a.price - b.price
      );
    }

    if (sortBy === "rating") {
      filteredBySearch?.sort((a: IProduct, b: IProduct) =>
        sortDirection === "desc"
          ? b.rating.rate - a.rating.rate
          : a.rating.rate - b.rating.rate
      );
    }

    // return filteredBySearch;
    return filteredBySearch?.slice(
      0 + (activePage - 1) * NO_OF_ITEMS_PER_PAGE,
      NO_OF_ITEMS_PER_PAGE + (activePage - 1) * NO_OF_ITEMS_PER_PAGE
    );
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

  const isLoading = isProductsLoading || isProductsByCatLoading;
  const isError = isProductsError || isProductsByCatError;

  return {
    dropdownOptions,
    searchVal,
    dropdownVal,
    sortBy,
    sortDirection,
    isProductsLoading,
    isProductsByCatLoading,
    isLoading,
    isError,
    noOfPages,
    activePage,
    onPrev,
    onNext,
    handleSearchAndSort,
    onDropDownChange,
    onInputChange,
    onSortSelect,
    changeSortDirection,
  };
};

export default useDashboard;
