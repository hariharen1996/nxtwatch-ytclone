import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import VideosContainer from "./VideosContainer";
import VideoDetails from "./VideoDetails";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <VideosContainer />,
      },
      {
        path: "video-details/:id",
        element: <VideoDetails />,
      },
    ],
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={appRouter} />;
};

export default AppRoutes;
