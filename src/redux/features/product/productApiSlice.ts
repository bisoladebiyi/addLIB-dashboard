import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_ROUTES } from "../../../utils/constants.ts"

/** This file will be handling our API request using the createAPI feature from redux toolkit
    we can :
    - fetch all products
    - fetch a specific products
    - fetch all categories
    - fetch all prooducts in a single category 
**/



export const products = createApi({
  reducerPath: "productAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => ({
        url: API_ROUTES.GET_PRODUCTS
      }),
    }),

    getProductsByCategory: builder.query({
      query: (category) => ({
        url: API_ROUTES.GET_PRODUCTS + `/category/${category}`
      }),
    }),

    getCategories: builder.query({
      query: () => ({
        url: API_ROUTES.GET_PRODUCTS + '/categories'
      }),
    }),

    getProduct: builder.query({
      query: (productId) => ({
        url: API_ROUTES.GET_PRODUCTS + `/${productId}`
      }),
    }),

  }),
});

export const {
  useGetAllProductsQuery,
  useGetCategoriesQuery,
  useGetProductQuery,
  useGetProductsByCategoryQuery,
} = products;
