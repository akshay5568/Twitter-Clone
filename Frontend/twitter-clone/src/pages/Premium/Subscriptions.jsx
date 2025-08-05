import { FaLongArrowAltRight } from "react-icons/fa";


function Subscriptions () {
    return (
         <div className="w-[22%] h-[33vw] border-1 border-gray-800 bg-[#16181c] rounded-xl p-3">
            <div className="flex">
              <h1 className="text-2xl">Basic</h1>
              <button type="radio"></button>
            </div>

            <div className="flex items-center gap-2 mt-3">
              <h4 className="text-3xl font-semibold">₹{356}</h4>
              <span>/ month</span>
            </div>

            <div className="flex items-center gap-2">
              <h4 className="text-gray-600">
                ₹{1700} billed annaully 
              </h4>
              <span className="bg-[#00251a] text-xs px-2 text-[#c1f1dc] rounded-full font-semibold">SAVE 16%</span>
            </div>

            <ul className="mt-3">
              <li className="flex items-center gap-2 mb-2"><FaLongArrowAltRight/>Small reply boost</li>
              <li className="flex items-center gap-2 mb-2"><FaLongArrowAltRight/>Bookmark folders</li>
              <li className="flex items-center gap-2 mb-2"><FaLongArrowAltRight/>Highlights tab</li>
              <li className="flex items-center gap-2 mb-2"><FaLongArrowAltRight/>Edit post</li>
              <li className="flex items-center gap-2 mb-2"><FaLongArrowAltRight/>Longer posts</li>
            </ul>
          </div>
    )
}

export default Subscriptions;