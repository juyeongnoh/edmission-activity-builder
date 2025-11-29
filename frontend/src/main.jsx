import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./Home";
import ActivityBuilder from "./components/ActivityBuilder";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/activity-builder" element={<ActivityBuilder />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
