import { NavLink } from "react-router-dom";
import { FaImage } from "react-icons/fa6";
import { useSelector } from "react-redux";

function Post() {

  const userDetails = useSelector(state => state.user.user);
  return (
    <div className="w-full bg-black h-full">
      <div className="w-full h-fit p-2 border-t-1 border-gray-800">
        <div className="flex text-white gap-3 p-3">
          <div className="w-[10%]">
            <NavLink to="/profile">
              <img
                className="w-[3vw] h-[3vw] rounded-full cursor-pointer"
                src={userDetails.profileImg}
                alt=""
              />
            </NavLink>
          </div>

          <div className="w-[90%]">
            <form action="" className="">
              <textarea
                name=""
                className="border-b-1 border-b-gray-600 w-full text-xl outline-none"
                placeholder="What's happening?"
                id=""
              ></textarea>
              <br />
              <div className="flex items-center justify-between">
                <input
                  className="hidden"
                  type="file"
                  name="Image"
                  placeholder="Image"
                  id="file-upload"
                />
                <label htmlFor="file-upload">
                  <FaImage className="text-[#1d9bf0]  cursor-pointer" />
                </label>
             

                <button className="px-3 p-1 bg-white rounded-full text-black   cursor-pointer font-semibold">
                Post
              </button>
               </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
