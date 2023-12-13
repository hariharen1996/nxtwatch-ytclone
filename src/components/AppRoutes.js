import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import VideosContainer from "./VideosContainer";
import VideoDetails from "./VideoDetails";
import TrendingContainer from "./TrendingContainer";
import GamingContainer from "./GamingContainer";
import SavedVideosContainer from "./SavedVideosContainer";
import Login from "./Login";
import Signup from "./Signup";
import ProtectedRouter from "./ProtectedRouter";
import RouteError from "./RouteError";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<VideosContainer />} />
          <Route
            path=":id"
            element={
              <ProtectedRouter>
                <VideoDetails />
              </ProtectedRouter>
            }
          />
          <Route
            path="trending"
            element={
              <ProtectedRouter>
                <TrendingContainer />
              </ProtectedRouter>
            }
          />
          <Route
            path="gaming"
            element={
              <ProtectedRouter>
                <GamingContainer />
              </ProtectedRouter>
            }
          />
          <Route
            path="saved-videos"
            element={
              <ProtectedRouter>
                <SavedVideosContainer />
              </ProtectedRouter>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<RouteError />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
