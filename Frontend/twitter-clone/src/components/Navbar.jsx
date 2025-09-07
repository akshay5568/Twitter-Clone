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
import { useState } from "react";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";

function Navbar({ setCurrentPage }) {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [logout, setLogout] = useState(false);

  const LogoutButton = () => {
    localStorage.removeItem("token");
    setLogout(false);
    navigate("/login");
  };

  const userDetails = useSelector((state) => state.user.user);

  return (
    <div className="max-sm:bg-black">
      <div className="max-sm:hidden">
        <NavLink to="/">
          <img src={logo} alt="" className="w-[20%]" />   
        </NavLink>
      </div>

      <div
        className="w-full mt-5 max-sm:mt-0 text-xl  max-sm:flex max-sm:justify-between"
        onBlur={() => setLogout(false)}
      >
        <NavLink
          className="flex items-center gap-3  mb-2 transition duration-500 hover:bg-[#3c3c3c] p-3 rounded-full cursor-pointer"   
          to="/"
          style={(e) => (e.isActive ? { color: "tomato" } : { color: "white" })}
        >
          <IoHomeOutline />
          <span className="max-sm:hidden">Home</span>
        </NavLink>

        <NavLink
          to="/explore"
          className="flex items-center gap-3 mb-3 transition duration-500 hover:bg-[#3c3c3c] p-3 rounded-full cursor-pointer"   
          style={(e) => (e.isActive ? { color: "tomato" } : { color: "white" })}
        >
          <IoSearch />
          <span className="max-sm:hidden">Explore</span>
        </NavLink>

        <NavLink
          className="flex items-center gap-3  mb-3 transition duration-500 hover:bg-[#3c3c3c] p-3 rounded-full cursor-pointer"
          to="/reels"
          style={(e) => (e.isActive ? { color: "tomato" } : { color: "white" })}
        >
          <BiMovie />
          <span className="max-sm:hidden">Reels</span>
        </NavLink>

        <NavLink
          className="flex items-center gap-3   mb-3 transition duration-500 hover:bg-[#3c3c3c] p-3 rounded-full cursor-pointer"
          to={token ? "/bookmarks" : "/login"}
          style={(e) => (e.isActive ? { color: "tomato" } : { color: "white" })}
        >
          <FaRegBookmark />
          <span className="max-sm:hidden">Bookmark</span>
        </NavLink>

        <NavLink
          className="flex items-center gap-3   mb-3 transition duration-500 hover:bg-[#3c3c3c] p-3 rounded-full cursor-pointer"
          to="/"
          style={(e) => (e.isActive ? { color: "tomato" } : { color: "white" })}
        >
          <PiSuitcaseSimpleBold />
          <span className="max-sm:hidden">Jobs</span>
        </NavLink>

        <NavLink
          to="/premium"
          className="flex items-center gap-3 mb-3 transition duration-500 hover:bg-[#3c3c3c] p-3 rounded-full cursor-pointer"
        >
          <FaXTwitter />
          <span className="max-sm:hidden">Premium</span>
        </NavLink>

        {token ? <NavLink
          className="flex items-center gap-3  mb-3 transition duration-500 hover:bg-[#3c3c3c] p-3 rounded-full cursor-pointer"
          to={token ? `/profile/${userDetails._id}` : "/login"}
          style={(e) => (e.isActive ? { color: "tomato" } : { color: "white" })}
        >
          {" "}
          <CiUser />
          <span className="max-sm:hidden">Profle</span>
        </NavLink>: <NavLink to={`/login`} className="flex items-center gap-3 text-xl  mb-3 transition duration-500 hover:bg-[#3c3c3c] p-3 rounded-full cursor-pointer">Login</NavLink>}


        <div className="w-full p-3 bg-white rounded-full text-center max-sm:hidden">
          <button
            onClick={() => navigate("/post")}
            className="w-full cursor-pointer text-black text-xl font-semibold"
          >
            Post
          </button>
        </div>

        {token ? (
          <div className="mt-25 rounded-full transition duration-500 hover:bg-[#3c3c3c] cursor-pointer p-2 max-sm:hidden">
            <div
              className="flex items-center gap-4"
              onClick={() => setLogout(!logout)}
            >
              <img
                className="w-[20%] h-[5vh] rounded-xl object-fill"
                src={userDetails.profileImg}
                alt=""
              />
              <h5 className="text-sm font-semibold">{userDetails.name}</h5>
              <button>
                <IoIosMore />
              </button>
            </div>
          </div>
        ) : (
          <div className="mt-25 h-[50px] max-sm:hidden w-[200px] rounded-xl border-1 transition duration-500 hover:bg-[#3c3c3c]  border-gray-800 flex items-center justify-center">
            <button
              className="text-base font-semibold cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          </div>
        )}

        {logout ? (
          <div className="w-[20vw] h-[5vw] border-1 shadow-md border-gray-800 absolute bottom-19 rounded-xl bg-black flex items-center text-xl font-semibold max-sm:hidden">
            <button className="m-auto cursor-pointer" onClick={LogoutButton}>
              Log out {userDetails.name}
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Navbar;
