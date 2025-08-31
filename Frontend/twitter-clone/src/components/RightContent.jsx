import { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { NavLink, useNavigate } from "react-router-dom";
import { allUsersAccounts } from "../reducers/PostReducer";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { followAccount } from "../reducers/PostReducer";
import Explore from "../pages/Explore";

function RightContent() {
  //Variables
  const navigate = useNavigate();
  // const [isFollow, setIsFollow] = useState(true);
  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.user.user);

  //Slice user's for better ui looking.4
  const user = Math.floor(Math.random() * 5) + 2;
  const allUsers = useSelector((state) => state.post.allUsersAccounts);
  // .slice(
  //   0,
  //   user
  // );

  const followingUserID = userDetails._id;

  //follow Handller
  const followHandel = async (followUserID) => {
    await axios.post(
      `http://localhost:8080/api/user-followers/${followUserID}`,
      { followingUserID }
    );
    dispatch(followAccount({ followUserID, followingUserID }));
  };

  //Alluser's ApiCAll
  useEffect(() => {
    const ApiCAll = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/all-users");
        dispatch(allUsersAccounts(response.data));
      } catch (error) {
        console.error("Something went wrong with api", error);
      }
    };
    ApiCAll();
  }, []);

  //Main code
  return (
    <div className="w-full h-full pl-9 p-3">
      <div className="w-[80%]">
        <div>
          <Explore />
        </div>

        <div className="border-1 border-gray-600 rounded-xl mt-5 p-3 pr-5">
          <div className="text-[#e7e9ea]">
            <h1 className="font-semibold text-xl">Subscribe to Premium</h1>
            <p className="mt-3">
              Subscribe to unlock new features and if eligible, receive a share
              of revenue.
            </p>
            <button
              onClick={() => navigate("/premium")}
              className="p-2 px-6 rounded-r-full rounded-l-full bg-[#1d9bf0] mt-3 font-semibold text-xs cursor-pointer"
            >
              Subscribe
            </button>
          </div>
        </div>

        <div className="border-1 border-gray-600 rounded-xl mt-5 p-3 pr-5">
          <h1 className="font-bold text-xl">Who to Follow</h1>
          {allUsers.map((users, index) => {
            const isFollow = users.followers?.includes(followingUserID);
            return (
              <div className="flex justify-between items-center mt-4">
                <div>
                  <NavLink className="flex items-center gap-3" to={`/profile/${allUsers[index]._id}`}>
                    <img
                      className="w-[3vw] h-[3vw] rounded-full"
                      src={users.profileImg}
                      alt=""
                    />
                    <h4 className="hover:underline">{users.name}</h4>
                  </NavLink>
                </div>
                <div className="bg-white p-1 px-5 text-black font-semibold rounded-full">
                  <button
                    className="cursor-pointer"
                    onClick={() => followHandel(users._id)}
                  >
                    {users.followers == followingUserID || isFollow
                      ? "Unfollow"
                      : "Follow"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default RightContent;
