import logo from "../assets/logo.jpg";
import { NavLink, useNavigate } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa";
import { PiSuitcaseSimpleBold } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";
import { CiUser } from "react-icons/ci";
import { CgMoreO } from "react-icons/cg";
import { BiMovie } from "react-icons/bi";
import { IoIosMore } from "react-icons/io";

function Navbar({setCurrentPage}) {

  const navigate = useNavigate();

  return (
    <>
      <div>
        <img src={logo} alt="" className="w-[20%]" />
      </div>

      <div className="w-full mt-5 text-xl">
        <div className="flex items-center gap-3  mb-2 transition duration-500 hover:bg-[#3c3c3c] p-3 rounded-full">
          <IoHomeOutline />
          <button onClick={() => setCurrentPage("Home")}>Home</button>
        </div>

        <div className="flex items-center gap-3 mb-3 transition duration-500 hover:bg-[#3c3c3c] p-3 rounded-full">
          <IoSearch />
          <button className="" onClick={() => setCurrentPage("Explore")}>Explore</button>
        </div>

        <div className="flex items-center gap-3  mb-3 transition duration-500 hover:bg-[#3c3c3c] p-3 rounded-full">
          <BiMovie />
          <NavLink to="/">Reels</NavLink>
        </div>

        <div className="flex items-center gap-3   mb-3 transition duration-500 hover:bg-[#3c3c3c] p-3 rounded-full">
          <FaRegBookmark />
          <NavLink to="/">Bookmarks</NavLink>
        </div>

        <div className="flex items-center gap-3   mb-3 transition duration-500 hover:bg-[#3c3c3c] p-3 rounded-full">
          <PiSuitcaseSimpleBold />
          <NavLink to="/">Jobs</NavLink>
        </div>

        <div className="flex items-center gap-3 mb-3 transition duration-500 hover:bg-[#3c3c3c] p-3 rounded-full">
          <FaXTwitter />
          <NavLink to="/">Premium</NavLink>
        </div>

        <div className="flex items-center gap-3  mb-3 transition duration-500 hover:bg-[#3c3c3c] p-3 rounded-full">
          <CiUser />
          <NavLink to="/">Profile</NavLink>
        </div>

        <div className="flex items-center gap-3  mb-3 transition duration-500 hover:bg-[#3c3c3c] p-3 rounded-full">
          <CgMoreO />
          <NavLink to="/">More</NavLink>
        </div>

        <div className="w-full p-3 bg-white rounded-full text-center">
          <button className="text-black text-xl font-semibold">Post</button>
        </div>

        <div className="mt-25 rounded-full transition duration-500 hover:bg-[#3c3c3c]  p-2">
          <div className="flex items-center gap-4">
            <img
              className="w-[20%] h-[5vh] rounded-xl object-fill"
              src="https://plus.unsplash.com/premium_photo-1670071482460-5c08776521fe?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
            />
            <h5 className="text-sm font-semibold">Aditya Jangid</h5>
            <button>
              <IoIosMore />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
