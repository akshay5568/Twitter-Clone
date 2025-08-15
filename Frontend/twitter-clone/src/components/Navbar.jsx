import logo from "../assets/logo.jpg";
import { NavLink } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa";
import { PiSuitcaseSimpleBold } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";
import { CiUser } from "react-icons/ci";
import { CgMoreO } from "react-icons/cg";
import { BiMovie } from "react-icons/bi";
import { IoIosMore } from "react-icons/io";
import { useState } from "react";

function Navbar({ setCurrentPage }) {
  const [logout, setLogout] = useState(false);
  return (
    <>
      <div>
        <NavLink to="/">
          <img src={logo} alt="" className="w-[20%]" />
        </NavLink>
      </div>

      <div className="w-full mt-5 text-xl relative">
        <NavLink
          className="flex items-center gap-3  mb-2 transition duration-500 hover:bg-[#3c3c3c] p-3 rounded-full cursor-pointer"
          to="/"
          style={(e) => (e.isActive ? { color: "tomato" } : { color: "white" })}
        >
          <IoHomeOutline />
          Home
        </NavLink>

        <NavLink
          to="/explore"
          className="flex items-center gap-3 mb-3 transition duration-500 hover:bg-[#3c3c3c] p-3 rounded-full cursor-pointer"
          style={(e) => (e.isActive ? { color: "tomato" } : { color: "white" })}
        >
          <IoSearch />
          Explore
        </NavLink>

        <NavLink
          className="flex items-center gap-3  mb-3 transition duration-500 hover:bg-[#3c3c3c] p-3 rounded-full cursor-pointer"
          to="/reels"
          style={(e) => (e.isActive ? { color: "tomato" } : { color: "white" })}
        >
          <BiMovie />
          Reels
        </NavLink>

        <NavLink
          className="flex items-center gap-3   mb-3 transition duration-500 hover:bg-[#3c3c3c] p-3 rounded-full cursor-pointer"
          to="/bookmarks"
          style={(e) => (e.isActive ? { color: "tomato" } : { color: "white" })}
        >
          <FaRegBookmark />
          Bookmark
        </NavLink>

        <NavLink
          className="flex items-center gap-3   mb-3 transition duration-500 hover:bg-[#3c3c3c] p-3 rounded-full cursor-pointer"
          to="/"
          style={(e) => (e.isActive ? { color: "tomato" } : { color: "white" })}
        >
          <PiSuitcaseSimpleBold />
          Jobs
        </NavLink>

        <NavLink
          to="/premium"
          className="flex items-center gap-3 mb-3 transition duration-500 hover:bg-[#3c3c3c] p-3 rounded-full cursor-pointer"
        >
          <FaXTwitter />
          Premium
        </NavLink>

        <NavLink
          className="flex items-center gap-3  mb-3 transition duration-500 hover:bg-[#3c3c3c] p-3 rounded-full cursor-pointer"
          to="/profile"
          style={(e) => (e.isActive ? { color: "tomato" } : { color: "white" })}
        >
          {" "}
          <CiUser />
          Profle
        </NavLink>

        <div className="w-full p-3 bg-white rounded-full text-center">
          <button
            onClick={() => navigate("/post")}
            className="cursor-pointer text-black text-xl font-semibold"
          >
            Post
          </button>
        </div>

        <div className="mt-25 rounded-full transition duration-500 hover:bg-[#3c3c3c] cursor-pointer p-2">
          <div
            className="flex items-center gap-4"
            onClick={() => setLogout(!logout)}
          >
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

        {logout ? (
          <div className="w-[20vw] h-[5vw] border-1 shadow-md border-gray-800 absolute bottom-19 rounded-xl bg-black flex items-center text-xl font-semibold ">
            <button className="m-auto cursor-pointer">
              Log out Aditya jangid
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default Navbar;
