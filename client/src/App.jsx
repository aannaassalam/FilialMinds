import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import "./App.css";
import Home from "./pages/Home";
import ChildForm from "./pages/ChildForm";
import Blogs from "./pages/Blogs";
import Navbar from "./components/Navbar";
import ContactUs from "./pages/ContactUs";
import Activity from "./pages/Activity";

function App() {
  // const [count, setCount] = useState(0)
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/childform" Component={ChildForm} />{" "}
          {/* page2- skills */}
          <Route path="/activity" Component={Activity} />
          <Route path="/blogs" Component={Blogs} />
          <Route path="/contact-us" Component={ContactUs} />
          {/* login page */}
          {/* dashboard */}
          {/* games */}
        </Routes>
      </QueryClientProvider>
    </>
  );
}

export default App;
