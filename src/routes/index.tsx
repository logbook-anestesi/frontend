import React from "react";
import { Route, Routes } from "react-router-dom";

// Add your components here
import About from "./About";
import Home from "./Home";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />

      {/* Add more routes below */}
    </Routes>
  );
};

export default MainRoutes;
