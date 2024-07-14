import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import HomePage from "./pages/HomePage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import CartPage from "./pages/CartPage.tsx";
import WishPage from "./pages/WishPage.tsx";
import ProductPage from "./pages/ProductPage.tsx";
import RequireAuth from "./Require-Auth/Require-auth.tsx";
import RequireLogin from "./Require-Auth/Require-login.tsx";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
        path: "products",
        element: <ProductPage />,
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
