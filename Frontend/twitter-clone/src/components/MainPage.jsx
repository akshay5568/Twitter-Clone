import { FaRegComment } from "react-icons/fa";
import { PiHeartStraightLight } from "react-icons/pi";
import { CiBookmark } from "react-icons/ci";
import { FiShare } from "react-icons/fi";
import { useEffect, useState } from "react";
import Post from "./Post";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Likes } from "../reducers/PostReducer";
import axios from "axios";
import { userAllBookmarks } from "../reducers/BookmarkReducer";
import { toast, ToastContainer } from "react-toastify";
import logo from "../assets/logo.jpg";

function MainPage() {
  //Other state variabls
  const token = localStorage.getItem("token");

  //SetToggle For logout in mobile.
  const [Toggle, setToggel] = useState(false);

  //For redux
  const totalPostsInEntireProject = useSelector(state => state.post?.post).length;
  const start = Math.floor(Math.random() * totalPostsInEntireProject);
  const allUserPosts = useSelector((state) => state.post?.post).slice(start,totalPostsInEntireProject);   

  const userBookmark = useSelector((state) => state.bookmarks?.userBookmark);
  const allUsersAccount = useSelector((state) => state.post?.allUsersAccounts);       
  // console.log(allUsersAccount)
  const user = useSelector((state) => state.user?.user);
  const dispatch = useDispatch();

  //For likes button
  const Hanlde = (PostId) => {
    //For likes Api
    try {
      const ApiCall = async () => {
        const response = await axios.post(
          `${import.meta.env.VITE_BACKEND_API}/api/post-like/${PostId}`,
          {},
          {
            headers: {
              Authorization: `Brearer ${token}`,
            },
          }
        );
      };
      ApiCall();
      const UserId = user._id;
      dispatch(Likes({ UserId, PostId }));
    } catch (error) {
      console.error("Something went wrong ", error);
    }
  };

  //For Bookmarks
  const bookmark = async (PostId) => {
    try {
      const UserId = user._id;
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_API}/api/add-bookmark/${PostId}`,
        { UserId }
      );
      console.log(response.data);
      dispatch(userAllBookmarks(UserId));
      toast.success("Bookmarked");
    } catch (error) {
      console.error(error);
    }
  };

  const navigate = useNavigate();
  //Logout function for the mobiles.
  const logoutMobile = () => {
    localStorage.removeItem("token");
    toast.success("User Logout");
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  //Main content
  return (
    <div className="w-full h-fit bg-black text-white border-1 overflow-auto border-gray-800 scrollbar-hide">
      {/*For only mobile*/}
      <div className="max-sm:inline hidden bg-white w-full h-[15px]">
        <div className="w-[56%] h-full flex items-center justify-between p-1">
          {token ? (
            <img
              className="w-[3vw] h-[3vw] rounded-full border-1 border-gray-400 hover:border-1 max-sm:w-[10vw] max-sm:h-[10vw] "
              src={user.profileImg}
              alt=""
              onClick={() => setToggel(!Toggle)}
            />
          ) : (
            <NavLink to={`/login`}>Login</NavLink>
          )}
          <img className="w-[50px]" src={logo} alt="" />
        </div>

        {Toggle ? (
          <div className="absolute bg-black p-3 rounded-xl text-sm left-2 border-1 border-gray-800">  
            <div className="">
              <button onClick={logoutMobile}>Logout</button>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>

      {token ? (
        <div className="max-sm:hidden">
          <Post />
        </div>
      ) : (
        ""
      )}

      {allUserPosts.length > 0 ? (
        allUserPosts.map((posts, index) => {
          const isLiked = posts.likedBy.includes(user._id);

          return (
            <div className="h-full " key={posts._id}>
              <div className="bg-black h-fit border-t-1 border-gray-800 p-2 border-b-1">
                <NavLink
                  to={`/profile/${posts?.userId?._id}`}
                  className="flex items-center gap-7 max-sm:gap-3"
                >
                  <img
                    className="w-[3vw] h-[3vw] rounded-full border-1 border-gray-400 hover:border-1 max-sm:w-[10vw] max-sm:h-[10vw] "
                    src={posts.userId.profileImg}
                    alt=""
                  />

                  <h5 className="hover:underline max-sm:text-sm max-sm:font-bold">
                    {posts?.userId?.name}
                  </h5>
                </NavLink>

                <div className="pl-18 max-sm:pl-11 sm:mt-3">
                  <div className="">
                    <p className="max-sm:text-sm max-sm:text-gray-400">
                      {posts.content}
                    </p>
                  </div>

                  <div className="h-fit">
                    {posts.mediaType ? (
                      posts.mediaType?.startsWith("image") ? (
                        <img
                          className="max-w-[95%] rounded-xl mt-5 border-1 border-gray-500"
                          src={posts.img}
                          alt=""
                        />
                      ) : (
                        <video
                          className="max-w-[95%] rounded-xl mt-5 border-1 border-gray-500"
                          autoPlay
                          loop
                          muted
                          controls
                          playsInline
                          src={posts.img}
                        />
                      )
                    ) : (
                      "Render Backend server resposing..."
                    )}
                  </div>

                  <div className="flex justify-between w-[95%] p-2 font-semibold text-gray-500 max-sm:text-sm">
                    <button className="flex items-center gap-1">
                      <FaRegComment />
                      {}k
                    </button>
                    <button
                      onClick={() => Hanlde(posts._id)}
                      className={`flex items-center gap-1 cursor-pointer ${
                        isLiked ? "text-red-500" : "text-gray-500"
                      }`}
                    >
                      <PiHeartStraightLight />
                      {posts.likes}
                    </button>

                    <button
                      className={`flex items-center gap-1 ${
                        userBookmark[index]?.postId?._id == posts?._id
                          ? "text-[#1d9bf0]"
                          : "text-white"
                      } cursor-pointer`}
                      onClick={() => bookmark(posts._id)}
                    >
                      <CiBookmark />
                    </button>

                    <button className="flex items-center gap-1">
                      <FiShare />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div className="w-full h-[100px] flex items-center justify-center">
          
          <button
            disabled
            type="button"
            className="py-2.5 px-5 me-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100         hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center"
          >
            <svg
              aria-hidden="true"
              role="status"
              className="inline w-4 h-4 me-3 text-gray-200 animate-spin dark:text-gray-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="#1C64F2"
              />
            </svg>
            Loading Data from Backend it will take around 20 seconds please stay here...   
          </button>
        </div>
      )}
      <div className="w-full h-[60px] sm:hidden"></div>
      <ToastContainer />
    </div>
  );
}

export default MainPage;
