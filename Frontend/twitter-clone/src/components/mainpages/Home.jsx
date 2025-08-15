import Navbar from "../Navbar";
import MainPage from "../MainPage";
import RightContent from "../RightContent";
import Explore from "../../pages/Explore";
import Profile from "../../pages/Profile";
import Bookmarks from "../../pages/Bookmarks/Bookmarks";
import ReelsPage from "../../pages/Reels/ReelsPage";
function Home({showProfile,showExplore,showMain,showBookmarks,showReels}) {
    
  return (
    <div className="w-full h-screen bg-black text-white flex">
      <div className="w-[25%] bg-black pl-30 p-3 pr-5">
        <Navbar/>
      </div>

      <div className="w-[40%] h-screen overflow-scroll scroll-smooth">
        <div className="h-fit">
             {showMain && <MainPage/>}
             {showExplore && <Explore/>}
             {showProfile && <Profile/>}
             {showBookmarks && <Bookmarks/>}
             {showReels && <ReelsPage/>}
        </div>
      </div>

      <div className="w-[35%] bg-black">
        <RightContent />
      </div>
    </div>
  );
}

export default Home;
