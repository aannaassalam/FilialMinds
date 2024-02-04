import { Route, Routes } from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import ParentDashboard from "./Pages/ParentDashboard" 
import ChildDashboard from "./Pages/ChildDashboard" 
import Games from "./Pages/Games";
import Home from "./Pages/Home"
import ParentChild from './Pages/ParentChild'

function App() {
  
 const queryClient = new QueryClient();
  return (
    <>
      
      <QueryClientProvider client={queryClient}>
        {/* <Navbar /> */}
        <div className="">
          <Routes>
            {/* <Route path="/" Component={HomePage} />
            <Route path="/childform" Component={ChildForm} />{" "}
            {/* page2- skills */}
            {/* <Route path="/activity" Component={ActivityHome} /> */}
            {/* <Route path="/activity/activity" Component={Activity} /> */}
            {/* <Route path="/blogs" Component={Blogs} /> */}
            {/* <Route path="/contact-us" Component={ContactUs} /> */ }
            {/* login page */}
            {/* dashboard */}
            {/* games */}
            <Route path="/parentdashboard" Component={ParentDashboard} />
            <Route path="/childdashboard" Component={ChildDashboard} />
            <Route path="/parentchild" Component={ParentChild} />
            <Route path="/games" Component={Games} />
            <Route path="/" Component={Home} />
          </Routes>
        </div>
      </QueryClientProvider>
    
    
    </>
  )
}

export default App
