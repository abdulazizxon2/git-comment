import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./Reducer";
import Services from "./Services";
import Blog from "./Blog";
import Redeucer from "./Reducer";
export default function PageIndex() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<Redeucer />} />
      <Route path="/services" element={<Services />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  );
}
