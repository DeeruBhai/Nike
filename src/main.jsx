import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./components/ErrorPage.jsx";
import Cart from "./Sections/Cart.jsx";
import Products from "./Sections/Products.jsx";
import { Provider } from "react-redux";
import store from "./Store/index.js";
import Signup from "./Sections/Signup.jsx";
import Login from "./Sections/Login.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App />, errorElement: <ErrorPage /> },
  { path: "/cart", element: <Cart />, errorElement: <ErrorPage /> },
  { path: "/products", element: <Products />, errorElement: <ErrorPage /> },
  { path: "/signup", element: <Signup />, errorElement: <ErrorPage /> },
  { path: "/login", element: <Login />, errorElement: <ErrorPage /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
