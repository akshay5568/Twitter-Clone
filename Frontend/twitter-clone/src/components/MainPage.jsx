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

function MainPage() {
  //Other state variables
  const token = localStorage.getItem("token");
  const [isTure, setTure] = useState(false);
  const [isBookmark, setBookmark] = useState(true);

  //For redux
  const allUserPosts = useSelector((state) => state.post?.post);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  //For likes button
  const Hanlde = (PostId) => {
    const UserId = user._id;
    setTure(!isTure);
    dispatch(Likes({ UserId, PostId }));

    //For likes Api
    const ApiCall = async () => {
      const response = await axios.post(`http://localhost:8080/api/post-like/${PostId}`, {} , {
        headers: {
          Authorization: `Brearer ${token}`,
        },
      });
      console.log(response.data);
    };
    ApiCall();
  };

  //Main content
  return (
    <div className="w-full h-fit bg-black text-white border-1 overflow-auto border-gray-800 ">
      <div></div>

      {token ? (
        <div>
          <Post />
        </div>
      ) : (
        ""
      )}
      {allUserPosts.map((posts, index) => {
        return (
          <div className="h-full " key={index}>
            <div className="bg-black h-fit border-t-1 border-gray-800 p-2 border-b-1">
              <NavLink to="/profile" className="flex items-center gap-7">
                <img
                  className="w-[3vw] h-[3vw] rounded-full border-1 border-gray-400 hover:border-1"
                  src={user.profileImg}
                  alt=""
                />
                <h5 className="hover:underline">{user.name}</h5>
              </NavLink>

              <div className="pl-18 mt-3">
                <div>
                  <p>{posts.content}</p>
                </div>

                <div className="h-fit">
                  <img
                    className="max-w-[95%]  rounded-xl mt-5  border-1 border-gray-500"
                    src={posts.img}
                    alt=""
                  />
                </div>

                <div className="flex justify-between w-[95%] p-2 font-semibold text-gray-500">
                  <button className="flex items-center gap-1">
                    <FaRegComment />
                    {}k
                  </button>
                  <button
                    onClick={() => Hanlde(posts._id)}
                    className={`flex items-center gap-1 cursor-pointer ${
                      isTure ? "text-red-500" : " "
                    }`}
                  >
                    <PiHeartStraightLight />
                    {posts.likes}
                  </button>
                  <button
                    className={`flex items-center gap-1 ${
                      isBookmark ? "text-[#1d9bf0]" : " "
                    } cursor-pointer`}
                    onClick={() => setBookmark(!isBookmark)}
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
    </div>
  );
}

export default MainPage;
