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
import HomePage from "./pages/HomePage";
import ChildForm from "./pages/ChildForm";
import Blogs from "./pages/Blogs";
import Navbar from "./components/Navbar";
import ContactUs from "./pages/ContactUs";
import ActivityHome from "./pages/ActivityHome";
import Activity from "./pages/Activity";

function App() {
  // const [count, setCount] = useState(0)
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <div className="">
          <Routes>
            <Route path="/" Component={HomePage} />
            <Route path="/childform" Component={ChildForm} />{" "}
            {/* page2- skills */}
            <Route path="/activity" Component={ActivityHome} />
            <Route path="/activity/activity" Component={Activity} />
            <Route path="/blogs" Component={Blogs} />
            <Route path="/contact-us" Component={ContactUs} />
            {/* login page */}
            {/* dashboard */}
            {/* games */}
          </Routes>
        </div>
      </QueryClientProvider>
    </>
  );
}

export default App;
