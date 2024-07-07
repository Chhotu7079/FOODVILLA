import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import store from "./Store";
import HeaderComponent from "./components/header/Header";
import Container from "./components/container/Container";
import Error from "./utils/Error";
import Aboutus from "./components/container/about/Aboutus";
import Profile from "./components/container/about/Profile";
import Contact from "./components/container/contact/Contact";
import Body from "./components/container/home/Body";
import ResturantDetails from "./components/container/home/ResturantDetails";
import Cart from "./components/container/cart/Cart";

const Applayout = () => {
  return (
    <>
      <Provider store={store}>
        <div className="flex flex-col md:flex-row">
          <HeaderComponent />
          <Container />
        </div>
      </Provider>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/aboutus",
        element: <Aboutus />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/resturants/:id",
        element: <ResturantDetails />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
