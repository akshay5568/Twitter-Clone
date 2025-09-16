import { CgAddR } from "react-icons/cg";
import { PiApproximateEqualsBold, PiHeartStraightLight } from "react-icons/pi";
import { FiShare } from "react-icons/fi";
import { uploadReel } from "../../reducers/ReelsReducer";
import { allReels } from "../../reducers/ReelsReducer";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { LikesOnReels } from "../../reducers/ReelsReducer";
function ReelsPage() {
  //Fatching All reells from reducer.
  const allUserReels = useSelector((state) => state.reels.reels);
  const user = useSelector((state) => state.user.user);

  //jwt token
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();

  //Calling allReeels Api and fatching all reels from database and then send to rells reducer.
  useEffect(() => {
    const AllReelsFatchingApiCall = async () => {
      const respose = await axios.get(
        `${import.meta.env.VITE_BACKEND_API}/reels/all-users-reels`
      );
      dispatch(allReels(respose.data));
      console.log(respose.data);
    };
    AllReelsFatchingApiCall();
  }, []);

  //Reels upload logic and function.
  const reelsUpload = async (r) => {
    const reels = r.target.files[0];
    const formData = new FormData();
    formData.append("reel", reels);
    console.log(reels);
    const respose = await axios.post(
      `${import.meta.env.VITE_BACKEND_API}/reels/reels`,
      formData,
      {
        headers: {
          Authorization: `Brearer ${token}`,
        },
      }
    );
    console.log(respose);
  };

  //Like button for reels.
  const ReelsLike = async (reelsID) => {
    const likedUserId = user._id;
    dispatch(LikesOnReels({ reelsID, likedUserId }));
    const respose = await axios.post(
      `${import.meta.env.VITE_BACKEND_API}/reels/like/${reelsID}`,
      { likedUserId }
    );
    console.log(respose.data);
  };

  //Acthual main code for the reels and UI.
  return (
    <div className="border-1 border-gray-800 snap-y snap-mandatory w-full h-screen overflow-y-scroll ">
      {allUserReels.length > 0 ? (
        allUserReels.map((reels, index) => {
          const isLiked = reels.Reelslikes.includes(user._id);
          console.log(isLiked);
          return (
            <div
              key={index}
              className="w-full h-full snap-start flex items-center relative justify-center"
            >
              <video
                autoPlay
                muted
                playsInline
                className="w-auto h-full object-cover"
                onClick={(e) => {
                  e.target.muted = !e.target.muted;
                  if (!e.target.muted) {
                    e.target.play(); // ensure playback continues with sound
                  }
                }}
                src={reels.reelUrl}
              ></video>

              <div className="absolute  right-1 bottom-60 z-50">
                <div className="mb-5 text-center">
                  <button
                    className={`text-3xl cursor-pointer ${
                      isLiked ? "text-red-600" : "text-white"
                    }`}
                    onClick={() => ReelsLike(reels._id)}
                  >
                    <PiHeartStraightLight />
                  </button>
                  <span className="text-sm block">
                    {reels.Reelslikes.length}
                  </span>
                </div>

                <div>
                  <button className="text-3xl cursor-pointer">
                    <FiShare />
                  </button>
                </div>
              </div>
              <div className="absolute bottom-7 m-auto bg-white max-sm:bottom-20 p-2 rounded-md text-black px-8 flex items-center justify-center text-2xl">
                <input
                  className="hidden"
                  type="file"
                  id="ReelsID"
                  onChange={(e) => reelsUpload(e)}
                />
                <label htmlFor="ReelsID">
                  <CgAddR />
                </label>
              </div>

             
                <NavLink to={`/profile/${reels.userId._id}`} className="flex gap-3 absolute bottom-40 left-5 items-center cursor-pointer">
                  <div className="w-[10%] h-[10%]">
                    <span>
                      <img
                        className="rounded-full"
                        src={reels.userId.profileImg}   
                        alt=""
                      />
                    </span>
                  </div>
                  <div>
                    <span className="font-semibold">{reels.userId.name}</span>
                  </div>
                </NavLink>
         
            </div>
          );
        })
      ) : (
        <h1>loading...</h1>
      )}
    </div>
  );
}

export default ReelsPage;
