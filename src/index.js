import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from "./components/pages/Shop";
import Cart from "./components/pages/Cart";
// import LoginSignup from "./components/pages/LoginSignup";
import Product from "./components/pages/Product";
import ShopCategory from "./components/pages/ShopCategory";
import ErrorPage from "./components/pages/ErrorPage";
import LoginSignup from "./components/pages/LoginSignup";
import ShopContextProvider from "./components/context/ShopContext";
import men_banner from "./components/assets/banner_mens.png";
import women_banner from "./components/assets/banner_women.png";
import kids_banner from "./components/assets/banner_kids.png";
import Footer from "./components/footer/Footer";
// import Breadcrums from "./components/breadcrums/Breadcrums";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <ShopContextProvider>
    <App />
  </ShopContextProvider>
  // </React.StrictMode>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <>
            <Shop />
            <Footer />
          </>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <LoginSignup />,
      },

      {
        path: "/men",
        element: (
          <>
            <ShopCategory banner={men_banner} category="men" />
            <Footer />
          </>
        ),
      },
      {
        path: "/women",
        element: (
          <>
            <ShopCategory banner={women_banner} category="women" />
            <Footer />
          </>
        ),
      },
      {
        path: "/kids",
        element: (
          <>
            <ShopCategory banner={kids_banner} category="kid" />
            <Footer />
          </>
        ),
      },
      {
        path: "/product/:productId",
        element: (
          <>
            <Product />
            <Footer />
          </>
        ),
        // children: [
        //   {
        //     path: ":productId",
        //     element: <Product />,
        //   },
        // ],
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

// root.render(<App/>);
root.render(<RouterProvider router={appRouter} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
