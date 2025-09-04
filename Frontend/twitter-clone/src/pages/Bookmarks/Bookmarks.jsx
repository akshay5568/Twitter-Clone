import { useState } from "react";
import NoBookmark from "../Bookmarks/NoBookmark";
import MainPage from "..//../components/MainPage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { FaRegComment } from "react-icons/fa";
import { PiHeartStraightLight } from "react-icons/pi";
import { CiBookmark } from "react-icons/ci";
import { FiShare } from "react-icons/fi";
import { CiMenuKebab } from "react-icons/ci";
import axios from "axios";
import { userBookmarkDelete } from "../../reducers/BookmarkReducer";
import { toast,ToastContainer } from "react-toastify";

function Bookmarks() {
  const [isBookmarkHere, setBook] = useState(false);
  const [toggel, setToggel] = useState(null);
  const userBookmark = useSelector((state) => state.bookmarks.userBookmark);

  const userDetails = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userBookmark) setBook(true);
    else setBook(false);
  }, [userBookmark, setBook]);

  const toggelHandller = (index) => {
    toggel == index ? setToggel(null) : setToggel(index);
  };

  const DeleteBookmark = async (bookmarkID) => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_BACKEND_API}/api/delete-bookmark/${bookmarkID}`
      );
      dispatch(userBookmarkDelete(bookmarkID));
      console.log(response.data);
      toast.success("Bookmark Deleted")
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {isBookmarkHere ? (
        <div className="p-3 border-1 border-gray-800 mt-3 rounded-md">
          {userBookmark.length > 0 ? (
            userBookmark.map((posts, index) => {
              return (
                <div className="h-full mb-3 " key={posts._id}>
                  <div className="bg-black h-fit  border-gray-800 rounded-md border-1 p-2 ">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img
                          className="w-[3vw] h-[3vw] rounded-full max-sm:w-[10vw] max-sm:h-[10vw] border-1 border-gray-400 hover:border-1"
                          src={userDetails.profileImg}
                          alt=""
                        />
                        <h5 className="hover:underline">{userDetails.name}</h5>
                      </div>
                      <div className="relative">
                        <button
                          className="cursor-pointer"
                          onClick={() => toggelHandller(index)}
                        >
                          <CiMenuKebab />
                        </button>
                        <div
                          className={`absolute text-white w-[100px] rounded-md pt-2 text-center text-sm font-semibold  h-[60px] p-2  right-5   bg-black border-1 border-gray-800 ${
                            toggel == index ? "inline" : "hidden"
                          }`}
                        >
                          <button
                            className="cursor-pointer"
                            onClick={() => DeleteBookmark(posts._id)}
                          >
                            Delete From Bookmark
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="pl-18 max-sm:pl-10 mt-3">
                      <div>
                        <p className="max-sm:text-gray-500">{posts?.postId?.content}</p>
                      </div>

                      <div className="h-fit">
                        {posts.postId?.mediaType ? (
                          posts.postId.mediaType?.startsWith("image") ? (
                            <img
                              className="max-w-[95%] rounded-xl mt-5 border-1 border-gray-500"
                              src={posts.postId.img}
                              alt=""
                            />
                          ) : (
                            <video
                              className="max-w-[95%] rounded-xl mt-5 border-1 border-gray-500"
                              onChange={(e) =>
                                (e.target.muted = !e.target.muted)
                              }
                              autoPlay
                              muted
                              loop
                              playsInline
                              src={posts.postId.img}
                            />
                          )
                        ) : (
                          ""
                        )}
                      </div>

                      <div className="flex justify-between w-[95%] p-2 font-semibold text-gray-500 max-sm:text-sm">
                        <button className="flex items-center gap-1">
                          <FaRegComment />
                          {}k
                        </button>
                        <button
                          className={`flex items-center gap-1 cursor-pointer`}
                        >
                          <PiHeartStraightLight />
                          {posts.postId?.likes}
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
      <ToastContainer/>
    </div>
  );
}

export default Bookmarks;
