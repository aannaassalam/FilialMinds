import React, { useState } from "react";
import "./App.css";
import Login from "./pages/login";
import { Route, Routes, useLocation } from "react-router-dom";
import Register from "./pages/register/register";
import Homepage from "./pages/homepage";
import Navbar from "./components/navbar";
import { Typography } from "@mui/material";
import Footer from "./components/footer/footer";
import Stories from "./components/stories/stories";
import ChildDashboard from "./pages/ChildDashboard";
import Games from "./pages/Games";
import ParentChild from "./pages/ParentChild";
import ParentDashboard from "./pages/ParentDashboard";

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/register" && location.pathname !== "/login" && (
        <Navbar />
      )}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/child-dashboard" element={<ChildDashboard />} />
        <Route path="/parent-child" element={<ParentChild />} />
        <Route path="/parent-dashboard" element={<ParentDashboard />} />
        <Route path="/games" element={<Games />} />
        {/* <Route path="/games" element={<Games />} /> */}
      </Routes>
      {location.pathname !== "/register" && location.pathname !== "/login" && (
        <Footer />
      )}
    </>
    // <Stories />
  );
}

export default App;
