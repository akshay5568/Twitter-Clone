
import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { allUsersAccounts } from "../reducers/PostReducer";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { followAccount } from "../reducers/PostReducer";
import { toast, ToastContainer } from "react-toastify";

function Explore() {
  const [inputData,setInputData] = useState("");
  const [SearchBar, setSearchBar] = useState(false);
  const allUsersAccount = useSelector(state => state.post?.allUsersAccounts);       
  const filterdUsers = allUsersAccount.filter(user => {
    return user.name.toLowerCase().includes(inputData.toLowerCase());
  } )

  //Variables
  const navigate = useNavigate();

  // const [isFollow, setIsFollow] = useState(true);
  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.user.user);

  //Slice user's for better ui looking.4
  const user = Math.floor(Math.random() * 5) + 2;
  const allUsers = useSelector((state) => state.post.allUsersAccounts)      
  .slice(
    0,
    user
  );

  const followingUserID = userDetails._id;

  //follow Handller
  const followHandel = async (followUserID, isFollow) => {
    await axios.post(
      `${import.meta.env.VITE_BACKEND_API}/api/user-followers/${followUserID}`,
      { followingUserID }
    );
    dispatch(followAccount({ followUserID, followingUserID }));
    if (isFollow) {
      toast.success("Unfollowed");
    } else toast.success("Followed");
  };

  //Alluser's ApiCAll
  useEffect(() => {
    const ApiCAll = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_API}/api/all-users`);
        dispatch(allUsersAccounts(response.data));
      } catch (error) {
        console.error("Something went wrong with api", error);
      }
    };
    ApiCAll();
  }, []);


  return (
    <div className="w-full h-full border-1 border-gray-800 p-3 relative">
      <div>
        <input
          type="text"
          className="p-3 rounded-l-full rounded-r-full border-1 border-gray-600 text-white w-full text-xs"
          placeholder="🔍  Search"
          onFocus={() => setSearchBar(true)}
          onBlur={() => setTimeout(() => setSearchBar(false),200)}
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
        />


        {SearchBar && (
          <div className="absolute bg-black border-1 border-gray-800 overflow-y-scroll shadow-gray-400 w-[96%] mt-1 h-fit p-3 rounded-md m-auto">   
            {filterdUsers.map((users,index) => {
               return (<NavLink key={users._id} to={`/profile/${users._id}`} className="text-white">
                    <span className="block border-b-1 border-gray-800 p-2 hover:bg-gray-800 rounded-md">
                        {users.name}
                    </span>
                </NavLink>
               )   
            })}
          </div>
        )}
      </div>


      <div className="max-sm:inline hidden">
         <div className="border-1 border-gray-600 rounded-xl mt-5 p-3 pr-5">
          <h1 className="font-bold text-xl">Who to Follow</h1>
          {allUsers.map((users, index) => {
            const isFollow = users.followers?.includes(followingUserID);
            return (
              <div className="flex justify-between items-center mt-4">
                <div>
                  <NavLink
                    className="flex items-center gap-3"
                    to={`/profile/${allUsers[index]._id}`}
                  >
                    <img
                      className="w-[10vw] h-[10vw] rounded-full"
                      src={users.profileImg}
                      alt=""
                    />
                    <h4 className="hover:underline">{users.name}</h4>
                  </NavLink>
                </div>
                <div className="bg-white p-1 px-2 text-sm text-black font-semibold rounded-full">
                  <button
                    className="cursor-pointer"
                    onClick={() => followHandel(users._id, isFollow)}
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
          <ToastContainer/>
    </div>
  );
}

export default Explore;
