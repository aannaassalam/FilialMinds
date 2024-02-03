import { useState } from "react";
import "./App.css";
import Login from "./pages/login";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/register/register";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
