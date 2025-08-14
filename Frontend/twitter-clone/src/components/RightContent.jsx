import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

function RightContent() {
  const navigate = useNavigate();
  const [isFollow,setIsFollow] = useState(true);
  return (
    <div className="w-full h-full pl-9 p-3">
      <div className="w-[80%]">
        <div>
          <input
            type="text"
            className="p-3 rounded-l-full rounded-r-full border-1 border-gray-600 text-white w-full text-xs"
            placeholder="🔍  Search"
          />
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
            className="p-2 px-6 rounded-r-full rounded-l-full bg-[#1d9bf0] mt-3 font-semibold text-xs cursor-pointer">
              Subscribe
            </button>
          </div>
        </div>

        <div className="border-1 border-gray-600 rounded-xl mt-5 p-3 pr-5">
          <h1 className="font-bold text-xl">Who to Follow</h1>
          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center gap-3">
              <img
                className="w-[3vw] h-[3vw] rounded-full"
                src="https://images.unsplash.com/photo-1743378905365-1629c70d089a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8"
                alt=""
              />
              <h4>Aditya</h4>
            </div>
            <div className="bg-white p-1 px-5 text-black font-semibold rounded-full">
                {isFollow ?  <button className="cursor-pointer" onClick={() => setIsFollow(!isFollow)}>Unfollow</button> :  <button  onClick={() => setIsFollow(!isFollow)} className="cursor-pointer">Folllow</button>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightContent;
