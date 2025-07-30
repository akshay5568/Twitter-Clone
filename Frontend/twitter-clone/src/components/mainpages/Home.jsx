import { Route,Routes } from "react-router-dom";
import Navbar from "../Navbar";
import MainPage from "../MainPage";
import RightContent from "../RightContent";
import Explore from "../../pages/Explore";
import { useState } from "react";
function Home() {
    const [currentPage, setCurrentPage] = useState("Home");
  return (
    <div className="w-full h-screen bg-black text-white flex">
      <div className="w-[25%] bg-black pl-30 p-3 pr-5">
        <Navbar setCurrentPage={setCurrentPage}/>
      </div>

      <div className="w-[40%] h-screen overflow-scroll scroll-smooth">
        <div className="h-[150rem]">
             {currentPage == "Home" && <MainPage/>}
             {currentPage == "Explore" && <Explore/>}
        </div>
      </div>

      <div className="w-[35%] bg-black">
        <RightContent />
      </div>
    </div>
  );
}

export default Home;
