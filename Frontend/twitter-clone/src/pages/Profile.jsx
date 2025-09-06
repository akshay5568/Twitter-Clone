import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { MdOutlineMonochromePhotos } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { FaRegComment } from "react-icons/fa";
import { PiHeartStraightLight } from "react-icons/pi";
import { CiBookmark } from "react-icons/ci";
import { FiShare } from "react-icons/fi";
import { CiMenuKebab } from "react-icons/ci";
import { useEffect, useState } from "react";
import axios from "axios";
import { postDelete } from "../reducers/PostReducer";
import { updateUserProfile } from "../reducers/UserReducer";
import { toast,ToastContainer } from "react-toastify";
import { UpdateUserProfile } from "../reducers/PostReducer";

function Profile() {
  //Importent variables.
  const userProfileId = useParams().id;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [toggel, setToggel] = useState(null);

  const userDetails = useSelector((state) => state.user?.user);
  const userPost = useSelector((state) => state.post?.post);

  const allUsersAccount = useSelector((state) => state.post?.allUsersAccounts);
  const filterdUser = allUsersAccount?.filter((user) => {
    return user._id === userProfileId;
  });

  const filterdPost = userPost?.filter(
    (post) => post.userId._id === userProfileId
  );

  //Toggle Delete Handller.
  const handllerToggel = (index) => {
    setToggel(toggel == index ? null : index);
  };

  //Post Delete Handller.
  const PostDeleter = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_BACKEND_API}/api/delete-post/${id}`);
      dispatch(postDelete(id));
      toast.success("Post deleted");
    } catch (error) {
      console.error("Smoething went wrong", error);
      toast.error(error)
    }
  };

  //Profile Img. updation.
  const profileIMG = async (profileData, ) => {
    try {
      const formData = new FormData();
      formData.append("image", profileData);
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_API}/api/profile-image/${userDetails._id}`,       
        formData
      );
      dispatch(updateUserProfile(response.data.profileImg));      
      console.log(response.data._id)
      dispatch(UpdateUserProfile(response.data))   
      toast.success("Profile Image Updated");   
    } catch (error) {
      console.error(error);
      toast.error(error);
    }
  };

  //Main logic code.
  return (
    <div className="w-full h-full bg-black text-white border-1 border-gray-800">   
      <div className="flex items-center gap-3 h-[3vw] w-full bg-transparent p-2 max-sm:p-5">
        <button className="cursor-pointer max-sm:text-gray-500" onClick={() => navigate(-1)}>
          <FaArrowLeft />
        </button>
        <h3 >{filterdUser[0]?.name}</h3>
      </div>

      <div className="w-full relative">
        <div className="h-[15vw] max-sm:h-[30vw]">
          <img
            className="h-full w-full object-fit"
            src={filterdUser[0]?.img}
            alt=""
          />
        </div>
        <div className="w-full h-fit p-3">
          <div className="w-[10vw] h-[10vw] absolute rounded-full top-35 max-sm:top-20 max-sm:w-[20vw] max-sm:h-[20vw]">
            <input
              type="file"
              className="hidden"
              id="img"
              onChange={(e) => profileIMG(e.target.files[0])}
            />
            <label htmlFor="img" className="cursor-pointer ">
              <img
                className="rounded-full absolute w-full h-full"
                src={filterdUser[0]?.profileImg}
                alt=""
              />
              <span className="">
                <MdOutlineMonochromePhotos />
              </span>
            </label>
          </div>

          <div className="mt-15 max-sm:mt-10">
            <h3 className="font-semibold text-xl">{filterdUser[0]?.name}</h3>
            <div className="flex items-center gap-3 mt-3 max-sm:mt-2 text-xs text-gray-500">
              <h3>Following <span className="text-white">{filterdUser[0]?.following?.length}</span></h3>
              <h3>Followers <span className="text-white">{filterdUser[0]?.followers?.length}</span></h3>
            </div>
          </div>
        </div>

        <div className="w-full h-fit border-b-1 border-gray-800 mt-3">
          <div className="font-semibold border-b-1 p-3 border-b-gray-400">
            Posts
          </div>
          <div className="h-full  border-1 border-gray-800 mt-3 rounded-md">
            {filterdPost.length > 0
              ? filterdPost.map((posts, index) => {
                  return (
                    <div className="h-full" key={posts._id}>
                      <div className="bg-black h-fit border-1 mb-3 rounded-md border-gray-800 p-2 ">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <img
                              className="w-[3vw] h-[3vw] max-sm:w-[10vw] max-sm:h-[10vw] rounded-full border-1 border-gray-400 hover:border-1"
                              src={filterdUser[0]?.profileImg}
                              alt=""
                            />
                            <h5 className="hover:underline">
                              {filterdUser[0]?.name}
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
                                onClick={() =>
                                  userDetails._id == posts.userId._id
                                    ? PostDeleter(posts._id)
                                    : "loading..."
                                }
                              >
                                Delete
                              </button>
                        
                            </div>
                          </div>
                        </div>
                        <div className="max-sm:pl-10 pl-18 mt-3">
                          <div className="max-sm:text-gray-300 max-sm:text-sm">
                            <p>{posts.content}</p>
                          </div>

                          <div className="h-fit">
                            {posts.mediaType ? 
                            posts.mediaType?.startsWith("image") ? (
                              <img
                                className="max-w-[95%] rounded-xl mt-5 border-1 border-gray-500"
                                src={posts.img}
                                alt=""
                              />
                            ) : (
                              <video
                                className="max-w-[95%] rounded-xl mt-5 border-1 border-gray-500"
                                onClick={(e) =>
                                  (e.target.muted = !e.target.muted)
                                }
                                autoPlay
                                muted
                                loop
                                playsInline
                                src={posts.img}
                              />
                            ) : ""
                          }
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
            <ToastContainer/>
    </div>
  );
}

export default Profile;
