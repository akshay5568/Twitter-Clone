import { CgAddR } from "react-icons/cg";
import { PiApproximateEqualsBold, PiHeartStraightLight } from "react-icons/pi";
import { FiShare } from "react-icons/fi";
import { uploadReel } from "../../reducers/ReelsReducer";
import { allReels } from "../../reducers/ReelsReducer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from 'axios';
function ReelsPage() {
  const videos = [
    "https://res.cloudinary.com/doz6vrvnj/video/upload/v1750242759/samples/cld-sample-video.mp4",       
    "https://res.cloudinary.com/doz6vrvnj/video/upload/v1750242759/samples/sea-turtle.mp4",
    "https://res.cloudinary.com/doz6vrvnj/video/upload/v1750242759/samples/elephants.mp4",
  ];


  const allUserReels = useSelector(state => state.reels.reels);


  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  useEffect(() => {
        const AllReelsFatchingApiCall = async () => {
               const respose = await axios.get(`${import.meta.env.VITE_BACKEND_API}/reels/all-users-reels`);
               dispatch(allReels(respose.data));
        }
        AllReelsFatchingApiCall();
  }, [])

  const reelsUpload = async (r) => {
       const reels = r.target.files[0]
       const formData = new FormData();
       formData.append('reel', reels);
       console.log(reels);
       const respose  = await axios.post(`${import.meta.env.VITE_BACKEND_API}/reels/reels`, formData , {
           headers:{
              Authorization: `Brearer ${token}`,
           }
       })
       console.log(respose);
  }

  return (
    <div className="border-1 border-gray-800 snap-y snap-mandatory w-full h-screen overflow-y-scroll ">       
      {allUserReels.map((reels, index) => (
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
            <div className="mb-3">
              <button className="text-3xl cursor-pointer">
                <PiHeartStraightLight />
              </button>
            </div>
            <div>
              <button className="text-3xl cursor-pointer">
                <FiShare />
              </button>
            </div>
          </div>
          <div className="absolute bottom-7 m-auto bg-white max-sm:bottom-20 p-2 rounded-md text-black px-8 flex items-center justify-center text-2xl">
            <input className="hidden" type="file" id="ReelsID" onChange={(e) => reelsUpload(e)}/>    
            <label htmlFor="ReelsID">
              <CgAddR />
            </label>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ReelsPage;
