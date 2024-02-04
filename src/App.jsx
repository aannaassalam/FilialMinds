import { useState } from "react";
import "./App.css";
import Login from "./pages/login";
import { Route, Routes, useLocation } from "react-router-dom";
import Register from "./pages/register/register";
import Homepage from "./pages/homepage";
import Navbar from "./components/navbar";
import { Typography } from "@mui/material";
import Footer from "./components/footer/footer";

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
      </Routes>
      {location.pathname !== "/register" && location.pathname !== "/login" && (
        <Footer />
      )}
    </>
  );
}

export default App;
