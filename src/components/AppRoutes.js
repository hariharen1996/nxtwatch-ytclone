import React from "react";
import {
  BrowserRouter,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import Home from "./Home";
import VideosContainer from "./VideosContainer";
import VideoDetails from "./VideoDetails";
import TrendingContainer from "./TrendingContainer";
import GamingContainer from "./GamingContainer";
import SavedVideosContainer from "./SavedVideosContainer";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<VideosContainer />} />
          <Route path=":id" element={<VideoDetails />} />
          <Route path="/trending" element={<TrendingContainer />} />
          <Route path="/gaming" element={<GamingContainer />} />
          <Route path="/saved-videos" element={<SavedVideosContainer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
