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
import Activity from "./pages/Activity";
import City from "./pages/City";
import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="activity" element={<Activity />}>
        <Route path=":id" element={<h1>Roma</h1>} />
      </Route>
      <Route path="city" element={<City />}>
        <Route path=":id" element={<h3>Sighseeing</h3>} />
      </Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
