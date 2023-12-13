import React from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import Home from "./Home";
import VideosContainer from "./VideosContainer";
import VideoDetails from "./VideoDetails";
import TrendingContainer from "./TrendingContainer";
import GamingContainer from "./GamingContainer";
import SavedVideosContainer from "./SavedVideosContainer";
import Login from "./Login";
import Signup from "./Signup";
import ProtectedRouter from "./ProtectedRouter";

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
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
