import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import VideosContainer from "./VideosContainer";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <VideosContainer />,
      },
    ],
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={appRouter} />;
};

export default AppRoutes;
