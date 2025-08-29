import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function Explore() {
   const [inputData,setInputData] = useState("");
  const [SearchBar, setSearchBar] = useState(false);
  const allUsersAccount = useSelector(state => state.post?.allUsersAccounts);
  const filterdUsers = allUsersAccount.filter(user => {
    return user.name.toLowerCase().includes(inputData.toLowerCase());
  } )
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
    </div>
  );
}

export default Explore;
