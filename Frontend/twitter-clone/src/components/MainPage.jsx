import { FaRegComment } from "react-icons/fa";
import { PiHeartStraightLight } from "react-icons/pi";
import { CiBookmark } from "react-icons/ci";
import { FiShare } from "react-icons/fi";
import { useEffect, useState } from "react";
import Post from "./Post";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Likes } from "../reducers/PostReducer";
import axios from "axios";
import { userAllBookmarks } from "../reducers/BookmarkReducer";
import { toast, ToastContainer } from "react-toastify";

function MainPage() {
  //Other state variabls
  const token = localStorage.getItem("token");

  //For redux
  const allUserPosts = useSelector((state) => state.post?.post);

  const userBookmark = useSelector((state) => state.bookmarks?.userBookmark);
  const allUsersAccount = useSelector(state => state.post?.allUsersAccounts);
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

  //Main content
  return (
    <div className="w-full h-fit bg-black text-white border-1 overflow-auto border-gray-800 ">   
      <div>

      </div>

      {token ? (
        <div className="max-sm:hidden">
          <Post />
        </div>
      ) : (
        ""
      )}

      {allUserPosts.map((posts, index) => {
        const isLiked = posts.likedBy.includes(user._id);
      
        return (
          <div className="h-full " key={posts._id}>
            <div className="bg-black h-fit border-t-1 border-gray-800 p-2 border-b-1">
              <NavLink to={`/profile/${posts?.userId?._id}`} className="flex items-center gap-7 max-sm:gap-3">
                <img
                  className="w-[3vw] h-[3vw] rounded-full border-1 border-gray-400 hover:border-1 max-sm:w-[10vw] max-sm:h-[10vw] "   
                  src={posts.userId.profileImg}
                  alt=""
                />
              
                <h5 className="hover:underline max-sm:text-sm max-sm:font-bold">{posts?.userId?.name}</h5>
              </NavLink>

              <div className="pl-18 max-sm:pl-11 sm:mt-3">
                <div className="">
                  <p className="max-sm:text-sm max-sm:text-gray-400">{posts.content}</p>
                </div>

                <div className="h-fit">
                 { posts.mediaType ? 
                   posts.mediaType?.startsWith("image") ? (
                    <img
                      className="max-w-[95%] rounded-xl mt-5 border-1 border-gray-500"
                      src={posts.img}
                      alt=""
                    />
                   ): (
                    <video
                      className="max-w-[95%] rounded-xl mt-5 border-1 border-gray-500"
                      onClick={(e) => e.target.muted = !e.target.muted}
                      autoPlay
                      loop
                      muted
                      playsInline
                      src={posts.img}
                    /> 
                   )                  
                   : ""
                  }
               
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
                      userBookmark[index]?.postId?._id == posts?._id ? "text-[#1d9bf0]" : "text-white"   
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
      })}
        <div className="w-full h-[60px] sm:hidden">

        </div>
      <ToastContainer/>
      
    </div>
  );
}

export default MainPage;
