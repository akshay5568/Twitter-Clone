import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/loginSignupPages/LoginPage";
import Home from "../components/mainpages/Home";
import Signup from "../pages/loginSignupPages/Signup";
import Explore from "../pages/Explore";
import Premium from "../pages/Premium";
function Router() {
  return(
    <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<LoginPage/>}/>   
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/explore" element={<Explore/>}/>
            <Route path="/profile" element={<Explore/>}/>   
            <Route path="/Premium" element={<Premium/>}/>   
        </Routes>
   </>
  );
}

export default Router;
