import { FaRegComment } from "react-icons/fa";
import { PiHeartStraightLight } from "react-icons/pi";
import { CiBookmark } from "react-icons/ci";
import { FiShare } from "react-icons/fi";
import { useState } from "react";


function MainPage () {

    const [isTure,setTure] = useState(false);

    const Hanlde = () => {
        setTure(!false);
    }
  return (
     <div className="w-full h-full bg-black text-white border-1 overflow-auto border-gray-800 p-2">
        <div>

        </div>

        <div className="h-full ">
            <div className="bg-black h-fit border-t-1 border-gray-800 p-2 border-b-1">
                    <div className="flex items-center gap-2">
                        <img 
                        className="w-[3vw] h-[3vw] rounded-full border-1 border-gray-400"
                        src="https://plus.unsplash.com/premium_photo-1752192844294-35fb57ae49be?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <h5>Aditya</h5>
                    </div>

                <div className="pl-18 mt-3">
                    <div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad dolores, eos similique alias laborum sapiente eaque nam architecto voluptates deserunt autem? Doloremque eos veniam, voluptatum eveniet quis explicabo perspiciatis veritatis?</p>
                    </div>

                    <div className="h-fit">
                        <img className="w-[95%] rounded-xl mt-5" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fFdvbWVufGVufDB8fDB8fHww" alt="" />
                    </div>

                    <div className="flex justify-between w-[95%] p-2 font-semibold text-gray-500">
                        <button className="flex items-center gap-1"><FaRegComment/>{6}k</button>
                        <button onClick={Hanlde} className={`flex items-center gap-1`}><PiHeartStraightLight className={` ${isTure ? "bg-red-500" : " " }`}/>{6}k</button>
                        <button className="flex items-center gap-1"><CiBookmark/></button>
                        <button className="flex items-center gap-1"><FiShare/></button>
                    </div>

                </div>
            </div>
        </div>
     </div>
  )
}

export default MainPage;