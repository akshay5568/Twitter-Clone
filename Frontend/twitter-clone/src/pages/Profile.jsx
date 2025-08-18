import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { MdOutlineMonochromePhotos } from "react-icons/md";
import { useSelector } from "react-redux";

function Profile() {
  const navigate = useNavigate();
  
  const userDetails = useSelector(state => state.user?.user);

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

        <div className="w-full h-fit p-3 border-b-1 border-gray-800">
          <div className="font-semibold">Posts</div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
