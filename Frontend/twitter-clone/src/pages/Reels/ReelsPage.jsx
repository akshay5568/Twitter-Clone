import { CgAddR } from "react-icons/cg";
import { PiApproximateEqualsBold, PiHeartStraightLight } from "react-icons/pi";
import { FiShare } from "react-icons/fi";
import { uploadReel } from "../../reducers/ReelsReducer";
import { allReels } from "../../reducers/ReelsReducer";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { LikesOnReels } from "../../reducers/ReelsReducer";
import { toast, ToastContainer } from "react-toastify";
import { followAccount } from "../../reducers/PostReducer";
function ReelsPage() {
  //Fatching All reells from reducer.
  const allUserReels = useSelector((state) => state.reels.reels);
  const user = useSelector((state) => state.user.user);
  const allUsers = useSelector((state) => state.post?.allUsersAccounts);


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
    toast.success("Reel Uploaded");
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

  //Follow Logic
  const FollowButton = async (followUserID, isFollow) => {
    const followingUserID = user._id;
    await axios.post(
      `${import.meta.env.VITE_BACKEND_API}/api/user-followers/${followUserID}`,
      { followingUserID }
    );
    dispatch(followAccount({ followUserID, followingUserID }));
    if (isFollow) toast.success("Unfollowed");
    else toast.success("Followed");
  };


//Reels audio logic
  const videoRefs = useRef([]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          if (entry.isIntersecting) {
            video.play();
          } else {
            video.pause();
            video.muted = true; // optional: force mute when leaving
          }
        });
      },
      { threshold: 0.8 } // 80% visible = active
    );

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => {
      videoRefs.current.forEach((video) => {
        if (video) observer.unobserve(video);
      });
    };
  }, []);

  //Acthual main code for the reels and UI.
  return (
    <div className="border-1 border-gray-800 snap-y snap-mandatory w-full h-screen overflow-y-scroll ">
      {allUserReels.length > 0 ? (
        allUserReels.map((reels, index) => {
          const isLiked = reels.Reelslikes.includes(user._id);

          const reelOwner = allUsers.find((u) => u._id === reels.userId._id);
          const isFollow = reelOwner?.followers.includes(user._id);

          console.log(isFollow);
          return (
            <div
              key={index}
              className="w-full h-full snap-start flex items-center relative justify-center"
            >
              <video
                key={index}
                ref={(el) => (videoRefs.current[index] = el)}
                className="w-auto h-full object-cover"
                muted
                playsInline
                onClick={(e) => {
                  e.target.muted = !e.target.muted;
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

              <div className="flex absolute bottom-40 left-5 gap-5 items-center cursor-pointer w-[70%]">
                <NavLink
                  to={`/profile/${reels.userId._id}`}
                  className="flex gap-3 items-center cursor-pointer max-sm:w-fit"
                >
                  <div className="">
                    <img
                      className="rounded-full w-[90%] h-[6vh] max-sm:w-[50px]"
                      src={reels.userId.profileImg}
                      alt=""
                    />
                  </div>
                  <div>
                    <span className="font-semibold">{reels.userId.name}</span>
                  </div>
                </NavLink>
                <div
                  className={`${reels.userId._id == user._id ? "hidden" : ""}`}
                >
                  <button
                    onClick={() => FollowButton(reels.userId._id, isFollow)}
                    className="border-1 border-white p-1 rounded-xl text-sm"
                  >
                    {isFollow ? "Followed" : "Follow"}
                  </button>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <h1>loading...</h1>
      )}
      <ToastContainer />
    </div>
  );
}

export default ReelsPage;
