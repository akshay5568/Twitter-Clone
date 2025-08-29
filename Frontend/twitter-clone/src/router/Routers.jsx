import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/loginSignupPages/LoginPage";
import Home from "../components/mainpages/Home";
import Signup from "../pages/loginSignupPages/Signup";
import Premium from '../pages/Premium/Premium';
import Post from "../components/Post";
Post
function Router() {
  return(
    <>
        <Routes>
            <Route path="/" element={<Home showMain={true}/>}/>
            <Route path="/login" element={<LoginPage/>}/>   
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/explore" element={<Home showExplore={true}/>}/>
            <Route path="/profile/:id" element={<Home showProfile={true}/>}/>   
            <Route path="/Premium" element={<Premium/>}/>   
            <Route path="/bookmarks" element={<Home showBookmarks={true}/>}/>   
            <Route path="/reels" element={<Home showReels={true}/>}/>   
            <Route path="/post" element={<Post/>}/>   
        </Routes>
   </>
  );
}

export default Router;
