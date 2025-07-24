import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/loginpage/LoginPage";
import Home from "../components/mainpages/Home";
function Router() {
  return(
    <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<LoginPage/>}/>
        </Routes>
   </>
  );
}

export default Router;
