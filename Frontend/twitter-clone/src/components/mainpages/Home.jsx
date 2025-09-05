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
import { useDispatch, useSelector } from "react-redux";
import { userPost } from "../../reducers/PostReducer";
import { allBookmarks } from "../../reducers/BookmarkReducer";
import { userAllBookmarks } from "../../reducers/BookmarkReducer";   

function Home({
  showProfile,
  showExplore,
  showMain,
  showBookmarks,
  showReels,
}) {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.user);
  const bookmarks = useSelector((state) => state.bookmarks.bookmarks);   


  //ApiCall for the user
  useEffect(() => {
    if (token) {
      const userApi = async () => {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_API}/api/auth/user`,
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
          `${import.meta.env.VITE_BACKEND_API}/api/user-posts`
        );
         const posts = Array.isArray(response.data)
        ? response.data
        : response.data.data || [];
        dispatch(allUserPosts(posts));
      };
      postsApi();
    }
  }, [dispatch, token]);

  //Indivisual user post api.
  useEffect(() => {
    const callApi = async () => {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_API}/api/user-post`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
          const posts = Array.isArray(response.data)
        ? response.data
        : response.data.data || [];
      dispatch(userPost(posts));
    };
    callApi();
  }, []);

  //bookmark ApiCall
  useEffect(() => {
    try {
      const apiCall = async () => {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_API}/api/allbookmarks`
        );
            const posts = Array.isArray(response.data)
        ? response.data
        : response.data.data || [];
        dispatch(allBookmarks(posts));
      };
      apiCall();
    } catch (error) {
      console.error(error);
    }
  }, []);

  //Send userID to bookmarkReducer
  useEffect(() => {
    if (user && user._id && bookmarks.length > 0) {
      dispatch(userAllBookmarks(user._id));
    }
  }, [user, bookmarks, dispatch]);

  //Logic
  return (
    <div className="w-full h-screen bg-black text-white flex ">
      <div className="w-[25%] max-sm:w-full bg-black pl-30 max-sm:pl-0 p-3 max-sm:p-0 pr-5 max-sm:absolute max-sm:bottom-0">
        <Navbar />
      </div>

      <div className="w-[40%] h-full overflow-scroll scroll-smooth max-sm:w-full">
        <div className="h-fit">
          {showMain && <MainPage />}
          {showExplore && <Explore />}
          {showProfile && <Profile />}
          {showBookmarks && <Bookmarks />}
          {showReels && <ReelsPage />}
        </div>
      </div>

      <div className="w-[35%] bg-black max-sm:hidden">
        <RightContent />
      </div>
    </div>
  );
}

export default Home;
