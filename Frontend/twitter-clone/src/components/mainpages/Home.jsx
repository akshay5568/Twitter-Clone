import Navbar from "../Navbar";
import MainPage from "../MainPage";
import RightContent from "../RightContent";
import Explore from "../../pages/Explore";
import Profile from "../../pages/Profile";
import Bookmarks from "../../pages/Bookmarks";
function Home({showProfile,showExplore,showMain,showBookmarks}) {
    
  return (
    <div className="w-full h-screen bg-black text-white flex">
      <div className="w-[25%] bg-black pl-30 p-3 pr-5">
        <Navbar/>
      </div>

      <div className="w-[40%] h-screen overflow-scroll scroll-smooth">
        <div className="h-[150rem]">
             {showMain && <MainPage/>}
             {showExplore && <Explore/>}
             {showProfile && <Profile/>}
             {showBookmarks && <Bookmarks/>}
        </div>
      </div>

      <div className="w-[35%] bg-black">
        <RightContent />
      </div>
    </div>
  );
}

export default Home;
