import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import VideosContainer from "./VideosContainer";
import VideoDetails from "./VideoDetails";
import TrendingContainer from "./TrendingContainer";
import GamingContainer from "./GamingContainer";

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
      {
        path: "/trending",
        element: <TrendingContainer />,
      },
      {
        path: "/gaming",
        element: <GamingContainer />,
      },
    ],
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={appRouter} />;
};

export default AppRoutes;
