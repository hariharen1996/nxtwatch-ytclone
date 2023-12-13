import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRouter from "./ProtectedRouter";
import RouteError from "./RouteError";
import SuspenseLoader from "./SuspenseLoader";

const Home = lazy(() => import("./Home"));
const VideosContainer = lazy(() => import("./VideosContainer"));
const VideoDetails = lazy(() => import("./VideoDetails"));
const TrendingContainer = lazy(() => import("./TrendingContainer"));
const GamingContainer = lazy(() => import("./GamingContainer"));
const SavedVideosContainer = lazy(() => import("./SavedVideosContainer"));
const Login = lazy(() => import("./Login"));
const Signup = lazy(() => import("./Signup"));

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<SuspenseLoader />}>
              <Home />
            </Suspense>
          }
        >
          <Route
            index
            element={
              <Suspense fallback={<SuspenseLoader />}>
                <VideosContainer />
              </Suspense>
            }
          />
          <Route
            path=":id"
            element={
              <ProtectedRouter>
                <Suspense fallback={<SuspenseLoader />}>
                  <VideoDetails />
                </Suspense>
              </ProtectedRouter>
            }
          />
          <Route
            path="trending"
            element={
              <ProtectedRouter>
                <Suspense fallback={<SuspenseLoader />}>
                  <TrendingContainer />
                </Suspense>
              </ProtectedRouter>
            }
          />
          <Route
            path="gaming"
            element={
              <ProtectedRouter>
                <Suspense fallback={<SuspenseLoader />}>
                  <GamingContainer />
                </Suspense>
              </ProtectedRouter>
            }
          />
          <Route
            path="saved-videos"
            element={
              <ProtectedRouter>
                <Suspense fallback={<SuspenseLoader />}>
                  <SavedVideosContainer />
                </Suspense>
              </ProtectedRouter>
            }
          />
          <Route
            path="/login"
            element={
              <Suspense fallback={<SuspenseLoader />}>
                <Login />
              </Suspense>
            }
          />
          <Route
            path="/signup"
            element={
              <Suspense fallback={<SuspenseLoader />}>
                <Signup />
              </Suspense>
            }
          />
          <Route path="*" element={<RouteError />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
