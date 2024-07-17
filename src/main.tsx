import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import HomePage from "./pages/HomePage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import CartPage from "./pages/CartPage.tsx";
import WishPage from "./pages/WishPage.tsx";
import ProductPage from "./pages/ProductPage.tsx";
import RequireAuth from "./Require-Auth/Require-auth.tsx";
import RequireLogin from "./Require-Auth/Require-login.tsx";

import "./index.css";
import ProductDetailsPage from "./pages/ProductDetailsPage.tsx";
import ProductsCategory from "./pages/ProductsCategory.tsx";
import RequireContinueShopping from "./Require-Auth/Require-continue.tsx";
import CheckoutPage from "./pages/CheckoutPage.tsx";
import RequireConfirmOrder from "./Require-Auth/Requir-confirm-order.tsx";
import OrderPlacedPage from "./pages/OrderPlacedPage.tsx";
import ErrorHandler from "./components/error/ErrorHandlesrs.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorHandler />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "login",
        element: (
          <RequireLogin>
            <LoginPage />
          </RequireLogin>
        ),
      },
      {
        path: "cart",
        element: (
          <RequireAuth>
            <CartPage />
          </RequireAuth>
        ),
      },
      {
        path: "wish",
        element: (
          <RequireAuth>
            <WishPage />
          </RequireAuth>
        ),
      },
      {
        path: "checkout",
        element: (
          <RequireAuth>
            <RequireContinueShopping>
              <CheckoutPage />
            </RequireContinueShopping>
          </RequireAuth>
        ),
      },
      {
        path: "orderPlaced",
        element: (
          <RequireAuth>
            <RequireConfirmOrder>
              <OrderPlacedPage />
            </RequireConfirmOrder>
          </RequireAuth>
        ),
      },
      {
        path: "/products",
        element: (
          <div id="detail">
            <Outlet />
          </div>
        ),
        children: [
          {
            path: "",
            element: <ProductPage />,
          },

          {
            path: ":productId",
            element: <ProductDetailsPage />,
          },
        ],
      },
      {
        path: "products/category/:categoryName",
        element: <ProductsCategory />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
