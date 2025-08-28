import { useState } from "react";
import NoBookmark from "../Bookmarks/NoBookmark";
import MainPage from "..//../components/MainPage";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { FaRegComment } from "react-icons/fa";
import { PiHeartStraightLight } from "react-icons/pi";
import { CiBookmark } from "react-icons/ci";
import { FiShare } from "react-icons/fi";
import { CiMenuKebab } from "react-icons/ci";

function Bookmarks() {
  const [isBookmarkHere, setBook] = useState(false);
  const userBookmark = useSelector((state) => state.bookmarks.userBookmark);
  const userDetails = useSelector((state) => state.user.user);
  useEffect(() => {
    if (userBookmark) setBook(true);
    else setBook(false);
  }, [userBookmark, setBook]);
  return (
    <div>
      {isBookmarkHere ? (
        <div className="p-3 border-1 border-gray-800 mt-3 rounded-md">
          {userBookmark.length > 0 ? (
            userBookmark.map((posts, index) => {
              return (
                <div className="h-full " key={posts._id}>
                  <div className="bg-black h-fit border-t-1 border-gray-800 p-2 border-b-1">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img
                          className="w-[3vw] h-[3vw] rounded-full border-1 border-gray-400 hover:border-1"
                          src={userDetails.profileImg}
                          alt=""
                        />
                        <h5 className="hover:underline">{userDetails.name}</h5>
                      </div>
                      <div className="relative">
                        <button className="cursor-pointer">
                          <CiMenuKebab />
                        </button>
                        <div
                          className={`absolute text-white w-[100px] rounded-md pt-3 text-center text-sm font-semibold  h-[50px] p-2      right-5 bg-black border-1 border-gray-800 
                                            `}
                        >
                          <button className="cursor-pointer">Delete</button>
                        </div>
                      </div>
                    </div>
                    <div className="pl-18 mt-3">
                      <div>
                        <p>{posts.postId.content}</p>
                      </div>

                      <div className="h-fit">
                        {posts.postId.img?.match(
                          /\.(jpeg|jpg|png|gif|avif)$/i
                        ) ? (
                          <img
                            className="max-w-[95%] rounded-xl mt-5 border-1 border-gray-500"
                            src={posts.postId.img}
                            alt=""
                          />
                        ) : posts.postId.img?.match(/\.(mp4|webm|ogg)$/i) ? (
                          <video
                            className="max-w-[95%] rounded-xl mt-5 border-1 border-gray-500"
                            autoPlay
                            muted
                            loop
                            playsInline
                            src={posts.postId.img}
                          />
                        ) : null}
                      </div>

                      <div className="flex justify-between w-[95%] p-2 font-semibold text-gray-500">
                        <button className="flex items-center gap-1">
                          <FaRegComment />
                          {}k
                        </button>
                        <button
                          className={`flex items-center gap-1 cursor-pointer`}
                        >
                          <PiHeartStraightLight />
                          {posts.postId.likes}
                        </button>
                        <button
                          className={`flex items-center gap-1 cursor-pointer`}
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
            <NoBookmark />
          )}
        </div>
      ) : (
        <NoBookmark />
      )}
    </div>
  );
}

export default Bookmarks;
