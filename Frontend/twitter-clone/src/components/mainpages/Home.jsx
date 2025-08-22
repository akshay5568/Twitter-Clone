import Navbar from "../Navbar";
import MainPage from "../MainPage";
import RightContent from "../RightContent";
import Explore from "../../pages/Explore";
import Profile from "../../pages/Profile";
import Bookmarks from "../../pages/Bookmarks/Bookmarks";
import ReelsPage from "../../pages/Reels/ReelsPage";
import { useEffect } from "react";
import { addUser } from "../../reducers/UserReducer";
import { allUserPosts } from "../../reducers/PostReducer";
import axios from "axios";
import { useDispatch } from "react-redux";
import { userPost } from "../../reducers/PostReducer";

function Home({
  showProfile,
  showExplore,
  showMain,
  showBookmarks,
  showReels,
}) {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();

  //ApiCall for the user
  useEffect(() => {
    if (token) {
      const userApi = async () => {
        const response = await axios.get(
          "http://localhost:8080/api/auth/user",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        dispatch(addUser(response.data));
      };
      userApi();
    }
  }, [dispatch, token]);

  //Apicall for the all user's post.
  useEffect(() => {
    if (token) {
      const postsApi = async () => {
        const response = await axios.get(
          "http://localhost:8080/api/user-posts"
        );
        dispatch(allUserPosts(response.data));
        console.log(response.data)
      };
      postsApi();
    }
  }, [dispatch, token]);

  //Indivisual user post api.
  useEffect(() => {
    const callApi = async () => {
      const response = await axios.get("http://localhost:8080/api/user-post", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(userPost(response.data));
    };
    callApi();
  }, []);

  //Logic
  return (
    <div className="w-full h-screen bg-black text-white flex">
      <div className="w-[25%] bg-black pl-30 p-3 pr-5">
        <Navbar />
      </div>

      <div className="w-[40%] h-screen overflow-scroll scroll-smooth">
        <div className="h-fit">
          {showMain && <MainPage />}
          {showExplore && <Explore />}
          {showProfile && <Profile />}
          {showBookmarks && <Bookmarks />}
          {showReels && <ReelsPage />}
        </div>
      </div>

      <div className="w-[35%] bg-black">
        <RightContent />
      </div>
    </div>
  );
}

export default Home;
