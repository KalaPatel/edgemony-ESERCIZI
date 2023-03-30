import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Activity from "./pages/activities/Activity";
import SingleAttractionPage from "./pages/attractions/id/SingleActivityPage";
import Attractions from "./pages/attractions/Attractions";
import MainLayout from "./layouts/mainLayout/MainLayout";
import "./index.css";
import SingleActivityPage from "./pages/activities/id/SingleActivityPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="activity" element={<Activity />} />
      <Route path="activity/:id" element={<SingleActivityPage />} />
      <Route path="attraction" element={<Attractions />} />
      <Route path="attraction/:id" element={<SingleAttractionPage />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
