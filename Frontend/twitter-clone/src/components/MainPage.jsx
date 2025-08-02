import { FaRegComment } from "react-icons/fa";
import { PiHeartStraightLight } from "react-icons/pi";
import { CiBookmark } from "react-icons/ci";
import { FiShare } from "react-icons/fi";
import { useState } from "react";
import Post from "./Post";

function MainPage() {
  const [isTure, setTure] = useState(false);

  const Hanlde = () => {
    setTure(!false);
  };
  return (
    <div className="w-full h-fit bg-black text-white border-1 overflow-auto border-gray-800 ">
      <div>

      </div>

      <div>
        <Post/>
      </div>

      <div className="h-full ">
        <div className="bg-black h-fit border-t-1 border-gray-800 p-2 border-b-1">
          <div className="flex items-center gap-7">
            <img
              className="w-[3vw] h-[3vw] rounded-full border-1 border-gray-400"
              src="https://plus.unsplash.com/premium_photo-1752192844294-35fb57ae49be?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <h5>Aditya Jangid</h5>
          </div>

          <div className="pl-18 mt-3">
            <div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad
                dolores, eos similique alias laborum sapiente eaque nam
                architecto voluptates deserunt autem? Doloremque eos veniam,
                voluptatum eveniet quis explicabo perspiciatis veritatis?
              </p>
            </div>

            <div className="h-fit">
              <img
                className="max-w-[95%] rounded-xl mt-5  border-1 border-gray-500"
                src="https://pbs.twimg.com/media/Gw3zR9LW4AAg7M9?format=jpg&name=medium"
                alt=""
              />
            </div>

            <div className="flex justify-between w-[95%] p-2 font-semibold text-gray-500">
              <button className="flex items-center gap-1">
                <FaRegComment />
                {6}k
              </button>
              <button onClick={Hanlde} className={`flex items-center gap-1`}>
                <PiHeartStraightLight
                  className={` ${isTure ? "bg-red-500" : " "}`}
                />
                {6}k
              </button>
              <button className="flex items-center gap-1">
                <CiBookmark />
              </button>
              <button className="flex items-center gap-1">
                <FiShare />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
