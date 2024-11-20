import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Form from "./Pages/Form.jsx";
import Root from "./Pages/Root.jsx";
import SingleProduct from "./Pages/SingleProduct.jsx";
import Products from "./Pages/Products.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Form",
        element: <Form />,
      },
      {
        path: "/SingleProduct/:id",
        element: <SingleProduct />,
      },
      {
        path: "/Products",
        element: <Products />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);
