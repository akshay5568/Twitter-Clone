import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { MdOutlineMonochromePhotos } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { FaRegComment } from "react-icons/fa";
import { PiHeartStraightLight } from "react-icons/pi";
import { CiBookmark } from "react-icons/ci";
import { FiShare } from "react-icons/fi";
import { CiMenuKebab } from "react-icons/ci";
import { useState } from "react";
import axios from "axios";
import { postDelete } from "../reducers/PostReducer";

function Profile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [toggel, setToggel] = useState(null);

  const handllerToggel = (index) => {
    setToggel(toggel == index ? null : index);
  };

  const PostDeleter = async (id) => {
    await axios.delete(`http://localhost:8080/api/delete-post/${id}`);
     dispatch(postDelete(id));
  };

  const userDetails = useSelector((state) => state.user?.user);
  const userPost = useSelector((state) => state.post?.userPost);

  return (
    <div className="w-full h-fit bg-black text-white border-1 border-gray-800">
      <div className="flex items-center gap-3 h-[3vw] w-full bg-transparent p-2">
        <button className="cursor-pointer" onClick={() => navigate(-1)}>
          <FaArrowLeft />
        </button>
        <h3>{userDetails.name}</h3>
      </div>

      <div className="w-full h-fit relative">
        <div className="h-[15vw]">
          <img
            className="h-full w-full object-fit"
            src={userDetails.img}
            alt=""
          />
        </div>
        <div className="w-full h-fit p-3">
          <div className="w-[10vw] h-[10vw] absolute rounded-full top-35">
            <input type="file" className="hidden" id="img" />
            <label htmlFor="img" className="cursor-pointer ">
              <img
                className="rounded-full absolute w-full h-full"
                src={userDetails.profileImg}
                alt=""
              />
              <span className="">
                <MdOutlineMonochromePhotos />
              </span>
            </label>
          </div>

          <div className="mt-15">
            <h3 className="font-semibold text-xl">{userDetails.name}</h3>
            <div className="flex items-center gap-3 mt-3 text-xs text-gray-500">
              <h3>{userDetails.following} Following</h3>
              <h3>{userDetails.followers} Followers</h3>
            </div>
          </div>
        </div>

        <div className="w-full h-fit border-b-1 border-gray-800 mt-3">
          <div className="font-semibold border-b-1 p-3 border-b-gray-400">
            Posts
          </div>
          <div className="p-3 border-1 border-gray-800 mt-3 rounded-md">
            {userPost.length > 0 
              ? userPost.map((posts, index) => {
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
                            <h5 className="hover:underline">
                              {userDetails.name}
                            </h5>
                          </div>
                          <div className="relative">
                            <button
                              className="cursor-pointer"
                              onClick={() => handllerToggel(index)}
                            >
                              <CiMenuKebab />
                            </button>
                            <div
                              className={`absolute text-white w-[100px] rounded-md pt-3 text-center text-sm font-semibold  h-[50px] p-2      right-5 bg-black border-1 border-gray-800 ${
                                toggel == index ? "inline" : "hidden"
                              }`}
                            >
                              <button
                                className="cursor-pointer"
                                onClick={() => PostDeleter(posts._id)}
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        </div>
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
                              className={`flex items-center gap-1 cursor-pointer`}
                            >
                              <PiHeartStraightLight />
                              {posts.likes}
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
              : "No Post Uploded yet"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
