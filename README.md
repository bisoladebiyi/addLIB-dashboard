# addLIB - Brand Dashboard 🚀

addLIB is a brand dashboard designed to help brands manage and track the performance of their affiliate campaigns. The dashboard provides a user-friendly interface to view and interact with product data, apply filters, and sort through products based on different metrics.

## Built with:

- [React](https://reactjs.org/) - JS library
- [SCSS](https://sass-lang.com/) - Sass Syntax
- [Typescript](https://www.typescriptlang.org/) - Type Safety
- [Redux toolkit](https://redux-toolkit.js.org/) - Simplified State

## Live site:

[Live site](https://addlib-dashboard.netlify.app/)

## Screenshots

![Dahboard](/src/assets/images/dashboard.png)
![Empty State](/src/assets/images/emptystate.png)
![Product View](/src/assets/images/productdetails.png)
![404](/src/assets/images/404.png)
![Mobile view](/src/assets/images/mobiledashboard.png)
![Mobile view](/src/assets/images/mobileproductdetails.png)

## API Integration

Integrated with the Fake Store API using Redux Toolkit's `createAPI` feature to handle API requests for fetching product data and managing related state like loading and error handling.

## Set Up

Create a `.env` file in the root of your project and populate with `VITE_API_URL=https://fakestoreapi.com`

In the project directory, you can run:

#### Installation

`npm install`

#### Run App

`npm run dev`

#### Build App

`npm run build`

## Assumptions or Limitations

1. **No Authentication**:
   - The application currently does not implement **user authentication**. Any user can view the products, and there is no login functionality.

2. **Limited Unit Tests**:
   - Currently, there are no unit tests implemented. It is assumed that the main goal of this assessment was to demonstrate core functionality, and testing can be added once the solution is finalized.

3. **Mock Product Data**:
   - The product data used is fetched from the **Fake Store API** and is for demonstration purposes only. It does not reflect actual products.

## Things Left To Do

- Write unit tests

## Author

- LinkedIn - [Abisola Adebiyi](https://www.linkedin.com/in/abisolaadebiyi/)
- Website - [Abisola Adebiyi](https://abisola-portfolio.netlify.app/)
