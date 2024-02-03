import { Route, Routes } from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import ParentDashboard from "./Pages/ParentDashboard" 

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
            <Route path="/" Component={ParentDashboard} />
          </Routes>
        </div>
      </QueryClientProvider>
    
    
    </>
  )
}

export default App
